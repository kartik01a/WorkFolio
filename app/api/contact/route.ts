import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mail";

export const runtime = "nodejs";

const MAX_MESSAGE = 8000;
const MAX_NAME = 200;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: Request) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!raw || typeof raw !== "object") {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const body = raw as Record<string, unknown>;
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (name.length > MAX_NAME) {
    return NextResponse.json({ error: "Name is too long." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  if (message.length > MAX_MESSAGE) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  try {
    await sendContactEmail({ name, email, message });
  } catch (err) {
    console.error("[contact]", err);
    const code =
      err && typeof err === "object" && "code" in err
        ? String((err as { code?: unknown }).code)
        : "";
    if (code === "EAUTH") {
      console.error(
        "[contact] SMTP login rejected. For Gmail: 2FA + App Password; SMTP_USER must match that Gmail."
      );
    }
    return NextResponse.json(
      { error: "Could not send message. Please try again or email directly." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}

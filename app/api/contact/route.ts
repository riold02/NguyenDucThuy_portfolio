import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiter (per IP, resets on redeploy)
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5; // 5 messages per hour per IP

function getRealIP(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip = getRealIP(req);
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (entry) {
    if (now < entry.resetAt) {
      if (entry.count >= RATE_LIMIT_MAX) {
        return NextResponse.json(
          { error: "Quá nhiều tin nhắn. Thử lại sau nhé!" },
          { status: 429 }
        );
      }
      entry.count++;
    } else {
      rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    }
  } else {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
  }

  let body: { name?: string; email?: string; message?: string; website?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot check
  if (body.website && body.website.length > 0) {
    // Silently succeed to fool bots
    return NextResponse.json({ ok: true });
  }

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Thiếu thông tin" }, { status: 400 });
  }

  // Basic validation
  if (message.length < 10 || name.length < 2) {
    return NextResponse.json({ error: "Nội dung quá ngắn" }, { status: 400 });
  }

  // If RESEND_API_KEY is set, send real email
  const resendKey = process.env.RESEND_API_KEY;

  if (resendKey) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);

      await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["nguyenducthuydl02@gmail.com"],
        subject: `[Portfolio] Tin nhắn từ ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 32px; background: #1a1519; color: #ece8f4; border-radius: 12px;">
            <h2 style="color: #8ab4d4; margin-bottom: 16px;">Tin nhắn mới từ portfolio</h2>
            <p><strong>Tên:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #8ab4d4">${email}</a></p>
            <hr style="border: 1px solid #2a2330; margin: 16px 0;" />
            <p style="white-space: pre-wrap; color: #b8b0cc;">${message}</p>
            <hr style="border: 1px solid #2a2330; margin: 16px 0;" />
            <small style="color: #7a7290;">IP: ${ip} | Gửi lúc: ${new Date().toISOString()}</small>
          </div>
        `,
      });
    } catch (err) {
      console.error("Email send error:", err);
      return NextResponse.json(
        { error: "Không gửi được email. Thử lại sau!" },
        { status: 500 }
      );
    }
  } else {
    // Dev mode: log to console
    console.log("[Contact Form]", { name, email, message: message.slice(0, 100) });
  }

  return NextResponse.json({ ok: true });
}

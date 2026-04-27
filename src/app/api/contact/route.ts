import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      phone,
      email,
      projectType,
      location,
      timeline,
      budget,
      message,
    } = body;

    if (!name?.trim() || !phone?.trim() || !projectType || !message?.trim()) {
      return NextResponse.json(
        { error: "필수 항목이 누락되었습니다." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL_TO;

    if (!apiKey || !to) {
      console.error("RESEND_API_KEY or CONTACT_EMAIL_TO not configured");
      return NextResponse.json(
        { error: "이메일 발송 설정이 누락되었습니다. 잠시 후 다시 시도해주세요." },
        { status: 500 }
      );
    }

    const escape = (s: string) =>
      String(s)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

    const row = (label: string, value?: string) =>
      value
        ? `<tr><td style="padding:8px 12px;font-weight:600;color:#1f2937;border-bottom:1px solid #e5e7eb;width:140px;">${escape(label)}</td><td style="padding:8px 12px;color:#1f2937;border-bottom:1px solid #e5e7eb;">${escape(value)}</td></tr>`
        : "";

    const html = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo','Noto Sans KR',sans-serif;max-width:640px;margin:0 auto;padding:24px;background:#faf7f2;">
        <div style="background:#fff;border-radius:16px;padding:32px;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
          <div style="font-size:12px;letter-spacing:0.2em;color:#b8956a;font-weight:600;margin-bottom:8px;">JIPFRENDY · NEW INQUIRY</div>
          <h1 style="margin:0 0 24px 0;font-size:22px;color:#1f2937;font-weight:700;">${escape(projectType)} 상담 신청 — ${escape(name)}님</h1>
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            ${row("이름", name)}
            ${row("연락처", phone)}
            ${row("이메일", email)}
            ${row("문의 유형", projectType)}
            ${row("지역", location)}
            ${row("예상 시기", timeline)}
            ${row("예산", budget)}
          </table>
          <div style="margin-top:24px;padding:20px;background:#faf7f2;border-radius:12px;">
            <div style="font-weight:600;color:#1f2937;margin-bottom:8px;">메시지</div>
            <div style="color:#1f2937;line-height:1.7;white-space:pre-wrap;">${escape(message)}</div>
          </div>
          <div style="margin-top:24px;padding-top:16px;border-top:1px solid #e5e7eb;font-size:12px;color:#6b7280;">
            jibfriendy.vercel.app · 자동 발송 메일
          </div>
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "집짓는프렌디 <onboarding@resend.dev>",
      to: [to],
      replyTo: email || undefined,
      subject: `[상담 신청] ${projectType} — ${name}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "발송에 실패했습니다. 잠시 후 다시 시도해주세요." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}

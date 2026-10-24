import SubScreen from "@/components/features/SubScreen";
import ContactForm from "@/components/features/ContactForm";
import { siteConfig } from "@/lib/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Liên hệ với Nguyen Duc Thuy — phản hồi trong 24 giờ.",
};

export default function ContactPage() {
  return (
    <main>
      <SubScreen title="Contact">
        <div className="chat-form-wrap">
          {/* Header note */}
          <div
            style={{
              background: "var(--color-bg-elevated)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
              padding: "16px 20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 8,
              }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "var(--color-online)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                }}
              >
                Đang online — phản hồi trong 24h
              </span>
            </div>
            <p
              style={{
                fontSize: "0.8rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.6,
              }}
            >
              Sẵn sàng trao đổi về các dự án web, cơ hội hợp tác hoặc trao đổi kỹ thuật.
              Gửi tin nhắn trực tiếp qua form hoặc email bên dưới.
            </p>
          </div>

          {/* Quick commands */}
          <div>
            <div
              style={{
                fontSize: "0.7rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--color-text-muted)",
                marginBottom: 8,
              }}
            >
              Kênh liên hệ trực tiếp
            </div>
            <div className="quick-commands">
              <a
                href={`mailto:${siteConfig.email}`}
                className="quick-cmd"
                aria-label="Gửi email trực tiếp"
              >
                /email nguyenducthuydl02@gmail.com
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-cmd"
                aria-label="Xem GitHub profile"
              >
                /github github.com/riold02
              </a>
            </div>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </SubScreen>
    </main>
  );
}

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Tên phải có ít nhất 2 ký tự"),
  email: z.string().email("Email không hợp lệ"),
  message: z.string().min(10, "Tin nhắn phải có ít nhất 10 ký tự"),
  // Honeypot (hidden field, bots fill this)
  website: z.string().max(0, "Bot detected"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Gửi thất bại, thử lại sau nhé.");
      }

      setSent(true);
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Có lỗi xảy ra.");
    }
  }

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            padding: "32px 24px",
            background: "var(--color-bg-elevated)",
            border: "1px solid rgba(59, 165, 93, 0.3)",
            borderRadius: "var(--radius-xl)",
            textAlign: "center",
          }}
        >
          <CheckCircle2 size={40} style={{ color: "var(--color-online)" }} />
          <div style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-text-primary)" }}>
            Đã gửi rồi! 🎉
          </div>
          <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
            Mình sẽ reply sớm nhất có thể. Cảm ơn đã ping!
          </p>
          <button
            onClick={() => setSent(false)}
            className="pill pill-accent"
            style={{ padding: "8px 20px", cursor: "pointer", border: "none" }}
          >
            Gửi thêm
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          aria-label="Form liên hệ"
        >
          {/* Honeypot - hidden from real users */}
          <div style={{ display: "none" }} aria-hidden="true">
            <input
              {...register("website")}
              tabIndex={-1}
              autoComplete="off"
              type="text"
            />
          </div>

          <div className="chat-input-group">
            <label className="chat-label" htmlFor="contact-name">
              Tên của bạn *
            </label>
            <input
              id="contact-name"
              className="chat-input"
              placeholder="Nguyễn Văn A"
              autoComplete="name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              {...register("name")}
            />
            {errors.name && (
              <span id="name-error" style={{ fontSize: "0.75rem", color: "var(--color-error-color, #ef4444)" }}>
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="chat-input-group">
            <label className="chat-label" htmlFor="contact-email">
              Email *
            </label>
            <input
              id="contact-email"
              className="chat-input"
              type="email"
              placeholder="ban@example.com"
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
            />
            {errors.email && (
              <span id="email-error" style={{ fontSize: "0.75rem", color: "#ef4444" }}>
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="chat-input-group">
            <label className="chat-label" htmlFor="contact-message">
              Tin nhắn *
            </label>
            <textarea
              id="contact-message"
              className="chat-textarea"
              rows={5}
              placeholder="Chào! Mình muốn..."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              {...register("message")}
            />
            {errors.message && (
              <span id="message-error" style={{ fontSize: "0.75rem", color: "#ef4444" }}>
                {errors.message.message}
              </span>
            )}
          </div>

          {error && (
            <div
              style={{
                padding: "10px 14px",
                background: "rgba(239,68,68,0.1)",
                border: "1px solid rgba(239,68,68,0.3)",
                borderRadius: "var(--radius-md)",
                fontSize: "0.8rem",
                color: "#ef4444",
              }}
              role="alert"
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            className="chat-send-btn"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span
                  style={{
                    width: 16,
                    height: 16,
                    border: "2px solid rgba(255,255,255,0.3)",
                    borderTopColor: "white",
                    borderRadius: "50%",
                    animation: "spin 0.7s linear infinite",
                    display: "inline-block",
                  }}
                  aria-hidden="true"
                />
                Đang gửi...
              </>
            ) : (
              <>
                <Send size={16} />
                Gửi tin nhắn
              </>
            )}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

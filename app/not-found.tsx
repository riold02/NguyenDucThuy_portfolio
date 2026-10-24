import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Trang không tìm thấy",
  description: "Trang này không tồn tại. Có thể bạn bấm nhầm link?",
};

export default function NotFound() {
  return (
    <main className="not-found-wrap" id="main-content">
      <div className="not-found-code" aria-label="404">404</div>
      <h1 className="not-found-msg">
        Trang này không tồn tại — hoặc chưa được xây dựng
      </h1>
      <p className="not-found-sub">
        Đường dẫn bạn đang tìm kiếm có thể đã thay đổi hoặc không tồn tại.
      </p>
      <Link
        href="/"
        className="pill pill-accent"
        style={{ padding: "10px 24px", textDecoration: "none", marginTop: 8 }}
        aria-label="Về trang chủ"
      >
        ← Về trang chủ
      </Link>
    </main>
  );
}

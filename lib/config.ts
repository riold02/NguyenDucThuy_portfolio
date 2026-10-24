export const siteConfig = {
  name: "Nguyen Duc Thuy",
  handle: "ducthuy9999",
  discordUsername: "ducthuy9999",
  displayName: "Nguyen Duc Thuy",
  title: "Fullstack / Frontend Freelance Developer",
  avatar: "/avatar.jpg",
  discordId: "ducthuy9999",
  bio: "Freelance Developer chuyên thiết kế & lập trình Web 3D, Next.js mượt mà, tối ưu chuyển đổi.",
  status: "online" as const,
  statusLabel: "Đang nhận dự án Freelance",
  statusDetail: "Sẵn sàng nhận dự án Web App, Landing Page 3D & UI/UX — ping Discord hoặc gửi tin nhắn ngay!",
  email: "nguyenducthuydl02@gmail.com",
  github: "https://github.com/riold02",
  location: "Việt Nam",
  url: "https://riold02.dev",
  tags: [
    { label: "Freelance Developer", variant: "accent" as const },
    { label: "Next.js 16 & React 19", variant: "lavender" as const },
    { label: "3D & Interactive UI", variant: "cyan" as const },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

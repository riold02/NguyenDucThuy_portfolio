export const siteConfig = {
  name: "Nguyen Duc Thuy",
  handle: "ducthuy9999",
  discordUsername: "ducthuy9999",
  displayName: "Nguyen Duc Thuy",
  title: "Freelance Fullstack Developer & Designer",
  avatar: "/avatar.jpg",
  discordId: "ducthuy9999",
  bio: "Freelance Developer & Designer — Chuyên thiết kế UI/UX, phát triển Web App, phần mềm số, 3D tương tác và giải pháp công nghệ toàn diện.",
  status: "online" as const,
  statusLabel: "Đang nhận dự án Freelance",
  statusDetail: "Sẵn sàng nhận dự án UI/UX, Web App, Phần mềm & 3D Interactive — ping Discord hoặc gửi tin nhắn ngay!",
  email: "nguyenducthuydl02@gmail.com",
  github: "https://github.com/riold02",
  location: "Việt Nam",
  url: "https://riold02.dev",
  tags: [
    { label: "Freelance Fullstack", variant: "accent" as const },
    { label: "UI/UX & Product Design", variant: "lavender" as const },
    { label: "Software & 3D Interactive", variant: "cyan" as const },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

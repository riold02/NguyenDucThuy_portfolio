export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  role: string;
  tools: string[];
  results: string[];
  github?: string;
  demo?: string;
  color: string;
  icon: string;
  year: string;
}

export const projects: Project[] = [
  {
    slug: "course-platform",
    title: "Website Bán Khóa Học Trực Tuyến",
    category: "Fullstack Web App",
    description:
      "Nền tảng thương mại điện tử chuyên khóa học với catalog, bộ lọc thông minh, giỏ hàng và quản lý học viên.",
    longDescription:
      "Dự án website thương mại điện tử phục vụ việc tìm kiếm, đăng ký và mua các khóa học trực tuyến. Hệ thống cung cấp giao diện catalog trực quan với khả năng lọc nhiều tiêu chí, tìm kiếm tức thì, quản lý giỏ hàng và trang chi tiết khóa học. Thiết kế cấu trúc component module hóa, tối ưu hiệu năng tải trang và trải nghiệm người dùng.",
    role: "Fullstack Developer",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "REST API"],
    results: [
      "Catalog khóa học trực quan với bộ lọc danh mục và tìm kiếm nhanh",
      "Quản lý giỏ hàng và quy trình đặt khóa học mượt mà",
      "Giao diện responsive tương thích hoàn chỉnh trên mobile và desktop",
      "Kiến trúc modular dễ mở rộng thêm các tính năng học tập trực tuyến",
    ],
    github: "https://github.com/riold02/Website-BanKhoaHoc",
    color: "#8ab4d4",
    icon: "🎓",
    year: "2024",
  },
  {
    slug: "lumi-landing",
    title: "Lumi Product Landing Page",
    category: "Frontend & UI/UX",
    description:
      "Landing page giới thiệu sản phẩm với thiết kế hiện đại, typography thanh lịch và hiệu ứng tương tác mượt mà.",
    longDescription:
      "Trang giới thiệu sản phẩm Lumi tập trung vào trải nghiệm thị giác cao cấp và tính tương tác. Áp dụng các hiệu ứng chuyển động khi cuộn trang, cấu trúc thông điệp rõ ràng nhằm tăng tỷ lệ chuyển đổi, và tối ưu tốc độ tải trang theo tiêu chuẩn Core Web Vitals.",
    role: "Frontend Developer",
    tools: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    results: [
      "Thiết kế giao diện hiện đại với micro-interactions thu hút",
      "Tối ưu hình ảnh và tốc độ tải trang trên mọi thiết bị",
      "Đảm bảo trải nghiệm cuộn và điều hướng đồng nhất trên các độ phân giải",
    ],
    github: "https://github.com/riold02/Lumi-Landingpage",
    color: "#b89fd8",
    icon: "✨",
    year: "2024",
  },
  {
    slug: "cicd-web-pipeline",
    title: "Automated CI/CD Web Pipeline",
    category: "DevOps & Web Deployment",
    description:
      "Quy trình tự động hóa kiểm thử mã nguồn, build và triển khai liên tục cho ứng dụng web.",
    longDescription:
      "Thiết lập quy trình CI/CD hoàn chỉnh sử dụng GitHub Actions, Docker và nền tảng cloud deployment. Mỗi khi có thay đổi mã nguồn, hệ thống tự động chạy linting, type-checking, kiểm thử và deploy môi trường xem trước, giúp nâng cao chất lượng code và rút ngắn chu kỳ phát hành.",
    role: "Developer & DevOps",
    tools: ["GitHub Actions", "Docker", "Next.js", "Vercel", "CI/CD"],
    results: [
      "Quy trình build và deploy tự động hoàn toàn khi push commit hoặc tạo Pull Request",
      "Phát hiện sớm lỗi cú pháp và type error trước khi đưa lên môi trường chính",
      "Rút ngắn thời gian release và chuẩn hóa quy trình làm việc theo nhóm",
    ],
    github: "https://github.com/riold02/demo-web-cicd",
    color: "#d8a9b5",
    icon: "🚀",
    year: "2024",
  },
  {
    slug: "discord-profile-card",
    title: "Discord Profile Card Portfolio",
    category: "Interactive Web App",
    description:
      "Portfolio cá nhân xây dựng theo concept thẻ hồ sơ Discord với SubScreen animation, canvas background và audio feedback.",
    longDescription:
      "Website portfolio cá nhân được thiết kế và xây dựng bằng Next.js App Router theo concept 'Profile Card' độc đáo. Tích hợp background sao tương tác canvas, sub-screen navigation chuyển cảnh mượt mà với Framer Motion, hiệu ứng âm thanh tùy chọn qua Web Audio API, và hỗ trợ bàn phím toàn diện.",
    role: "Design & Development",
    tools: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    results: [
      "Concept Profile Card độc đáo, mang lại ấn tượng thị giác hiện đại",
      "Sub-screen navigation mượt mà, hỗ trợ phím Escape và thao tác vuốt trên di động",
      "Điểm số tối ưu hiệu năng cao và đáp ứng tiêu chuẩn Accessibility",
    ],
    github: "https://github.com/riold02/NguyenDucThuy_portfolio",
    color: "#8ab4d4",
    icon: "👾",
    year: "2025",
  },
];

"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Copy, Check, Sparkles, Music, Disc, ExternalLink } from "lucide-react";



import { DiscordIcon } from "@/components/features/PlatformIcons";
import { siteConfig } from "@/lib/config";
import { playClick } from "@/components/features/SoundToggle";

interface LanyardData {
  discord_user?: {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    global_name: string;
  };
  discord_status?: "online" | "idle" | "dnd" | "offline";
  activities?: Array<{
    name: string;
    type: number;
    state?: string;
    details?: string;
  }>;
  spotify?: {
    song: string;
    artist: string;
    album_art_url: string;
  };
  listening_to_spotify?: boolean;
}

export default function DiscordPresenceBadge() {
  const [copied, setCopied] = useState(false);
  const [showIdModal, setShowIdModal] = useState(false);
  const [snowflakeId, setSnowflakeId] = useState<string>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("discord_snowflake_id");
        if (saved && /^\d{17,20}$/.test(saved)) return saved;
      } catch {
        // ignore storage errors
      }
    }
    return "";
  });
  const [lanyardData, setLanyardData] = useState<LanyardData | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchLanyard = useCallback(async (id: string) => {
    try {
      const res = await fetch(`https://api.lanyard.rest/v1/users/${id}`);
      if (!res.ok) {
        throw new Error("Không tìm thấy ID trong Lanyard Server.");
      }
      const json = await res.json();
      if (json.success && json.data) {
        setLanyardData(json.data);
      } else {
        throw new Error("Không thể đồng bộ dữ liệu Discord.");
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Lỗi kết nối Lanyard";
      setErrorMsg(message);
    }
  }, []);

  // Sync saved ID once after mount with cleanup
  useEffect(() => {
    let active = true;
    if (snowflakeId && /^\d{17,20}$/.test(snowflakeId)) {
      fetch(`https://api.lanyard.rest/v1/users/${snowflakeId}`)
        .then((res) => {
          if (!res.ok) throw new Error("Không tìm thấy ID trong Lanyard Server.");
          return res.json();
        })
        .then((json) => {
          if (active && json.success && json.data) {
            setLanyardData(json.data);
          }
        })
        .catch((err: unknown) => {
          if (active) {
            setErrorMsg(err instanceof Error ? err.message : "Lỗi kết nối Lanyard");
          }
        });
    }
    return () => {
      active = false;
    };
  }, [snowflakeId]);




  const handleCopyDiscord = () => {
    playClick();
    navigator.clipboard.writeText(siteConfig.discordUsername);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSaveId = () => {
    playClick();
    const cleanId = snowflakeId.trim();
    if (!/^\d{17,20}$/.test(cleanId)) {
      setErrorMsg("ID Discord phải là dãy 17–19 chữ số.");
      return;
    }
    try {
      localStorage.setItem("discord_snowflake_id", cleanId);
    } catch {}
    fetchLanyard(cleanId);
    setShowIdModal(false);
  };

  const status = lanyardData?.discord_status || "online";
  const statusColor =
    status === "online"
      ? "#23a55a"
      : status === "idle"
      ? "#f0b232"
      : status === "dnd"
      ? "#f23f43"
      : "#80848e";

  const avatarUrl =
    lanyardData?.discord_user?.avatar && lanyardData?.discord_user?.id
      ? `https://cdn.discordapp.com/avatars/${lanyardData.discord_user.id}/${lanyardData.discord_user.avatar}.png?size=128`
      : siteConfig.avatar;

  return (
    <div
      style={{
        background: "rgba(17, 18, 24, 0.75)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "1px solid rgba(88, 101, 242, 0.25)",
        borderRadius: "14px",
        padding: "14px 18px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
        position: "relative",
      }}
    >
      {/* Top Row: Discord Identity */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              position: "relative",
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid rgba(88, 101, 242, 0.6)",
                boxShadow: "0 0 12px rgba(88, 101, 242, 0.4)",
                position: "relative",
                background: "#111218",
              }}
            >
              <Image
                src={avatarUrl}
                alt={siteConfig.displayName}
                width={42}
                height={42}
                priority
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            {/* Status dot */}
            <span
              style={{
                position: "absolute",
                bottom: "-1px",
                right: "-1px",
                width: "13px",
                height: "13px",
                borderRadius: "50%",
                backgroundColor: statusColor,
                border: "2.5px solid #111218",
                boxShadow: `0 0 6px ${statusColor}`,
                zIndex: 2,
              }}
              title={`Trạng thái: ${status}`}
            />
          </div>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span
                style={{
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "#f2f3f5",
                  letterSpacing: "-0.01em",
                }}
              >
                {siteConfig.discordUsername}
              </span>
              <span
                style={{
                  fontSize: "0.68rem",
                  padding: "2px 7px",
                  borderRadius: "4px",
                  background: "rgba(88, 101, 242, 0.2)",
                  color: "#8ab4d4",
                  fontWeight: 700,
                  border: "1px solid rgba(88, 101, 242, 0.35)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <DiscordIcon size={12} />
                <span>Discord Handle</span>
              </span>
            </div>

            <p
              style={{
                fontSize: "0.78rem",
                color: "#b5bac1",
                marginTop: "1px",
              }}
            >
              {lanyardData
                ? `Đang ${status} trên Discord`
                : "Sẵn sàng nhận tin nhắn & trao đổi dự án"}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
          <button
            onClick={handleCopyDiscord}
            title="Sao chép Discord handle"
            style={{
              background: copied ? "rgba(35, 165, 90, 0.2)" : "rgba(88, 101, 242, 0.15)",
              border: copied
                ? "1px solid rgba(35, 165, 90, 0.4)"
                : "1px solid rgba(88, 101, 242, 0.35)",
              color: copied ? "#23a55a" : "#8ab4d4",
              borderRadius: "8px",
              padding: "6px 12px",
              fontSize: "0.8rem",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "6px",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            <span>{copied ? "Đã chép!" : "Copy Handle"}</span>
          </button>

          <a
            href="https://discord.com/channels/@me"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playClick()}
            title="Mở ứng dụng hoặc web Discord"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              color: "#cbd5e1",
              borderRadius: "8px",
              padding: "6px 11px",
              fontSize: "0.8rem",
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
          >
            <ExternalLink size={13} />
            <span>Mở Discord</span>
          </a>

          <button
            onClick={() => {
              playClick();
              setShowIdModal(true);
            }}
            title="Liên kết & đồng bộ trạng thái Live qua Discord ID"
            style={{
              background: "rgba(88, 101, 242, 0.2)",
              border: "1px solid rgba(88, 101, 242, 0.4)",
              color: "#00e5ff",
              borderRadius: "8px",
              padding: "6px 10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              fontSize: "0.78rem",
              fontWeight: 600,
              gap: "5px",
            }}
          >
            <Sparkles size={13} />
            <span>Liên kết Live ID</span>
          </button>
        </div>
      </div>


      {/* Spotify Live Activity if listening */}
      {lanyardData?.listening_to_spotify && lanyardData.spotify && (
        <div
          style={{
            background: "rgba(30, 215, 96, 0.1)",
            border: "1px solid rgba(30, 215, 96, 0.25)",
            borderRadius: "8px",
            padding: "8px 12px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Music size={16} color="#1ed760" className="animate-spin" />
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "#f2f3f5",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {lanyardData.spotify.song}
            </p>
            <p
              style={{
                fontSize: "0.7rem",
                color: "#94a3b8",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {lanyardData.spotify.artist}
            </p>
          </div>
          <Disc size={18} color="#1ed760" />
        </div>
      )}

      {/* ID Explanation Modal / Popover */}
      {showIdModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.75)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "16px",
          }}
          onClick={() => setShowIdModal(false)}
        >
          <div
            style={{
              background: "#161722",
              border: "1px solid rgba(88, 101, 242, 0.4)",
              borderRadius: "16px",
              padding: "24px",
              maxWidth: "520px",
              width: "100%",
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.8)",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "#5865f2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <DiscordIcon size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f2f3f5" }}>
                  Đồng Bộ Trực Tiếp Dữ Liệu Discord
                </h3>
                <p style={{ fontSize: "0.8rem", color: "#94a3b8" }}>
                  Tài khoản: <strong style={{ color: "#5865f2" }}>{siteConfig.discordUsername}</strong>
                </p>
              </div>
            </div>

            <div
              style={{
                background: "rgba(88, 101, 242, 0.1)",
                border: "1px solid rgba(88, 101, 242, 0.2)",
                borderRadius: "10px",
                padding: "12px",
                fontSize: "0.82rem",
                color: "#cbd5e1",
                lineHeight: 1.6,
                marginBottom: "16px",
              }}
            >
              💡 <strong>Tại sao không thể tra cứu tự động chỉ bằng username &ldquo;ducthuy9999&rdquo;?</strong>
              <br />
              Chính sách bảo mật của Discord <strong>chặn hoàn toàn</strong> việc các trang web bên ngoài tra cứu công khai thông tin cá nhân chỉ bằng tên đăng nhập (handle).
              <br />
              Để hiển thị trạng thái đang chơi game, nghe nhạc Spotify hay online trực tiếp, bạn cần cung cấp <strong>User Snowflake ID (dãy 18 số)</strong> và tham gia server Lanyard (discord.gg/lanyard).
            </div>

            <div style={{ marginBottom: "18px" }}>
              <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#f2f3f5", marginBottom: "8px" }}>
                3 bước để liên kết tài khoản Discord và đồng bộ trạng thái Live:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(88, 101, 242, 0.3)",
                    borderRadius: "8px",
                    padding: "10px 14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "10px",
                  }}
                >
                  <div style={{ fontSize: "0.8rem", color: "#cbd5e1" }}>
                    <strong>Bước 1:</strong> Tham gia Server Lanyard (để bot có quyền theo dõi trạng thái)
                  </div>
                  <a
                    href="https://discord.gg/lanyard"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "#5865f2",
                      color: "#fff",
                      padding: "5px 12px",
                      borderRadius: "6px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <span>Vào Server</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "8px",
                    padding: "10px 14px",
                    fontSize: "0.8rem",
                    color: "#cbd5e1",
                    lineHeight: 1.5,
                  }}
                >
                  <strong>Bước 2:</strong> Lấy User Snowflake ID (18 số) trong Discord:
                  <div style={{ color: "#94a3b8", fontSize: "0.76rem", marginTop: "2px" }}>
                    Cài đặt Discord &gt; Nâng cao &gt; Bật <em>Developer Mode</em> &gt; Chuột phải vào Avatar &gt; Chọn <strong>Sao chép ID người dùng (Copy User ID)</strong>.
                  </div>
                </div>

                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "8px",
                    padding: "10px 14px",
                    fontSize: "0.8rem",
                    color: "#cbd5e1",
                  }}
                >
                  <strong>Bước 3:</strong> Dán dãy 18 số vào ô dưới đây rồi nhấn <strong>Đồng bộ ngay</strong>.
                </div>
              </div>
            </div>


            <div style={{ marginBottom: "16px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "#cbd5e1",
                  marginBottom: "6px",
                }}
              >
                Dán User ID 18 số vào đây:
              </label>
              <input
                type="text"
                placeholder="Ví dụ: 849204918239019283"
                value={snowflakeId}
                onChange={(e) => setSnowflakeId(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: "8px",
                  background: "#090a0f",
                  border: "1px solid rgba(88, 101, 242, 0.4)",
                  color: "#f2f3f5",
                  fontSize: "0.9rem",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
              {errorMsg && (
                <p style={{ fontSize: "0.75rem", color: "#f43f5e", marginTop: "6px" }}>
                  {errorMsg}
                </p>
              )}
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button
                onClick={() => setShowIdModal(false)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  background: "rgba(255, 255, 255, 0.08)",
                  color: "#cbd5e1",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                }}
              >
                Đóng
              </button>
              <button
                onClick={handleSaveId}
                style={{
                  padding: "8px 20px",
                  borderRadius: "8px",
                  background: "#5865f2",
                  color: "#ffffff",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <Sparkles size={14} />
                <span>Đồng bộ ngay</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

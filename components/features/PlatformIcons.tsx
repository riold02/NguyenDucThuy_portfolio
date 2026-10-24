import React from "react";

interface IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function NextjsIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <mask id="nextMask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: "alpha" }}>
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#nextMask)">
        <circle cx="90" cy="90" r="90" fill="#000" stroke="#333" strokeWidth="6" />
        <path d="M149.508 157.438L69.1478 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z" fill="url(#nextGradient)" />
        <rect x="115" y="54" width="12" height="72" fill="url(#nextGradient2)" />
      </g>
      <defs>
        <linearGradient id="nextGradient" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="nextGradient2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ReactIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function TypeScriptIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="128" height="128" rx="16" fill="#3178C6" />
      <path d="M72.062 108.992c-5.871-3.844-9.878-10.201-10.749-19.789l13.918-2.614c.725 6.096 3.193 10.74 8.708 10.74 4.79 0 7.838-2.614 7.838-6.386 0-4.645-3.628-6.822-10.159-9.58l-5.66-2.467c-11.466-4.935-16.981-12.046-16.981-22.351 0-14.514 11.03-23.948 27.286-23.948 11.32 0 20.464 4.644 24.964 15.094l-12.482 6.096c-2.322-5.37-6.241-7.837-12.192-7.837-5.079 0-8.563 3.048-8.563 6.966 0 4.064 3.048 6.096 8.853 8.563l5.66 2.322c13.788 5.806 18.723 12.482 18.723 23.367 0 15.82-11.465 24.964-29.605 24.964-6.386-.145-13.498-2.612-19.574-7.137v-.036zm-36.574-63.57v60.957h-15.674v-60.957h-21.916v-13.062h59.506v13.062h-21.916z" fill="#fff" />
    </svg>
  );
}

export function JavaScriptIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="128" height="128" rx="16" fill="#F7DF1E" />
      <path d="M30 100.8c5.4 8.8 13.6 13.9 24.3 13.9 13.4 0 22.8-7.9 22.8-25.7V39h-15.7v49.8c0 8.8-3.9 12.8-10.6 12.8-5.3 0-8.9-2.7-11.7-8.1l-9.1 7.3zm67.8.6c5.8 9.3 15 14.1 26.6 14.1 16.4 0 27.4-8.8 27.4-25.1 0-14.8-8.3-21.2-22.9-27.4l-4.5-1.9c-8.4-3.6-12.1-6.9-12.1-13 0-5.7 4.5-10.1 11.7-10.1 7.3 0 11.6 3.7 14.8 9.8l13.5-7.8c-5.8-10.8-15.4-15.7-27.8-15.7-17 0-27.2 9.8-27.2 24.3 0 14.4 8.7 21.6 21.7 27.1l4.5 1.9c9.3 4 13.4 7.6 13.4 14.4 0 6.7-5.5 11.4-13.6 11.4-9.3 0-14.9-5.5-18.3-12.8l-15.2 8.3z" fill="#000" transform="translate(-16, -16) scale(1.15)" />
    </svg>
  );
}

export function TailwindIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" fill="#38BDF8" />
    </svg>
  );
}

export function NodeIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 289" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <path d="M128 0L9.4 68.4v136.9L128 273.7l118.6-68.4V68.4L128 0z" fill="#339933" />
      <path d="M128 27.4l94.9 54.8v109.5L128 246.4l-94.9-54.8V82.1L128 27.4z" fill="#026e00" />
      <path d="M128 54.7L56.9 95.8v82.2l71.1 41.1 71.1-41.1V95.8L128 54.7z" fill="#339933" />
      <path d="M128 82.1l47.4 27.4v54.7L128 191.6l-47.4-27.4v-54.7L128 82.1z" fill="#fff" />
    </svg>
  );
}

export function HtmlIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <path fill="#E44D26" d="M71 460L30 0h452l-41 460-185 52z" />
      <path fill="#F16529" d="M256 472l149-41 35-391H256v432z" />
      <path fill="#EBEBEB" d="M109 95h147v48H160l5 56h91v48h-86l6 64h80v48l-87-24-6-63h-48l11 125 130 36v-48l-72-20-4-48h76v-48h-80l-4-48h84V95H109z" />
      <path fill="#fff" d="M256 95h147l-14 152h-85v-48h37l5-56H256V95zm0 152h81l-8 88-73 20v49l130-36 18-201H256v80z" />
    </svg>
  );
}

export function CssIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <path fill="#264DE4" d="M71 460L30 0h452l-41 460-185 52z" />
      <path fill="#2965F1" d="M256 472l149-41 35-391H256v432z" />
      <path fill="#EBEBEB" d="M256 208v-48h-95l-4-48h99V64H109l13 144H256zm0 152v-48l-73-20-4-48h-48l7 80 118 36z" />
      <path fill="#fff" d="M256 160h95l-9 104H256v-48h47l5-56H256v-48zm0 152l73-20 7-80h48l-14 152-114 32v-84z" />
    </svg>
  );
}

export function PostgresIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <path fill="#336791" d="M63.8 5.7c-21.9 0-38.3 17.5-38.3 40.2 0 13.9 6.7 26.2 17.2 33.6-1.5 5.2-4.5 12.2-11.4 18.9-1.3 1.3-1.6 3.2-.8 4.7.8 1.5 2.4 2.5 4.1 2.5 16.5 0 28.5-12.7 33.7-20.1 5.3 1.4 10.9 2.1 16.7 2.1 21.9 0 38.3-17.5 38.3-40.2-.1-22.7-17.6-41.7-39.5-41.7z" />
      <path fill="#fff" d="M72.2 40.5c-3.7-2.1-7.8-3.2-12-3.2-10.4 0-18.8 6.5-18.8 14.5 0 4.8 3.1 9.2 8.1 11.8 3.6 1.9 7.6 2.9 11.6 2.9 10.4 0 18.8-6.5 18.8-14.5.1-4.7-3.1-9.1-7.7-11.5z" />
    </svg>
  );
}

export function MysqlIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <path fill="#00758F" d="M12.016 1.5c-3.18 0-5.875 1.58-7.39 3.987-.417.662-.757 1.41-1.002 2.215-.226.745-.374 1.54-.428 2.37-.058.883-.02 1.79.117 2.69.213 1.398.71 2.715 1.455 3.86 1.488 2.287 3.81 3.878 7.248 3.878 3.438 0 5.76-1.59 7.248-3.878.745-1.145 1.242-2.462 1.455-3.86.137-.9.175-1.807.117-2.69-.054-.83-.202-1.625-.428-2.37-.245-.805-.585-1.553-1.002-2.215C17.89 3.08 15.195 1.5 12.016 1.5z" />
      <path fill="#F29111" d="M14.5 9.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm-5 0c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5z" />
    </svg>
  );
}

export function PrismaIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <path d="M21.233 18.077L13.564 2.802a1.8 1.8 0 00-3.18 0L2.766 18.077a1.8 1.8 0 001.59 2.598h15.287a1.8 1.8 0 001.59-2.598z" fill="#2D3748" />
      <path d="M12.001 5.922l5.772 11.517H6.228L12 5.922z" fill="#00e5ff" />
    </svg>
  );
}

export function GitIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <path fill="#F05032" d="M124.7 57.1L70.9 3.3a9.7 9.7 0 0 0-13.8 0L43.4 17l17.4 17.4a11.6 11.6 0 0 1 14.7 14.7l16.7 16.7a11.6 11.6 0 1 1-6.9 6.8l-15.6-15.6v23.2a11.6 11.6 0 1 1-9.7 0v-24a11.6 11.6 0 0 1-6.3-15.2L36.3 24.1 3.3 57.1a9.7 9.7 0 0 0 0 13.8l53.8 53.8a9.7 9.7 0 0 0 13.8 0l53.8-53.8a9.7 9.7 0 0 0 0-13.8z" />
    </svg>
  );
}

export function GithubIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff" />
    </svg>
  );
}

export function VercelIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <path d="M12 1L24 22H0L12 1Z" fill="#fff" />
    </svg>
  );
}

export function DockerIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.954-5.43h2.118a.186.186 0 00.186-.186V3.576a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.886c0 .102.082.186.185.186zm0 2.715h2.118a.186.186 0 00.186-.186V6.29a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.954 0h2.119a.186.186 0 00.186-.186V6.29a.186.186 0 00-.186-.186H8.075a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.954 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.186H5.12a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm5.908 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.954 0h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H8.075a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.954 0h2.119a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.12a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.954 0h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H2.167a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186zm21.808 2.072c-.287-.19-1.272-.734-2.738-.734-.871 0-1.637.265-2.268.79-.387-.29-1.077-.446-2.02-.446H.217A.217.217 0 000 13.69c0 4.298 2.756 7.42 7.027 8.016 1.838.256 3.753.294 5.679.294 4.544 0 9.076-.566 10.963-4.498.058-.12.096-.25.132-.38.868-3.078-.172-4.14-.172-4.14z" fill="#2496ED" />
    </svg>
  );
}

export function FigmaIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
    </svg>
  );
}

export function VSCodeIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <path d="M23.15 2.587L18.21.21a1.494 1.494 0 00-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 00-1.276.057L.327 7.27a1 1 0 000 1.488l3.43 3.243-3.43 3.242a1 1 0 000 1.488l1.322 1.212a.999.999 0 001.276.057l4.12-3.128 9.46 8.63c.475.434 1.144.55 1.705.29l4.94-2.377A1.5 1.5 0 0024 19.985V4.015a1.5 1.5 0 00-.85-1.428zM18 16.71l-6.84-5.36L18 5.99v10.72z" fill="#007ACC" />
    </svg>
  );
}

export function DiscordIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 127.14 96.36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <path d="M107.7 8.07A105.15 105.15 0 0081.47 0a72.06 72.06 0 00-3.36 6.83 97.68 97.68 0 00-29.11 0A72.37 72.37 0 0045.64 0a105.89 105.89 0 00-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0032.17 16.15 77.7 77.7 0 006.89-11.11 68.42 68.42 0 01-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0064.32 0c.87.71 1.76 1.39 2.66 2a68.68 68.68 0 01-10.87 5.19 77 77 0 006.89 11.1 105.25 105.25 0 0032.19-16.14c2.64-27.38-4.51-51.11-18.9-72.15zM42.45 65.69C36.18 65.69 31 60 31 53s5.07-12.67 11.45-12.67c6.43 0 11.58 5.76 11.45 12.67 0 7-5.07 12.69-11.45 12.69zm42.24 0C78.41 65.69 73.25 60 73.25 53s5.07-12.67 11.44-12.67c6.43 0 11.58 5.76 11.45 12.67 0 7-5.02 12.69-11.45 12.69z" fill="#5865F2" />
    </svg>
  );
}

export function FramerMotionIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#F08" />
    </svg>
  );
}

export function ApiIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <path d="M4 14a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2z" />
      <path d="M6 12V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5" />
      <line x1="12" y1="5" x2="12" y2="2" />
      <line x1="9" y1="12" x2="9" y2="15" />
      <line x1="15" y1="12" x2="15" y2="15" />
    </svg>
  );
}

export function getPlatformIcon(name: string, size = 18): React.ReactNode {
  const n = name.toLowerCase();
  if (n.includes("next")) return <NextjsIcon size={size} />;
  if (n.includes("react")) return <ReactIcon size={size} />;
  if (n.includes("type")) return <TypeScriptIcon size={size} />;
  if (n.includes("java") && !n.includes("script")) return <JavaScriptIcon size={size} />;
  if (n.includes("script")) return <JavaScriptIcon size={size} />;
  if (n.includes("tailwind")) return <TailwindIcon size={size} />;
  if (n.includes("node")) return <NodeIcon size={size} />;
  if (n.includes("html")) return <HtmlIcon size={size} />;
  if (n.includes("css")) return <CssIcon size={size} />;
  if (n.includes("postgres")) return <PostgresIcon size={size} />;
  if (n.includes("mysql") || n.includes("sql")) return <MysqlIcon size={size} />;
  if (n.includes("prisma")) return <PrismaIcon size={size} />;
  if (n === "git") return <GitIcon size={size} />;
  if (n.includes("github")) return <GithubIcon size={size} />;
  if (n.includes("vercel")) return <VercelIcon size={size} />;
  if (n.includes("docker")) return <DockerIcon size={size} />;
  if (n.includes("figma")) return <FigmaIcon size={size} />;
  if (n.includes("framer")) return <FramerMotionIcon size={size} />;
  if (n.includes("discord")) return <DiscordIcon size={size} />;
  if (n.includes("api") || n.includes("rest")) return <ApiIcon size={size} />;
  return <NextjsIcon size={size} />;
}

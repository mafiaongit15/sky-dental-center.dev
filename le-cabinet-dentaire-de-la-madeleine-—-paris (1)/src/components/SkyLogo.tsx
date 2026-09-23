import React from 'react';

// Star coordinates forming the anatomical dental molar constellation
const MOLAR_STARS = [
  // Upper cusps
  { x: 55.4, y: 62.1, r: 6.4 },
  { x: 67.8, y: 55.6, r: 5.8 },
  { x: 81.9, y: 60.3, r: 6.4 },
  { x: 118.2, y: 59.8, r: 5.8 },
  { x: 132.3, y: 55.7, r: 6.4 },
  { x: 145.2, y: 62.4, r: 5.2 },
  // Crown body
  { x: 47.9, y: 74.8, r: 6.4 },
  { x: 60.2, y: 72.3, r: 5.8 },
  { x: 73.8, y: 69.9, r: 5.2 },
  { x: 88.1, y: 76.2, r: 6.4 },
  { x: 100.0, y: 79.1, r: 5.8 },
  { x: 112.3, y: 75.9, r: 5.2 },
  { x: 125.8, y: 70.2, r: 6.4 },
  { x: 140.1, y: 72.1, r: 5.8 },
  { x: 151.9, y: 75.2, r: 5.2 },
  // Mid crown
  { x: 44.2, y: 89.8, r: 5.8 },
  { x: 56.1, y: 88.2, r: 6.4 },
  { x: 69.8, y: 86.1, r: 5.2 },
  { x: 84.2, y: 88.3, r: 5.8 },
  { x: 100.1, y: 90.2, r: 6.4 },
  { x: 115.9, y: 88.1, r: 5.2 },
  { x: 129.8, y: 86.2, r: 5.8 },
  { x: 144.2, y: 88.1, r: 6.4 },
  { x: 155.8, y: 90.2, r: 5.2 },
  // Lower crown
  { x: 44.1, y: 104.9, r: 6.4 },
  { x: 57.2, y: 104.1, r: 5.2 },
  { x: 70.9, y: 103.2, r: 5.8 },
  { x: 85.1, y: 104.2, r: 6.4 },
  { x: 100.2, y: 105.1, r: 5.8 },
  { x: 114.8, y: 104.2, r: 5.2 },
  { x: 129.1, y: 103.1, r: 6.4 },
  { x: 143.2, y: 104.2, r: 5.8 },
  { x: 156.1, y: 105.1, r: 5.2 },
  // Tooth waist / neck
  { x: 46.2, y: 120.1, r: 5.8 },
  { x: 59.8, y: 119.2, r: 6.4 },
  { x: 74.1, y: 119.1, r: 5.2 },
  { x: 88.2, y: 120.2, r: 5.8 },
  { x: 100.1, y: 121.1, r: 6.4 },
  { x: 111.9, y: 120.2, r: 5.2 },
  { x: 126.1, y: 119.2, r: 5.8 },
  { x: 140.2, y: 119.1, r: 6.4 },
  { x: 153.8, y: 120.2, r: 5.2 },
  // Cervical line
  { x: 50.1, y: 136.2, r: 6.4 },
  { x: 63.9, y: 135.1, r: 5.2 },
  { x: 78.2, y: 135.2, r: 5.8 },
  { x: 92.1, y: 136.1, r: 6.4 },
  { x: 107.9, y: 136.2, r: 5.8 },
  { x: 122.1, y: 135.1, r: 5.2 },
  { x: 136.2, y: 135.2, r: 6.4 },
  { x: 149.8, y: 136.1, r: 5.8 },
  // Root branching
  { x: 52.2, y: 152.1, r: 5.8 },
  { x: 65.8, y: 151.2, r: 6.4 },
  { x: 80.1, y: 150.2, r: 5.2 },
  { x: 119.9, y: 150.1, r: 5.8 },
  { x: 134.2, y: 151.2, r: 6.4 },
  { x: 147.9, y: 152.1, r: 5.2 },
  // Mid roots
  { x: 55.1, y: 168.2, r: 6.4 },
  { x: 68.9, y: 167.1, r: 5.8 },
  { x: 82.2, y: 166.2, r: 5.2 },
  { x: 118.1, y: 166.1, r: 6.4 },
  { x: 131.2, y: 167.2, r: 5.8 },
  { x: 144.8, y: 168.1, r: 5.2 },
  // Lower roots
  { x: 58.2, y: 184.1, r: 5.8 },
  { x: 72.1, y: 183.2, r: 6.4 },
  { x: 127.9, y: 183.1, r: 5.2 },
  { x: 142.1, y: 184.2, r: 5.8 },
  // Root tips
  { x: 62.1, y: 200.2, r: 6.4 },
  { x: 74.2, y: 198.1, r: 5.2 },
  { x: 125.8, y: 198.2, r: 6.4 },
  { x: 137.9, y: 200.1, r: 5.2 },
  { x: 66.2, y: 215.1, r: 5.8 },
  { x: 133.8, y: 215.2, r: 5.8 }
];

/**
 * 4-Point Sparkle Star generator
 */
function makeStarPath(x: number, y: number, r: number): string {
  return `M ${x.toFixed(1)} ${(y - r).toFixed(1)} Q ${x.toFixed(1)} ${y.toFixed(1)} ${(x + r).toFixed(1)} ${y.toFixed(1)} Q ${x.toFixed(1)} ${y.toFixed(1)} ${x.toFixed(1)} ${(y + r).toFixed(1)} Q ${x.toFixed(1)} ${y.toFixed(1)} ${(x - r).toFixed(1)} ${y.toFixed(1)} Q ${x.toFixed(1)} ${y.toFixed(1)} ${x.toFixed(1)} ${(y - r).toFixed(1)} Z`;
}

/**
 * Official Constellation Molar Tooth Emblem
 */
export function SkyMolarEmblem({
  className = "w-full h-full",
  color = "#1B1F3B"
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="35 45 130 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SKY Dental Constellation Molar Tooth"
    >
      <g fill={color}>
        {MOLAR_STARS.map((s, idx) => (
          <path key={idx} d={makeStarPath(s.x, s.y, s.r)} />
        ))}
      </g>
    </svg>
  );
}

// Alias for backwards compatibility
export const SkyDentalEmblem = SkyMolarEmblem;

/**
 * Golden Geometric Sunburst / Flower Emblem
 */
export function SkySunEmblem({
  className = "w-full h-full"
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="-45 -45 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SKY Dental Golden Emblem"
    >
      {/* 8-pointed geometric flower petals */}
      <path
        d="M 0 -38 L 10 -38 L 15 -28 L 26 -26 L 28 -15 L 38 -10 L 38 0 L 38 10 L 28 15 L 26 26 L 15 28 L 10 38 L 0 38 L -10 38 L -15 28 L -26 26 L -28 15 L -38 10 L -38 0 L -38 -10 L -28 -15 L -26 -26 L -15 -28 L -10 -38 Z"
        fill="#FBBF24"
      />
      {/* Stepped outer teeth */}
      <path
        d="M 0 -42 L 8 -42 L 8 -32 L 22 -32 L 22 -22 L 32 -22 L 32 -8 L 42 -8 L 42 8 L 32 8 L 32 22 L 22 22 L 22 32 L 8 32 L 8 42 L -8 42 L -8 32 L -22 32 L -22 22 L -32 22 L -32 8 L -42 8 L -42 -8 L -32 -8 L -32 -22 L -22 -22 L -22 -32 L -8 -32 L -8 -42 Z"
        fill="#F59E0B"
        opacity="0.95"
      />

      {/* Center Checkered Grid */}
      <g transform="translate(-16, -16)">
        <rect x="0" y="0" width="8" height="8" fill="#F59E0B" />
        <rect x="8" y="0" width="8" height="8" fill="#FBBF24" />
        <rect x="16" y="0" width="8" height="8" fill="#F59E0B" />
        <rect x="24" y="0" width="8" height="8" fill="#FBBF24" />

        <rect x="0" y="8" width="8" height="8" fill="#FBBF24" />
        <rect x="8" y="8" width="8" height="8" fill="#F59E0B" />
        <rect x="16" y="8" width="8" height="8" fill="#FBBF24" />
        <rect x="24" y="8" width="8" height="8" fill="#F59E0B" />

        <rect x="0" y="16" width="8" height="8" fill="#F59E0B" />
        <rect x="8" y="16" width="8" height="8" fill="#FBBF24" />
        <rect x="16" y="16" width="8" height="8" fill="#F59E0B" />
        <rect x="24" y="16" width="8" height="8" fill="#FBBF24" />

        <rect x="0" y="24" width="8" height="8" fill="#FBBF24" />
        <rect x="8" y="24" width="8" height="8" fill="#F59E0B" />
        <rect x="16" y="24" width="8" height="8" fill="#FBBF24" />
        <rect x="24" y="24" width="8" height="8" fill="#F59E0B" />
      </g>
    </svg>
  );
}

/**
 * Full Official SKY Dental Logo Lockup (Matching exact user uploaded image)
 */
export function SkyOfficialLogo({
  className = "w-full h-auto",
  theme = 'light'
}: {
  className?: string;
  theme?: 'light' | 'dark';
}) {
  const isDark = theme === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#1B1F3B';

  return (
    <svg
      viewBox="0 0 460 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SKY Dental Official Logo"
    >
      {/* Left: Constellation Tooth */}
      <g transform="translate(-10, 30) scale(1.15)" fill={textColor}>
        {MOLAR_STARS.map((s, idx) => (
          <path key={idx} d={makeStarPath(s.x, s.y, s.r)} />
        ))}
      </g>

      {/* Top Right: Golden Geometric Sun */}
      <g transform="translate(345, 110)">
        {/* 8-pointed geometric flower petals */}
        <path
          d="M 0 -38 L 10 -38 L 15 -28 L 26 -26 L 28 -15 L 38 -10 L 38 0 L 38 10 L 28 15 L 26 26 L 15 28 L 10 38 L 0 38 L -10 38 L -15 28 L -26 26 L -28 15 L -38 10 L -38 0 L -38 -10 L -28 -15 L -26 -26 L -15 -28 L -10 -38 Z"
          fill="#FBBF24"
        />
        <path
          d="M 0 -42 L 8 -42 L 8 -32 L 22 -32 L 22 -22 L 32 -22 L 32 -8 L 42 -8 L 42 8 L 32 8 L 32 22 L 22 22 L 22 32 L 8 32 L 8 42 L -8 42 L -8 32 L -22 32 L -22 22 L -32 22 L -32 8 L -42 8 L -42 -8 L -32 -8 L -32 -22 L -22 -22 L -22 -32 L -8 -32 L -8 -42 Z"
          fill="#F59E0B"
          opacity="0.95"
        />
        {/* Checkers */}
        <g transform="translate(-16, -16)">
          <rect x="0" y="0" width="8" height="8" fill="#F59E0B" />
          <rect x="8" y="0" width="8" height="8" fill="#FBBF24" />
          <rect x="16" y="0" width="8" height="8" fill="#F59E0B" />
          <rect x="24" y="0" width="8" height="8" fill="#FBBF24" />

          <rect x="0" y="8" width="8" height="8" fill="#FBBF24" />
          <rect x="8" y="8" width="8" height="8" fill="#F59E0B" />
          <rect x="16" y="8" width="8" height="8" fill="#FBBF24" />
          <rect x="24" y="8" width="8" height="8" fill="#F59E0B" />

          <rect x="0" y="16" width="8" height="8" fill="#F59E0B" />
          <rect x="8" y="16" width="8" height="8" fill="#FBBF24" />
          <rect x="16" y="16" width="8" height="8" fill="#F59E0B" />
          <rect x="24" y="16" width="8" height="8" fill="#FBBF24" />

          <rect x="0" y="24" width="8" height="8" fill="#FBBF24" />
          <rect x="8" y="24" width="8" height="8" fill="#F59E0B" />
          <rect x="16" y="24" width="8" height="8" fill="#FBBF24" />
          <rect x="24" y="24" width="8" height="8" fill="#F59E0B" />
        </g>
      </g>

      {/* Center: "SKY" Typography */}
      <g fill={textColor}>
        {/* S */}
        <path d="M 264 218 C 259 212 251 208 240 208 C 226 208 216 215 216 226 C 216 237 224 242 238 246 L 245 248 C 264 253 276 261 276 278 C 276 296 261 308 240 308 C 224 308 212 301 204 290 L 213 282 C 220 292 229 298 240 298 C 254 298 265 290 265 278 C 265 267 256 262 242 257 L 235 255 C 218 250 206 242 206 226 C 206 210 220 198 240 198 C 253 198 264 204 272 212 Z" />

        {/* K */}
        <path d="M 292 200 L 303 200 L 303 246 L 336 200 L 350 200 L 316 248 L 352 306 L 338 306 L 308 258 L 303 265 L 303 306 L 292 306 Z" />

        {/* Y */}
        <path d="M 366 200 L 390 250 L 390 306 L 379 306 L 379 250 L 355 200 L 367 200 Z M 414 200 L 390 250 L 379 250 L 402 200 Z" />
      </g>

      {/* Bottom: "سكاي للأسنان" Arabic Typography */}
      <text
        x="315"
        y="350"
        textAnchor="middle"
        fontFamily="'Cairo', 'Tajawal', sans-serif"
        fontSize="32"
        fontWeight="700"
        fill={textColor}
      >
        سكاي للأسنان
      </text>
    </svg>
  );
}

/**
 * Responsive Header / Navigation Brand Component
 */
export function SkyDentalBrand({
  lang = 'en',
  theme = 'light',
  className = ''
}: {
  lang?: 'en' | 'ar';
  theme?: 'light' | 'dark';
  className?: string;
}) {
  const isDark = theme === 'dark';
  const isAr = lang === 'ar';
  const textColor = isDark ? 'text-white' : 'text-[#1B1F3B]';

  return (
    <div className={`inline-flex items-center gap-2 sm:gap-3 select-none ${className}`}>
      {/* Official Constellation Molar Tooth Icon */}
      <div className="w-8 h-10 sm:w-9 sm:h-11 shrink-0 transition-transform group-hover:scale-105">
        <SkyMolarEmblem color={isDark ? "#38BDF8" : "#1B1F3B"} />
      </div>

      {/* Typography and Golden Sun */}
      <div className="flex flex-col justify-center leading-tight">
        <div className="flex items-center gap-1.5" dir="ltr">
          <span className={`text-[16px] sm:text-[19px] font-black tracking-[0.14em] uppercase ${textColor}`}>
            SKY
          </span>
          <span className="text-[10px] sm:text-[11px] font-bold text-sky-600 uppercase tracking-widest">
            DENTAL
          </span>
          {/* Golden Sun Accent */}
          <div className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0">
            <SkySunEmblem />
          </div>
        </div>

        <div className="flex items-center gap-1.5 mt-0.5">
          <span className={`text-[11px] sm:text-[12px] font-bold ${isDark ? 'text-slate-200' : 'text-[#1B1F3B]'}`}>
            سكاي للأسنان
          </span>
          <span className="text-[9px] text-slate-400 font-mono">·</span>
          <span className="text-[9px] font-semibold uppercase tracking-wider text-sky-600">
            {isAr ? 'الكويت' : 'Kuwait'}
          </span>
        </div>
      </div>
    </div>
  );
}

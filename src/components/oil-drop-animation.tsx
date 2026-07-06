"use client"

import { useEffect, useState } from "react"

const STATUS = ["Diagnostics", "In service", "Test drive", "Ready for pickup"]

const DROPS = [
  { left: "18%", delay: "0s",    size: 10 },
  { left: "38%", delay: "0.7s",  size: 8  },
  { left: "55%", delay: "1.4s",  size: 11 },
  { left: "70%", delay: "0.3s",  size: 7  },
  { left: "28%", delay: "1.9s",  size: 9  },
  { left: "62%", delay: "1.1s",  size: 8  },
  { left: "82%", delay: "0.5s",  size: 10 },
]

const RIPPLES = [
  { left: "25%", delay: "0s"   },
  { left: "55%", delay: "0.9s" },
  { left: "78%", delay: "1.7s" },
]

export function OilDropAnimation() {
  const [statusIdx, setStatusIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setStatusIdx(i => (i + 1) % STATUS.length), 2300)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      className="relative h-44 w-full overflow-hidden rounded-3xl select-none"
      style={{ background: "linear-gradient(180deg, #1c1c22 0%, #141418 70%, #0e0e12 100%)" }}
      aria-hidden
    >
      <style>{`
        @keyframes oil-fall {
          0%   { transform: translate(-50%, -10px); opacity: 0; }
          12%  { opacity: 1; }
          82%  { opacity: 1; }
          100% { transform: translate(-50%, 95px); opacity: 0; }
        }
        @keyframes oil-ripple {
          0%   { transform: translateX(-50%) scale(0.4); opacity: 0.7; }
          80%  { transform: translateX(-50%) scale(3.5); opacity: 0; }
          100% { transform: translateX(-50%) scale(3.5); opacity: 0; }
        }
        @keyframes oil-fadein {
          from { opacity: 0; transform: translateY(2px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Atmospheric blur blobs */}
      <div className="absolute top-4 left-8 h-16 w-16 rounded-full bg-primary/15 blur-2xl" />
      <div className="absolute top-6 right-12 h-12 w-12 rounded-full bg-primary/10 blur-xl" />
      <div className="absolute bottom-8 left-1/2 h-10 w-20 -translate-x-1/2 rounded-full bg-primary/10 blur-xl" />

      {/* Header strip */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 pt-3">
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary/60">
          Oil Monitor
        </span>
        <span className="font-mono text-[10px] text-primary/50">
          07 drops
        </span>
      </div>

      {/* Source: auto hoist lift-bar SVG */}
      <svg viewBox="0 0 240 24" className="absolute top-8 left-0 w-full" fill="none">
        <rect x="10" y="10" width="220" height="4" rx="2" className="fill-primary/25" />
        <rect x="14" y="4" width="6"   height="10" rx="1" className="fill-primary/20" />
        <rect x="220" y="4" width="6"  height="10" rx="1" className="fill-primary/20" />
        <circle cx="17"  cy="4" r="2.5" className="fill-primary/30" />
        <circle cx="223" cy="4" r="2.5" className="fill-primary/30" />
        <rect x="117" y="6" width="6" height="8" rx="1" className="fill-primary/20" />
      </svg>

      {/* Oil drop particles */}
      {DROPS.map((drop, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: drop.left,
            top: "28px",
            animation: `oil-fall 2.8s ease-in infinite`,
            animationDelay: drop.delay,
          }}
        >
          <svg width={drop.size} height={Math.round(drop.size * 1.5)} viewBox="0 0 12 18">
            <defs>
              <linearGradient id={`og-${i}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#7c5c2a" />
                <stop offset="60%"  stopColor="#4a3518" />
                <stop offset="100%" stopColor="#2a1e0e" />
              </linearGradient>
            </defs>
            <path
              d="M6 1 C 4.5 4.5, 2 8.5, 2 12 a 4 4 0 0 0 8 0 C 10 8.5, 7.5 4.5, 6 1 Z"
              fill={`url(#og-${i})`}
            />
            <ellipse cx="4.5" cy="7" rx="1.2" ry="2" fill="white" fillOpacity="0.15" />
          </svg>
        </div>
      ))}

      {/* Surface: floor grid */}
      <svg viewBox="0 0 240 16" className="absolute bottom-10 left-0 w-full" fill="none">
        <line x1="0" y1="2" x2="240" y2="2" stroke="currentColor" className="text-primary/20" strokeWidth="1" />
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={i} x1={i * 20 + 10} y1="2" x2={i * 20 + 10} y2="7"
            stroke="currentColor" className="text-primary/15" strokeWidth="1" />
        ))}
      </svg>

      {/* Oil puddle ripples */}
      {RIPPLES.map((r, i) => (
        <div
          key={i}
          className="absolute bottom-10"
          style={{ left: r.left }}
        >
          <div
            className="h-2 w-8 rounded-full border border-primary/30"
            style={{ animation: "oil-ripple 2.8s ease-out infinite", animationDelay: r.delay }}
          />
        </div>
      ))}

      {/* Footer strip */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-2 px-4 pb-3">
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
          <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
        </span>
        <span
          key={statusIdx}
          className="font-mono text-[10px] text-primary/70"
          style={{ animation: "oil-fadein 0.35s ease both" }}
        >
          {STATUS[statusIdx]}
        </span>
      </div>
    </div>
  )
}

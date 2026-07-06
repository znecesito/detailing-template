"use client"

import { useEffect, useState } from "react"

const STATUS = ["Pre-rinse", "Soaping up", "Scrubbing", "Spotless"]

const BUBBLES = [
  { left: "22%", bottom: "36%", size: 8,  delay: "0s",    dur: "3.2s" },
  { left: "45%", bottom: "28%", size: 6,  delay: "0.6s",  dur: "2.8s" },
  { left: "68%", bottom: "40%", size: 10, delay: "1.2s",  dur: "3.5s" },
  { left: "33%", bottom: "22%", size: 5,  delay: "1.8s",  dur: "2.6s" },
  { left: "78%", bottom: "33%", size: 7,  delay: "0.4s",  dur: "3.1s" },
  { left: "55%", bottom: "18%", size: 9,  delay: "2.1s",  dur: "3.8s" },
  { left: "15%", bottom: "26%", size: 5,  delay: "1.5s",  dur: "3s"   },
  { left: "88%", bottom: "38%", size: 6,  delay: "0.9s",  dur: "2.9s" },
]

const RIPPLES = [
  { left: "28%", delay: "0s"   },
  { left: "56%", delay: "1.1s" },
  { left: "76%", delay: "2s"   },
]

export function SudsAnimation() {
  const [statusIdx, setStatusIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setStatusIdx(i => (i + 1) % STATUS.length), 2300)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      className="relative h-44 w-full overflow-hidden rounded-3xl select-none ring-1 ring-white/8"
      style={{ background: "linear-gradient(180deg, #152030 0%, #0d1825 60%, #090f1c 100%)" }}
      aria-hidden
    >
      <style>{`
        @keyframes wiper-sweep {
          0%   { transform: rotate(-42deg); }
          45%  { transform: rotate(42deg); }
          52%  { transform: rotate(42deg); }
          97%  { transform: rotate(-42deg); }
          100% { transform: rotate(-42deg); }
        }
        @keyframes bubble-float {
          0%   { transform: translate(-50%, 0) scale(0.3); opacity: 0; }
          14%  { opacity: 0.85; transform: translate(-50%, 0) scale(1); }
          75%  { opacity: 0.55; }
          100% { transform: translate(-50%, -68px) scale(0.4); opacity: 0; }
        }
        @keyframes soap-ripple {
          0%   { transform: translateX(-50%) scaleX(0.4) scaleY(0.4); opacity: 0.65; }
          80%  { transform: translateX(-50%) scaleX(3.8) scaleY(1.5); opacity: 0; }
          100% { transform: translateX(-50%) scaleX(3.8) scaleY(1.5); opacity: 0; }
        }
        @keyframes suds-fadein {
          from { opacity: 0; transform: translateY(2px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Atmospheric blur blobs */}
      <div className="absolute top-3 left-6 h-14 w-20 rounded-full bg-cyan-400/10 blur-2xl" />
      <div className="absolute top-5 right-10 h-10 w-14 rounded-full bg-blue-300/10 blur-xl" />
      <div className="absolute bottom-6 left-1/2 h-8 w-24 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-xl" />

      {/* Header strip */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 pt-3">
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary/60">
          Wash Status
        </span>
        <span className="font-mono text-[10px] text-primary/50">Active</span>
      </div>

      {/* Windshield wiper — CSS div so transform-origin is reliable */}
      {/* Pivot base */}
      <div className="absolute" style={{
        bottom: "22px", left: "44px",
        width: "12px", height: "6px",
        background: "rgba(255,255,255,0.15)",
        borderRadius: "50%",
      }} />
      {/* Arm + blade */}
      <div style={{
        position: "absolute",
        bottom: "24px",
        left: "49px",
        width: "3px",
        height: "108px",
        background: "linear-gradient(to top, rgba(255,255,255,0.45), rgba(255,255,255,0.18))",
        borderRadius: "2px 2px 1px 1px",
        transformOrigin: "bottom center",
        animation: "wiper-sweep 3.8s ease-in-out infinite",
      }}>
        {/* Rubber blade tip */}
        <div style={{
          position: "absolute",
          top: "-3px",
          left: "-4px",
          width: "11px",
          height: "5px",
          background: "rgba(255,255,255,0.55)",
          borderRadius: "2px",
        }} />
        {/* Foam smear behind blade */}
        <div style={{
          position: "absolute",
          inset: "8px -4px 16px -4px",
          background: "rgba(200,235,255,0.06)",
          borderRadius: "4px",
        }} />
      </div>

      {/* Glass surface */}
      <svg viewBox="0 0 240 12" className="absolute bottom-9 left-0 w-full" fill="none">
        <path d="M 0 6 Q 120 2 240 6" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <path d="M 20 7 Q 90 4 170 7"  stroke="rgba(180,220,255,0.07)" strokeWidth="1.5" />
      </svg>

      {/* Foam/suds bubbles */}
      {BUBBLES.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: b.left,
            bottom: b.bottom,
            width: b.size,
            height: b.size,
            background: "radial-gradient(circle at 35% 32%, rgba(255,255,255,0.92), rgba(190,225,255,0.35))",
            border: "0.5px solid rgba(255,255,255,0.28)",
            animation: `bubble-float ${b.dur} ease-out infinite`,
            animationDelay: b.delay,
          }}
        />
      ))}

      {/* Soap ripples on the glass */}
      {RIPPLES.map((r, i) => (
        <div key={i} className="absolute bottom-9" style={{ left: r.left }}>
          <div
            className="h-2 w-10 rounded-full border border-cyan-300/20"
            style={{ animation: "soap-ripple 2.8s ease-out infinite", animationDelay: r.delay }}
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
          style={{ animation: "suds-fadein 0.35s ease both" }}
        >
          {STATUS[statusIdx]}
        </span>
      </div>
    </div>
  )
}

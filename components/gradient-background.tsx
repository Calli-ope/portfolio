"use client"

export function GradientBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Bottom-right gradient glow */}
      <div 
        className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full opacity-30 dark:opacity-40 blur-3xl"
        style={{
          background: 'radial-gradient(circle, oklch(0.50 0.18 275 / 0.6) 0%, oklch(0.35 0.15 275 / 0.4) 40%, transparent 70%)',
        }}
      />
      {/* Subtle top-left accent */}
      <div 
        className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full opacity-10 dark:opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, oklch(0.72 0.10 275 / 0.5) 0%, transparent 60%)',
        }}
      />
    </div>
  )
}

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({
  project,
  headline,
  headlineClass,
  description,
  badges,
}) {
  const cardRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  function handleMouseMove(event) {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    })
  }

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative flex h-full min-h-[280px] flex-col justify-center overflow-hidden rounded-3xl border border-slate-800/50 bg-slate-900/40 p-8 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-white/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] sm:min-h-[320px]"
    >
      <div
        className="pointer-events-none absolute -inset-px z-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.08), transparent 40%)`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col justify-center gap-5">
        <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
          {project}
        </p>

        <h3
          className={`text-5xl font-extrabold tracking-tighter sm:text-6xl ${headlineClass}`}
        >
          {headline}
        </h3>

        <p className="max-w-xl text-base leading-relaxed text-slate-400">
          {description}
        </p>

        <div className="mt-2 flex flex-wrap gap-2">
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-slate-300"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

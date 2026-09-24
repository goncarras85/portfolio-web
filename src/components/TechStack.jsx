import { motion } from 'framer-motion'
import {
  Atom,
  Wind,
  Database,
  Braces,
  Coffee,
  LayoutTemplate,
  Cloud,
  Terminal,
  Server,
  FolderGit2,
} from 'lucide-react'

const technologies = [
  { name: 'React', Icon: Atom },
  { name: 'Tailwind CSS', Icon: Wind },
  { name: 'Supabase', Icon: Database },
  { name: 'Python', Icon: Braces },
  { name: 'Java', Icon: Coffee },
  { name: 'WordPress', Icon: LayoutTemplate },
  { name: 'AWS', Icon: Cloud },
  { name: 'Linux', Icon: Terminal },
  { name: 'MySQL', Icon: Server },
  { name: 'GitHub', Icon: FolderGit2 },
]

const badgeClass =
  'tech-badge inline-flex shrink-0 items-center gap-2 cursor-default rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-100 antialiased subpixel-antialiased transform-gpu transition-all duration-300 hover:border-sky-400/60 hover:bg-slate-800 hover:text-sky-300'

const textStyle = {
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
}

function TechBadge({ name, Icon, index, animated }) {
  const content = (
    <>
      <Icon
        className="h-4 w-4 shrink-0"
        width={16}
        height={16}
        strokeWidth={2}
        aria-hidden="true"
      />
      <span className="antialiased subpixel-antialiased" style={textStyle}>
        {name}
      </span>
    </>
  )

  if (!animated) {
    return (
      <span className={badgeClass} style={textStyle}>
        {content}
      </span>
    )
  }

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 18,
        delay: index * 0.06,
      }}
      className={badgeClass}
      style={textStyle}
    >
      {content}
    </motion.span>
  )
}

function MarqueeTrack({ animated = false }) {
  return (
    <div
      className="flex shrink-0 items-center gap-3 pr-3 transform-gpu antialiased [transform:translateZ(0)]"
      aria-hidden={!animated}
    >
      {technologies.map(({ name, Icon }, index) => (
        <TechBadge
          key={`${name}-${index}`}
          name={name}
          Icon={Icon}
          index={index}
          animated={animated}
        />
      ))}
    </div>
  )
}

export default function TechStack() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <section className="overflow-hidden py-20 sm:py-24">
        <h2 className="mb-10 px-6 text-center text-sm font-medium tracking-wide text-slate-500">
          Tecnologías con las que trabajo
        </h2>

        <div className="group/marquee relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-950 to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-slate-950 to-transparent sm:w-24" />

          <div className="flex w-max animate-marquee will-change-transform transform-gpu antialiased [transform:translateZ(0)] group-hover/marquee:[animation-play-state:paused]">
            <MarqueeTrack animated />
            <MarqueeTrack />
            <MarqueeTrack />
            <MarqueeTrack />
          </div>
        </div>
      </section>
    </motion.div>
  )
}

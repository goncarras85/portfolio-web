import { useState } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Code2, Server } from 'lucide-react'

const milestones = [
  {
    date: 'ACTUALIDAD',
    title: 'Grado en Inteligencia Artificial',
    detail: 'Univ. Europea · Emprendedor en Stackforge',
    Icon: Code2,
    current: true,
  },
  {
    date: 'JUNIO 2026',
    title: 'Graduado en DAM',
    detail: 'Universidad Europea · Mención Honorífica por TFG',
    Icon: GraduationCap,
    current: false,
  },
  {
    date: 'MAYO 2026',
    title: 'Lead Developer Intern',
    detail: 'Lokexperience',
    Icon: Briefcase,
    current: false,
  },
  {
    date: '2022 - 2024',
    title: 'Grado Medio en SMR (Sistemas Microinformáticos y Redes)',
    detail: 'La Salle Griñón',
    Icon: Server,
    current: false,
  },
]

function TimelineItem({ date, title, detail, Icon, current, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <li className="relative">
      <motion.div
        className={`absolute top-3 -left-14 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-slate-900 transition-colors duration-300 ${
          hovered
            ? 'scale-125 border-blue-400'
            : current
              ? 'animate-pulse border-blue-500'
              : 'border-slate-700'
        }`}
        animate={{ scale: hovered ? 1.25 : 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <Icon
          className={`h-4 w-4 transition-colors duration-300 ${
            hovered
              ? 'text-white'
              : current
                ? 'text-blue-400'
                : 'text-slate-400'
          }`}
          strokeWidth={2}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: index * 0.2, duration: 0.5, ease: 'easeOut' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <article className="rounded-2xl border border-slate-800/50 bg-slate-900/40 p-6 backdrop-blur-md transition-colors hover:border-slate-600">
          <span className="mb-3 inline-flex w-fit rounded-full bg-blue-900/30 px-3 py-1 text-xs font-bold text-blue-400">
            {date}
          </span>
          <h3 className="text-base font-semibold text-white sm:text-lg">
            {title}
          </h3>
          <p className="mt-1 text-sm text-slate-400">{detail}</p>
        </article>
      </motion.div>
    </li>
  )
}

export default function CareerTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-10 text-sm font-medium tracking-wide text-slate-500">
            Trayectoria
          </h2>

          <ol className="relative space-y-8 pl-14">
            <div
              className="absolute top-2 bottom-2 left-[1.15rem] w-[2px] overflow-hidden"
              aria-hidden="true"
            >
              <motion.div
                className="w-full origin-top bg-gradient-to-b from-blue-500 via-slate-700 to-transparent"
                initial={{ height: '0%' }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              />
            </div>

            {milestones.map((milestone, index) => (
              <TimelineItem key={milestone.date} {...milestone} index={index} />
            ))}
          </ol>
        </div>
      </section>
    </motion.div>
  )
}

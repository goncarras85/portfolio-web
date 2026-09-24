import { motion } from 'framer-motion'
import { FolderKanban, Download } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export default function HeroSection() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      variants={fadeUp}
    >
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center sm:py-32">
        <div
          className="pointer-events-none absolute inset-0 bg-hero-grid"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.12)_0%,_transparent_55%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-[3px] shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]">
              <div className="overflow-hidden rounded-full">
                <img
                  src="/perfil.png"
                  alt="Gonzalo Carrasco Sánchez"
                  className="h-36 w-36 scale-105 rounded-full object-cover sm:h-40 sm:w-40"
                />
              </div>
            </div>
          </motion.div>

          <span className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-300 backdrop-blur-sm">
            Software Developer & IA Student
          </span>

          <motion.h1
            className="mb-4 text-6xl font-black tracking-tight text-white md:text-8xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Gonzalo Carrasco Sánchez
          </motion.h1>

          <motion.p
            className="mb-10 max-w-2xl bg-gradient-to-r from-sky-400 via-cyan-400 to-violet-500 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl md:text-3xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
          >
            Construyendo software escalable y soluciones de Inteligencia
            Artificial.
          </motion.p>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-white to-sky-200 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_30px_rgba(255,255,255,0.15)] transition hover:from-sky-300 hover:to-cyan-200"
            >
              <FolderKanban className="h-4 w-4" />
              Ver Proyectos
            </a>

            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-sky-400/50 bg-white/5 px-7 py-3.5 text-sm font-semibold text-slate-100 shadow-[0_0_20px_rgba(56,189,248,0.15)] backdrop-blur-sm transition hover:border-sky-300 hover:bg-white/10 hover:shadow-[0_0_28px_rgba(56,189,248,0.3)]"
            >
              <Download className="h-4 w-4" />
              Descargar CV
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

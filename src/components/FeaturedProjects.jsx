import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projects = [
  {
    project: 'Proyecto Stackforge',
    headline: 'SaaS Architecture',
    headlineClass:
      'bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent',
    description:
      'Desarrollo de boilerplate y sistema de facturación base para despliegue ultra rápido.',
    badges: ['Arquitectura Escalable', 'Sistemas de Pago', 'Full-Stack'],
  },
  {
    project: 'Proyecto Lokexperience',
    headline: 'Enterprise Scale',
    headlineClass:
      'bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent',
    description:
      'CRM corporativo Full-Stack diseñado para operar a nivel de multinacional.',
    badges: ['React', 'Supabase RLS', 'Gestión de Roles'],
  },
  {
    project: 'Proyecto PropTech',
    headline: 'PropTech MVP',
    headlineClass:
      'bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-600 bg-clip-text text-transparent',
    description:
      'CRM inmobiliario integrado con la API de Idealista. Galardonado con Mención Honorífica por el tribunal universitario.',
    badges: ['TypeScript', 'API Integration', 'React + Supabase'],
  },
  {
    project: 'Área de Clientes (Fotografía)',
    headline: 'Cloud Architecture',
    headlineClass:
      'bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent',
    description:
      'Sistema de clientes desacoplado. Arquitectura de datos dual utilizando Supabase y almacenamiento de objetos escalable en Cloudflare R2 para la gestión pesada de imágenes.',
    badges: ['Cloudflare R2', 'Supabase Auth', 'Object Storage'],
  },
]

export default function FeaturedProjects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <section id="proyectos" className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-sm font-medium tracking-wide text-slate-500">
            Proyectos Destacados
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.headline} {...project} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

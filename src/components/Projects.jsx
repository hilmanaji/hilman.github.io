import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Smart Home IoT Dashboard',
    description:
      'A real-time IoT dashboard built with Raspberry Pi to monitor and control home appliances remotely. Features live sensor data visualization and automation rules.',
    tags: ['Laravel', 'IoT', 'RaspberryPi', 'MQTT'],
    github: 'https://github.com/hilmanaji',
    demo: null,
    emoji: '🏠',
    bgColor: 'bg-gradient-to-br from-indigo-500 to-purple-600',
  },
  {
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with product management, cart system, payment gateway integration, and order tracking built with Laravel and React.',
    tags: ['Laravel', 'React', 'MySQL', 'Tailwind'],
    github: 'https://github.com/hilmanaji',
    demo: null,
    emoji: '🛒',
    bgColor: 'bg-gradient-to-br from-emerald-500 to-teal-600',
  },
  {
    title: 'Student Information System',
    description:
      'A comprehensive student management system with attendance tracking, grade management, and parent portal built for a local school.',
    tags: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
    github: 'https://github.com/hilmanaji',
    demo: null,
    emoji: '🎓',
    bgColor: 'bg-gradient-to-br from-orange-500 to-red-500',
  },
  {
    title: 'Weather Monitoring Station',
    description:
      'IoT-based weather monitoring station using Raspberry Pi with DHT22 sensors. Logs temperature, humidity, and pressure data with beautiful charts.',
    tags: ['Python', 'IoT', 'RaspberryPi', 'React'],
    github: 'https://github.com/hilmanaji',
    demo: null,
    emoji: '🌤️',
    bgColor: 'bg-gradient-to-br from-sky-500 to-blue-600',
  },
  {
    title: 'Task Management App',
    description:
      'A Kanban-style task management application with drag-and-drop, real-time collaboration, and team management features.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/hilmanaji',
    demo: null,
    emoji: '✅',
    bgColor: 'bg-gradient-to-br from-violet-500 to-purple-600',
  },
  {
    title: 'Restaurant POS System',
    description:
      'Point-of-sale system for restaurants with table management, order tracking, kitchen display, and analytics dashboard.',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'Tailwind'],
    github: 'https://github.com/hilmanaji',
    demo: null,
    emoji: '🍽️',
    bgColor: 'bg-gradient-to-br from-rose-500 to-pink-600',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-2">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-emerald-500 rounded-full mx-auto mb-4" />
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Here are some of the projects I&apos;ve built. Each one taught me something new and pushed my skills further.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/hilmanaji"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-medium hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 dark:hover:border-indigo-500 transition-all duration-200 hover:scale-105"
          >
            View All on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

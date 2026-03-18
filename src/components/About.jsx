import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const techStack = [
  { name: 'PHP', emoji: '🐘', color: 'bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-700' },
  { name: 'Laravel', emoji: '🔴', color: 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700' },
  { name: 'React', emoji: '⚛️', color: 'bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700' },
  { name: 'MySQL', emoji: '🗄️', color: 'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-700' },
  { name: 'JavaScript', emoji: '📜', color: 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700' },
  { name: 'Tailwind CSS', emoji: '🎨', color: 'bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-700' },
  { name: 'Node.js', emoji: '🟢', color: 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700' },
  { name: 'Raspberry Pi', emoji: '🍓', color: 'bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-700' },
  { name: 'IoT', emoji: '📡', color: 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700' },
  { name: 'Git', emoji: '📦', color: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600' },
]

function TechBadge({ tech, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border ${tech.color} transition-transform duration-200 hover:scale-105 cursor-default`}
    >
      <span>{tech.emoji}</span>
      {tech.name}
    </motion.span>
  )
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-2">About Me</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Who I Am</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-emerald-500 rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Bio */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-100">
                Full-Stack Developer & IoT Enthusiast
              </h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  Hi! I&apos;m <strong className="text-slate-800 dark:text-slate-200">Hilman Aji</strong>, a passionate
                  Full-Stack Developer based in Indonesia. I love building clean, efficient, and
                  user-friendly web applications.
                </p>
                <p>
                  I specialize in <strong className="text-slate-800 dark:text-slate-200">PHP/Laravel</strong> for
                  backend development and <strong className="text-slate-800 dark:text-slate-200">React</strong> for
                  building dynamic front-ends. I also have a keen interest in
                  <strong className="text-slate-800 dark:text-slate-200"> IoT</strong> projects using
                  Raspberry Pi.
                </p>
                <p>
                  When I&apos;m not coding, I enjoy exploring new technologies and contributing
                  to open-source projects.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: 'Projects Completed', value: '15+' },
                  { label: 'Years Experience', value: '3+' },
                  { label: 'Technologies', value: '10+' },
                  { label: 'Open Source', value: '5+' },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center"
                  >
                    <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{value}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-slate-100">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, i) => (
                  <TechBadge key={tech.name} tech={tech} index={i} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

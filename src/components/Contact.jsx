import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUpRight } from 'lucide-react'

const socialLinks = [
  {
    label: 'GitHub',
    icon: Github,
    href: 'https://github.com/hilmanaji',
    color: 'hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white',
  },
  {
    label: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/hilmanaji',
    color: 'hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400',
  },
  {
    label: 'Email',
    icon: Mail,
    href: 'mailto:hilmanaji@example.com',
    color: 'hover:bg-red-50 dark:hover:bg-red-900/30 hover:text-red-600 dark:hover:text-red-400',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-2">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let&apos;s Work Together</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-emerald-500 rounded-full mx-auto mb-6" />
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto mb-12 text-lg">
            I&apos;m currently open to new opportunities. Whether you have a project in mind
            or just want to say hi, I&apos;d love to hear from you!
          </p>

          {/* CTA Button */}
          <a
            href="mailto:hilmanaji@example.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/30 mb-16"
          >
            Say Hello <ArrowUpRight className="w-5 h-5" />
          </a>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-16">
            {socialLinks.map(({ label, icon: Icon, href, color }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center gap-2 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 transition-all duration-200 ${color} group`}
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs font-medium">{label}</span>
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-slate-200 dark:border-slate-700 pt-8">
            <p className="text-slate-400 dark:text-slate-500 text-sm flex items-center justify-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by{' '}
              <span className="font-semibold text-slate-600 dark:text-slate-300">Hilman Aji</span>
              {' '}· © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

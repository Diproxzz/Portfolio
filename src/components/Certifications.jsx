import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Trophy, ExternalLink, Sparkles, Star } from 'lucide-react';

const certsAndAchievements = [
  {
    title: 'AI & Machine Learning Course',
    issuer: 'Ardent Computech Pvt. Ltd.',
    type: 'Certification',
    category: 'AI / ML',
    description: 'Comprehensive practical training covering Supervised & Unsupervised Learning, Feature Selection, Neural Networks, Python Data Science Stack (NumPy, Pandas, Matplotlib, Scikit-learn).',
    date: 'Certified',
    icon: Award,
    color: 'border-cyan-500/40 text-cyan-300'
  },
  {
    title: 'Front-End Web Development Certification',
    issuer: 'freeCodeCamp',
    type: 'Certification',
    category: 'Web Dev',
    description: 'Validated mastery in modern HTML5, CSS3, JavaScript (ES6+), Responsive Layout Design, Accessibility standards, and DOM manipulation.',
    date: 'Certified',
    icon: CheckCircle2,
    color: 'border-blue-500/40 text-blue-300'
  },
  {
    title: 'Top 5 Finalist — Smart India Hackathon (SIH)',
    issuer: 'College Level Competition',
    type: 'Achievement',
    category: 'Hackathon',
    description: 'Recognized as Top 5 Finalist for pitching and prototyping an innovative software solution addressing national problem statements under intense time constraints.',
    date: 'Top 5 Finalist',
    icon: Trophy,
    color: 'border-amber-400/40 text-amber-300'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Recognitions & Credentials</span>
          </div>
          <h2 className="text-fluid-h2 font-heading font-extrabold text-white tracking-tight">
            Certifications & <span className="gradient-text-cyan">Achievements</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Continuous learning credentials and competitive software engineering recognition.
          </p>
        </motion.div>

        {/* Animated Checklist Reveal */}
        <div className="max-w-4xl mx-auto space-y-6">
          {certsAndAchievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 flex flex-col sm:flex-row items-start gap-5 relative overflow-hidden group"
              >
                {/* Icon Badge */}
                <div className={`w-14 h-14 rounded-2xl bg-[#080c14] border ${item.color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-heading font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
                      {item.date}
                    </span>
                  </div>

                  <p className="text-xs font-mono text-cyan-400 mt-1">
                    {item.issuer} • <span className="text-slate-400">{item.type}</span>
                  </p>

                  <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

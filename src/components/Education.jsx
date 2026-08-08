import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle, BookOpen } from 'lucide-react';

const educationData = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Future Institute of Engineering & Management',
    location: 'Kolkata, India',
    period: 'Aug 2021 – Jul 2025',
    scoreLabel: 'Cumulative CGPA',
    score: '8.79 / 10',
    color: 'from-cyan-500 to-blue-600',
    description: 'Specialized coursework in Data Structures & Algorithms, Operating Systems, Machine Learning, Database Management Systems (DBMS), Software Engineering, and Computer Networks.'
  },
  {
    degree: 'Higher Secondary (Class XII)',
    institution: 'CISCE Board',
    location: 'Kolkata, India',
    period: '2021',
    scoreLabel: 'Board Score',
    score: '90.67%',
    color: 'from-blue-500 to-indigo-600',
    description: 'Focused on Science stream: Physics, Chemistry, Mathematics, and Computer Science.'
  },
  {
    degree: 'Secondary (Class X)',
    institution: 'CISCE Board',
    location: 'Kolkata, India',
    period: '2019',
    scoreLabel: 'Board Score',
    score: '88.60%',
    color: 'from-emerald-400 to-cyan-500',
    description: 'Strong foundation in Science, Mathematics, and English literature.'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative">
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
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-fluid-h2 font-heading font-extrabold text-white tracking-tight">
            Education & <span className="gradient-text-cyan">Academics</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Solid Computer Science foundation with consistent high academic performance.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-slate-800 relative"
            >
              <div>
                {/* Score Pill */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${item.color} p-0.5 shadow-md`}>
                    <div className="w-full h-full bg-[#080c14] rounded-[9px] flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">{item.scoreLabel}</span>
                    <span className="text-lg font-mono font-extrabold text-cyan-300">{item.score}</span>
                  </div>
                </div>

                {/* Degree & Institution */}
                <h3 className="font-heading font-bold text-lg text-white">
                  {item.degree}
                </h3>
                <p className="text-xs font-semibold text-slate-300 mt-1">
                  {item.institution}
                </p>

                <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Footer Meta */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  {item.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {item.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

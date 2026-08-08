import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Bot, TestTube, Sparkles, CheckCircle2 } from 'lucide-react';

const skillCategories = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: Code,
    color: 'from-cyan-500 to-blue-600',
    borderColor: 'border-cyan-500/30',
    skills: [
      { name: 'Python', tag: 'Core AI/ML', level: 'Advanced' },
      { name: 'Java', tag: 'Automation', level: 'Proficient' },
      { name: 'C', tag: 'Fundamentals', level: 'Intermediate' },
      { name: 'HTML', tag: 'Web', level: 'Proficient' },
      { name: 'CSS', tag: 'Web Styling', level: 'Proficient' },
    ]
  },
  {
    id: 'aiml',
    title: 'AI & Machine Learning',
    icon: Brain,
    color: 'from-blue-500 to-indigo-600',
    borderColor: 'border-blue-500/30',
    skills: [
      { name: 'LSTM RNN', tag: 'Deep Learning', level: 'Specialized' },
      { name: 'NLP', tag: 'Text Processing', level: 'Specialized' },
      { name: 'Deep Learning', tag: 'Neural Networks', level: 'Proficient' },
      { name: 'Data Preprocessing', tag: 'Data Pipeline', level: 'Advanced' },
      { name: 'Recommendation Systems', tag: 'Cosine Similarity', level: 'Applied' },
      { name: 'Feature Engineering', tag: 'Scikit-Learn', level: 'Advanced' },
    ]
  },
  {
    id: 'genai',
    title: 'Generative AI Tools',
    icon: Bot,
    color: 'from-emerald-400 to-cyan-500',
    borderColor: 'border-emerald-500/30',
    skills: [
      { name: 'Microsoft Copilot Studio', tag: 'AI Chatbots & Workflows', level: 'Industry Applied' },
      { name: 'Synthesia', tag: 'AI Avatar Video Gen', level: 'Industry Applied' },
    ]
  },
  {
    id: 'testing',
    title: 'Testing & Automation',
    icon: TestTube,
    color: 'from-purple-500 to-cyan-500',
    borderColor: 'border-purple-500/30',
    skills: [
      { name: 'Selenium WebDriver', tag: 'UI Automation', level: 'Industry Experience' },
      { name: 'Cucumber (BDD)', tag: 'Gherkin / Agile', level: 'Industry Experience' },
      { name: 'TestNG', tag: 'Test Framework', level: 'Proficient' },
      { name: 'Maven', tag: 'Build Tool', level: 'Proficient' },
    ]
  }
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCategories = activeFilter === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeFilter);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-fluid-h2 font-heading font-extrabold text-white tracking-tight">
            Technical <span className="gradient-text-cyan">Skill Set</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Bridging rigorous Automation Quality Engineering with cutting-edge Machine Learning and Generative AI technologies.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 min-h-[44px] ${
                activeFilter === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/60'
              }`}
            >
              All Skills ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 min-h-[44px] ${
                  activeFilter === cat.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/60'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Categories Grid (2-3 columns desktop, 1 col mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-card glass-card-hover rounded-2xl p-6 sm:p-8 relative overflow-hidden border ${category.borderColor}`}
              >
                {/* Accent Header Banner */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${category.color} p-0.5 shadow-md`}>
                    <div className="w-full h-full bg-[#080c14] rounded-[10px] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white tracking-tight">
                      {category.title}
                    </h3>
                    <span className="text-xs font-mono text-slate-400">
                      {category.skills.length} core competencies
                    </span>
                  </div>
                </div>

                {/* Skill Badges / Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                      className="group relative px-3.5 py-2 rounded-xl bg-[#080c14]/80 border border-slate-700/80 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/10 transition-all cursor-default flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 opacity-70 group-hover:opacity-100 transition-opacity" />
                      <span className="text-sm font-medium text-slate-200 group-hover:text-white">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                        {skill.tag}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

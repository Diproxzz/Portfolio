import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle2, Sparkles, Bot, Video, TestTube2, Building2 } from 'lucide-react';

const experiences = [
  {
    role: 'Quality Engineer',
    company: 'LTIMindtree (LTM)',
    location: 'Kolkata, India',
    period: 'Sep 2025 – Present',
    status: 'Current Role',
    description: 'Serving as a Quality Engineer with direct hands-on involvement in automation testing framework execution and Generative AI proof-of-concept initiatives.',
    achievements: [
      {
        icon: TestTube2,
        title: 'Automation Testing & Sprint Deliveries',
        text: 'Completed intensive 2.5-month training in Automation Testing (Java, Selenium WebDriver, Cucumber BDD framework), actively contributing to test case design, automation scripts, and execution for major client platforms including TATA 1mg and Alfred Health within Agile sprints.'
      },
      {
        icon: Bot,
        title: 'Generative AI Chatbot Development',
        text: 'Independently explored Generative AI technologies, designing, building, and deploying intelligent AI chatbots using Microsoft Copilot Studio to enable automated user query resolution and seamless workflow integration.'
      },
      {
        icon: Video,
        title: 'AI Avatar Video Creation',
        text: 'Leveraged Synthesia AI avatar video generation technology to produce high-impact AI-generated training modules and stakeholder presentations, accelerating knowledge transfer and onboarding.'
      }
    ],
    techTags: ['Java', 'Selenium', 'Cucumber', 'Microsoft Copilot Studio', 'Synthesia', 'TestNG', 'Agile']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
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
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="text-fluid-h2 font-heading font-extrabold text-white tracking-tight">
            Work <span className="gradient-text-cyan">Experience</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Professional track record showcasing technical rigor in Quality Engineering and proactive adoption of Generative AI tools.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-12 sm:pl-20 mb-12 last:mb-0"
            >
              {/* Timeline Point Node */}
              <div className="absolute left-1.5 sm:left-5 top-1.5 w-6 h-6 rounded-full bg-[#080c14] border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              </div>

              {/* Experience Glass Card */}
              <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border border-slate-800 relative">
                
                {/* Header Info */}
                <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-slate-800/80">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading font-extrabold text-2xl text-white">
                        {exp.role}
                      </h3>
                      <span className="px-3 py-0.5 rounded-full text-xs font-mono font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                        {exp.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 text-base font-semibold mt-1">
                      <Building2 className="w-4 h-4 text-cyan-400" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 space-y-1">
                    <span className="flex items-center gap-1.5 text-cyan-300 bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Sequential Animated Achievements */}
                <div className="mt-6 space-y-4">
                  {exp.achievements.map((item, aIdx) => {
                    const BulletIcon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + aIdx * 0.15 }}
                        className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#080c14]/50 border border-slate-800/80 hover:border-slate-700 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 mt-0.5">
                          <BulletIcon className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-slate-100 flex items-center gap-2">
                            {item.title}
                          </h4>
                          <p className="text-sm text-slate-300 leading-relaxed mt-1">
                            {item.text}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Tech Tags */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                  {exp.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-800/80 text-cyan-300 border border-slate-700/80"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

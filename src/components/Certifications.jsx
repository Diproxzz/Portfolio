import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Trophy, ExternalLink, Sparkles, Eye, Bot, Database, Terminal, Cpu, Layout } from 'lucide-react';
import CertificateModal from './CertificateModal';

const certsAndAchievements = [
  {
    id: 'google-ai',
    title: 'Google AI Professional Certificate',
    issuer: 'Google',
    platform: 'Coursera',
    type: 'Professional Certificate',
    category: 'Generative AI & LLMs',
    date: 'Jun 22, 2026',
    description: 'Comprehensive 7-course specialization covering AI Fundamentals, Research & Insights, Content Creation, Data Analysis, App Building, and Vibe Coding custom AI solutions.',
    courses: [
      'AI Fundamentals',
      'AI for Brainstorming & Planning',
      'AI for Research & Insights',
      'AI for Writing & Communicating',
      'AI for Content Creation',
      'AI for Data Analysis',
      'AI for App Building'
    ],
    image: '/certificates/google-ai.jpg',
    verifyUrl: 'https://coursera.org/verify/professional-cert/IPDOYARO63GI',
    icon: Bot,
    color: 'border-cyan-400/60 text-cyan-300',
    badge: '7 Courses • Specialization'
  },
  {
    id: 'google-data-analytics',
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    platform: 'Coursera',
    type: 'Professional Certificate',
    category: 'Data Science & Analytics',
    date: 'Jun 25, 2026',
    description: 'Rigorous 9-course program demonstrating practical competency in Python, SQL, Tableau, Spreadsheets, Data Cleaning, Exploratory Analysis, and Capstone Case Studies.',
    courses: [
      'Foundations: Data, Data, Everywhere',
      'Ask Questions to Make Data-Driven Decisions',
      'Prepare Data for Exploration',
      'Process Data from Dirty to Clean',
      'Analyze Data to Answer Questions',
      'Share Data Through the Art of Visualization',
      'Introduction to Data Analysis Using Python',
      'Google Data Analytics Capstone Case Study',
      'Accelerate Your Job Search with AI'
    ],
    image: '/certificates/google-data-analytics.jpg',
    verifyUrl: 'https://coursera.org/verify/professional-cert/D46GCUVQC1I0',
    icon: Database,
    color: 'border-blue-400/60 text-blue-300',
    badge: '9 Courses • Specialization'
  },
  {
    id: 'vanderbilt-prompt-engineering',
    title: 'Prompt Engineering for ChatGPT',
    issuer: 'Vanderbilt University',
    platform: 'Coursera',
    type: 'Course Certificate',
    category: 'Generative AI',
    date: 'Jun 25, 2026',
    description: 'Authorized by Dr. Jules White (Prof. of CS at Vanderbilt University). Mastered advanced LLM prompt patterns, zero/few-shot prompting, and ChatGPT workflow automation.',
    courses: [
      'Advanced Prompt Patterns & Metaprompting',
      'ChatGPT System Instructions & Personas',
      'LLM Workflow Integration & Reasoning Controls'
    ],
    image: '/certificates/vanderbilt-prompt-engineering.jpg',
    verifyUrl: 'https://coursera.org/verify/2BBC9KK45DQH',
    icon: Terminal,
    color: 'border-amber-400/60 text-amber-300',
    badge: 'Vanderbilt CS Dept.'
  },
  {
    id: 'freecodecamp-web',
    title: 'Responsive Web Design Certification',
    issuer: 'freeCodeCamp',
    platform: 'freeCodeCamp',
    type: 'Developer Certification',
    category: 'Web Engineering',
    date: 'Apr 14, 2023',
    description: 'Validated mastery representing approximately 300 hours of work in modern HTML5, CSS3, Flexbox, Grid, Responsive Layout Design, and Web Accessibility standards.',
    courses: ['HTML5 & Modern CSS3', 'Flexbox & CSS Grid Layouts', 'Responsive Web Design Patterns', 'Web Accessibility Standards'],
    image: '/certificates/freecodecamp-web.jpg',
    verifyUrl: 'https://freecodecamp.org/certification/fcc316b50fe-fcdb-4a17-be52-2047642ffd9a/responsive-web-design',
    icon: Layout,
    color: 'border-emerald-400/60 text-emerald-300',
    badge: '300 Hours Verified'
  },
  {
    id: 'sih-hackathon',
    title: 'Smart India Hackathon (SIH 2023) Participant',
    issuer: 'Future Institute of Engineering & Management (FIEM)',
    platform: 'Internal Hackathon',
    type: 'Certificate of Participation',
    category: 'Competitive Engineering',
    date: 'Sep 21, 2023',
    description: 'Awarded for participating in the Smart India Hackathon (SIH 2023) Internal Hackathon held at FIEM, prototyping innovative software solutions under strict time constraints.',
    courses: ['Hackathon Prototyping', 'Software System Architecture', 'Rapid Solution Pitching'],
    image: '/certificates/sih-hackathon.jpg',
    verifyUrl: null,
    icon: Trophy,
    color: 'border-purple-400/60 text-purple-300',
    badge: 'SIH 2023 Hackathon'
  },
  {
    id: 'ardent-aiml',
    title: 'AI & Machine Learning Certification',
    issuer: 'Ardent Computech Pvt. Ltd.',
    platform: 'Industry Training',
    type: 'Certification',
    category: 'Machine Learning',
    date: 'Certified',
    description: 'Comprehensive practical training covering Supervised & Unsupervised Learning, Feature Selection, Neural Networks, and Python Data Science Stack (NumPy, Pandas, Scikit-learn).',
    courses: ['Supervised Learning', 'Feature Selection', 'Neural Networks', 'Scikit-learn Stack'],
    image: null,
    verifyUrl: null,
    icon: Cpu,
    color: 'border-cyan-500/40 text-cyan-300',
    badge: 'Industry Certified'
  }
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

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
            Certifications & <span className="gradient-text-cyan">Credentials</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Verified industry certifications from Google, Vanderbilt University, freeCodeCamp, FIEM SIH Hackathon, and leading tech platforms.
          </p>
        </motion.div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {certsAndAchievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between relative overflow-hidden group"
              >
                <div>
                  {/* Header Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-[#080c14] border ${item.color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 shadow-sm">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs font-mono text-cyan-400 mt-1">
                    {item.issuer} {item.platform && `• ${item.platform}`}
                  </p>

                  <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div>
                  {/* Footer Meta & Lightbox Action */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="text-cyan-300/90 font-medium">{item.date}</span>

                    {item.image && (
                      <button
                        onClick={() => setSelectedCert(item)}
                        className="px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-all flex items-center gap-1.5 min-h-[36px] font-semibold"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Certificate</span>
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certificate Modal Lightbox */}
        <CertificateModal
          certificate={selectedCert}
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
        />

      </div>
    </section>
  );
}

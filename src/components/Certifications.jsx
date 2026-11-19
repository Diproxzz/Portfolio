import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Trophy, ExternalLink, Eye, Bot, Database, Terminal, Cpu, Layout, Boxes } from 'lucide-react';
import CertificateModal from './CertificateModal';

const certsAndAchievements = [
  {
    id: 'ibm-generative-ai',
    title: 'Develop Generative AI Applications: Get Started',
    issuer: 'IBM',
    platform: 'Coursera',
    type: 'Course Certificate',
    category: 'Generative AI & LLMs',
    date: 'Nov 18, 2026',
    description: 'Authorized by IBM Skills Network (Hailey Quach & Antonio Cangiano). Mastered foundational and applied techniques to build, deploy, and engineer generative AI applications.',
    courses: [
      'Generative AI Foundations & Architectures',
      'Prompt Engineering & LLM App Development',
      'IBM Watsonx & Generative AI Model Integration',
      'Building & Deploying Generative AI Solutions'
    ],
    image: '/certificates/ibm-generative-ai.jpg',
    verifyUrl: 'https://coursera.org/verify/XX4PDPMP9I7Y',
    icon: Boxes,
    color: 'border-cyan-400/60 text-cyan-300',
    badge: 'IBM Skills Network'
  },
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
    id: 'ardent-aiml',
    title: 'Data Science, AI & ML Industrial Internship',
    issuer: 'Ardent Computech Pvt. Ltd.',
    platform: 'Microsoft Partner / NEAT Certified',
    type: 'Industrial Training & Internship',
    category: 'Data Science & Machine Learning',
    date: 'Sep 26, 2023',
    description: 'Completed 1-month intensive Industrial Training & Internship on Data Science, AI, and Machine Learning using Python. Engineered & implemented the Movie Recommendation System.',
    courses: [
      'Industrial Training Certificate (Cert ID: ARDENT/2024/AD86910)',
      'Industrial Internship Certificate (Cert ID: ARDENT/2024/AD86909)',
      'Internship & Project Letter (Movie Recommendation System)',
      'Python Data Science Stack (NumPy, Pandas, Scikit-Learn)'
    ],
    image: '/certificates/ardent-training.jpg',
    images: [
      { src: '/certificates/ardent-training.jpg', label: '1. Industrial Training Certificate' },
      { src: '/certificates/ardent-internship.jpg', label: '2. Industrial Internship Certificate' },
      { src: '/certificates/ardent-letter.jpg', label: '3. Internship & Project Letter' }
    ],
    verifyUrl: null,
    icon: Cpu,
    color: 'border-cyan-500/60 text-cyan-300',
    badge: '3 Verified Documents'
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
            Verified industry certifications from IBM, Google, Vanderbilt University, Ardent Computech, freeCodeCamp, and SIH Hackathon.
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

                    {(item.image || (item.images && item.images.length > 0)) && (
                      <button
                        onClick={() => setSelectedCert(item)}
                        className="px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-all flex items-center gap-1.5 min-h-[36px] font-semibold"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Certificate{item.images ? ` (${item.images.length})` : ''}</span>
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

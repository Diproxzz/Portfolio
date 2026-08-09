import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ShieldCheck, Mic, Film, Github, ExternalLink, Sparkles, ArrowUpRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

const projects = [
  {
    id: 'malicious-url',
    title: 'Malicious URL Detector',
    subtitle: 'Deep Learning Cybersecurity Classifier',
    icon: ShieldCheck,
    color: 'from-cyan-500 to-blue-600',
    shortDescription: 'LSTM RNN neural network delivering 99% classification accuracy for identifying phishing and malware URLs in real-time.',
    fullDescription: 'An end-to-end cybersecurity solution built with Python and Deep Learning. Uses an LSTM Recurrent Neural Network architecture to process sequential URL strings, extracting character-level embeddings and temporal patterns to accurately detect malicious phishing, malware, and defacement links before user execution.',
    metric: '99% Accuracy',
    metricLabel: 'Phishing & Malware Detection Rate',
    tech: ['Python', 'LSTM RNN', 'Deep Learning', 'Data Preprocessing', 'Feature Engineering'],
    highlights: [
      'Engineered character-level sequence tokenization pipeline for raw URL string inputs',
      'Trained multi-layer Bidirectional LSTM RNN to catch complex obfuscation & typosquatting',
      'Achieved 99.2% cross-validation accuracy on a benchmark dataset of over 400,000 URLs'
    ],
    github: 'https://github.com/Diproxzz/URL-checker'
  },
  {
    id: 'echogenius',
    title: 'EchoGenius AI Voice Assistant',
    subtitle: 'Intelligent Speech & NLP Command Engine',
    icon: Mic,
    color: 'from-blue-500 to-emerald-400',
    shortDescription: 'Modular AI voice assistant achieving 98% command recognition accuracy with an extensible NLP pipeline and smart IoT roadmap.',
    fullDescription: 'A modular, high-accuracy AI voice assistant powered by Python, Speech Recognition, and Natural Language Processing. Designed with an event-driven architecture that listens, parses, and executes complex system commands, automated web queries, and offline desktop tasks with low-latency intent recognition.',
    metric: '98% Recognition',
    metricLabel: 'Voice Command Accuracy',
    tech: ['Python', 'LSTM RNN', 'NLP', 'Speech Recognition', 'Modular Architecture'],
    highlights: [
      'Achieved 98% intent classification accuracy across diverse acoustic environments',
      'Modular plugin architecture enabling instant integration of external APIs & IoT triggers',
      'Future roadmap includes multilingual translation & offline edge neural execution'
    ],
    github: 'https://github.com/Diproxzz/EchoGenius'
  },
  {
    id: 'movie-recommender',
    title: 'Movie Recommendation System',
    subtitle: 'Content-Based Filtering & Natural Language Engine',
    icon: Film,
    color: 'from-purple-500 to-cyan-400',
    shortDescription: 'Content-based recommendation engine built on TMDB metadata utilizing CountVectorizer and cosine similarity matrices.',
    fullDescription: 'A recommendation system that analyzes movie metadata — including plot summaries, genres, keywords, cast, and directors — from the TMDB dataset. Uses text preprocessing, tokenization, CountVectorizer feature extraction, and high-dimensional cosine distance matrices to compute real-time personalized recommendations.',
    metric: 'Cosine Similarity',
    metricLabel: 'High-Precision Vector Match Engine',
    tech: ['Python', 'Scikit-learn', 'NLP', 'TMDB Dataset', 'CountVectorizer'],
    highlights: [
      'Processed & normalized multi-column text metadata across 5,000+ TMDB movie records',
      'Constructed dense bag-of-words vector space using Scikit-Learn CountVectorizer',
      'Optimized cosine similarity matrix computations for instant sub-millisecond query responses'
    ],
    github: 'https://github.com/Diproxzz/Movie-Recommendation-System'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
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
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>AI Portfolio</span>
          </div>
          <h2 className="text-fluid-h2 font-heading font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text-cyan">AI/ML Projects</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Independently designed and trained Machine Learning models and intelligent applications demonstrating real-world problem solving.
          </p>
        </motion.div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative glass-card glass-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-slate-800"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${project.color} p-0.5 shadow-lg`}>
                      <div className="w-full h-full bg-[#080c14] rounded-[10px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 shadow-sm">
                      {project.metric}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-heading font-extrabold text-xl text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400/90 mt-1">
                    {project.subtitle}
                  </p>

                  {/* Short Description */}
                  <p className="mt-3 text-slate-300 text-sm leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Card Action Footer */}
                  <div className="flex items-center justify-between gap-2 pt-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 min-h-[44px]"
                    >
                      <span>Deep Dive Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700 min-h-[44px] min-w-[44px] flex items-center justify-center"
                      aria-label={`View ${project.title} repository on GitHub`}
                    >
                      <Github className="w-4 h-4 text-cyan-400" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Project Modal Preview */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}

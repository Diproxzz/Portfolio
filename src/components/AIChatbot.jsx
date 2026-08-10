import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles, RefreshCw, ChevronDown, ExternalLink } from 'lucide-react';

const DIPRO_KNOWLEDGE = {
  name: "Dipro Chowdhury",
  age: 23,
  location: "Kolkata, West Bengal, India",
  role: "Quality Engineer transitioning to AI/ML & Generative AI Engineer",
  company: "LTIMindtree (LTM)",
  college: "Future Institute of Engineering & Management (FIEM)",
  degree: "B.Tech in Computer Science & Engineering (2021–2025)",
  cgpa: "8.79",
  school: {
    hs: "90.67% (CISCE)",
    secondary: "88.60% (CISCE)"
  },
  contact: {
    email: "diprochowdhury123@gmail.com",
    phone: "+91 6290090297",
    linkedin: "https://linkedin.com/in/dipro-chowdhury10",
    github: "https://github.com/Diproxzz"
  },
  aiTools: [
    "Google Antigravity IDE (Agentic AI Applications)",
    "Cursor AI Code Editor",
    "Microsoft Copilot Studio (AI Chatbots & Workflows)",
    "Synthesia (AI Avatar Video Generation)",
    "Prompt Engineering (Vanderbilt Certified)"
  ],
  skills: {
    languages: ["Python", "Java", "C", "HTML", "CSS", "SQL"],
    aiml: ["LSTM RNN", "NLP", "Deep Learning", "Data Preprocessing", "Recommendation Systems", "Feature Engineering", "Cosine Similarity"],
    testing: ["Selenium WebDriver", "Cucumber BDD", "TestNG", "Maven", "Automation Testing"],
    analytics: ["Tableau", "Data Cleaning", "Exploratory Data Analysis"]
  },
  projects: [
    {
      name: "Malicious URL Detector",
      tech: "Python, PyTorch/TF, LSTM RNN, Deep Learning",
      metric: "99% Detection Accuracy",
      desc: "LSTM Recurrent Neural Network classifying phishing, malware, and defacement links in real-time.",
      link: "https://github.com/Diproxzz/URL-checker"
    },
    {
      name: "EchoGenius AI Voice Assistant",
      tech: "Python, NLP, Speech Recognition",
      metric: "98% Command Recognition",
      desc: "Modular voice assistant executing low-latency system commands and NLP intent parsing.",
      link: "https://github.com/Diproxzz/EchoGenius"
    },
    {
      name: "Movie Recommendation System",
      tech: "Python, Scikit-learn, TMDB, CountVectorizer, Cosine Similarity",
      metric: "Sub-millisecond Vector Matches",
      desc: "Content-based filtering analyzing TMDB metadata to generate personalized film recommendations.",
      link: "https://github.com/Diproxzz/Movie-Recommendation-System"
    }
  ],
  certifications: [
    "Google AI Professional Certificate (7 Courses)",
    "Google Data Analytics Professional Certificate (9 Courses)",
    "Prompt Engineering for ChatGPT (Vanderbilt University CS Dept.)",
    "AI & ML Industrial Internship (Ardent Computech Pvt. Ltd. - 3 Verified Certificates)",
    "Responsive Web Design (freeCodeCamp - 300 Hours Verified)",
    "Smart India Hackathon (SIH 2023) Participant (FIEM)"
  ]
};

const SUGGESTED_QUESTIONS = [
  "What is Dipro's background?",
  "Tell me about his AI/ML projects",
  "What certifications does he have?",
  "What AI tools & IDEs does he use?",
  "How can I contact Dipro?"
];

function generateBotResponse(userInput) {
  const query = userInput.toLowerCase().trim();

  // Age query (only if explicitly asked)
  if (query.includes('age') || query.includes('how old') || query.includes('years old')) {
    return `Dipro Chowdhury is **23 years old**, based in Kolkata, India. He works as a Quality Engineer at LTIMindtree (LTM) while building advanced AI/ML applications!`;
  }

  // Background / Who is Dipro / Summary
  if (query.includes('who is') || query.includes('background') || query.includes('about dipro') || query.includes('tell me about') || query.includes('intro') || query.includes('summary')) {
    return `**Dipro Chowdhury** is a Software Engineer & Quality Engineer at **LTIMindtree (LTM)** in Kolkata, India.\n\nHe holds a **B.Tech in Computer Science & Engineering (8.79 CGPA)** from Future Institute of Engineering & Management.\n\nHe specializes in **AI/ML**, **Generative AI**, and **Automation Testing**. He works with tools like **Google Antigravity IDE**, **Cursor**, **Microsoft Copilot Studio**, **Synthesia**, **Python**, **LSTM RNNs**, and **Selenium**!`;
  }

  // Education / College / Marks / CGPA
  if (query.includes('education') || query.includes('college') || query.includes('degree') || query.includes('cgpa') || query.includes('school') || query.includes('fiem') || query.includes('marks') || query.includes('university')) {
    return `🎓 **Education Details:**\n\n• **B.Tech in CSE:** Future Institute of Engineering & Management (FIEM) — **8.79 CGPA** (2021–2025)\n• **Higher Secondary (12th):** 90.67% (CISCE)\n• **Secondary (10th):** 88.60% (CISCE)`;
  }

  // Work experience / LTM / LTIMindtree / Job / Current Role
  if (query.includes('experience') || query.includes('job') || query.includes('work') || query.includes('company') || query.includes('ltm') || query.includes('ltimindtree') || query.includes('role') || query.includes('testing')) {
    return `💼 **Work Experience at LTIMindtree (LTM):**\n\n• **Role:** Quality Engineer (Sep 2025 – Present)\n• **Automation Testing:** Completed 2.5-month intensive training in Java, Selenium, Cucumber BDD, TestNG, and Maven, contributing to platforms like **TATA 1mg** and **Alfred Health**.\n• **Generative AI Work:** Built and deployed AI chatbots using **Microsoft Copilot Studio** and created AI video content with **Synthesia** avatar technology.`;
  }

  // Projects / URL Detector / EchoGenius / Movie
  if (query.includes('project') || query.includes('url') || query.includes('echogenius') || query.includes('movie') || query.includes('recommendation') || query.includes('voice') || query.includes('detector') || query.includes('github')) {
    return `🚀 **Key AI/ML Projects:**\n\n1. **Malicious URL Detector (99% Accuracy)**\n   • Deep Learning LSTM RNN classifying phishing & malware links.\n   • Repository: [github.com/Diproxzz/URL-checker](https://github.com/Diproxzz/URL-checker)\n\n2. **EchoGenius AI Voice Assistant (98% Recognition)**\n   • Modular voice assistant with NLP intent classification.\n   • Repository: [github.com/Diproxzz/EchoGenius](https://github.com/Diproxzz/EchoGenius)\n\n3. **Movie Recommendation System**\n   • Content-based TMDB metadata filtering with CountVectorizer & Cosine Similarity.\n   • Repository: [github.com/Diproxzz/Movie-Recommendation-System](https://github.com/Diproxzz/Movie-Recommendation-System)`;
  }

  // Certifications / Courses / Google / Vanderbilt / Ardent
  if (query.includes('certif') || query.includes('course') || query.includes('google') || query.includes('vanderbilt') || query.includes('ardent') || query.includes('hackathon') || query.includes('freecodecamp')) {
    return `📜 **Verified Certifications & Achievements:**\n\n• **Google AI Professional Certificate:** 7 Specialization Courses\n• **Google Data Analytics Professional Certificate:** 9 Specialization Courses\n• **Prompt Engineering for ChatGPT:** Vanderbilt University CS Dept.\n• **AI & ML Industrial Internship:** Ardent Computech (3 Verified Certificates)\n• **Responsive Web Design:** freeCodeCamp (300 Hours Verified)\n• **Smart India Hackathon (SIH 2023):** FIEM Internal Participant`;
  }

  // Skills / Programming / Python / Java / Tools / Antigravity / Cursor
  if (query.includes('skill') || query.includes('language') || query.includes('tool') || query.includes('python') || query.includes('java') || query.includes('antigravity') || query.includes('cursor') || query.includes('copilot') || query.includes('synthesia') || query.includes('ide')) {
    return `🛠️ **Technical Skills & AI Tools:**\n\n• **Programming:** Python, Java, C, HTML, CSS, SQL\n• **AI/ML:** LSTM RNN, NLP, Deep Learning, Feature Engineering, Cosine Similarity, Scikit-Learn\n• **AI Tools & IDEs:** Google Antigravity IDE, Cursor AI Code Editor, Microsoft Copilot Studio, Synthesia\n• **Testing & Automation:** Selenium, Cucumber BDD, TestNG, Maven`;
  }

  // Contact / Email / Phone / Hire / Reach / LinkedIn
  if (query.includes('contact') || query.includes('email') || query.includes('phone') || query.includes('call') || query.includes('reach') || query.includes('linkedin') || query.includes('hire') || query.includes('message')) {
    return `📬 **Contact Information:**\n\n• **Email:** diprochowdhury123@gmail.com\n• **Phone:** +91 6290090297\n• **Location:** Kolkata, India\n• **LinkedIn:** [linkedin.com/in/dipro-chowdhury10](https://linkedin.com/in/dipro-chowdhury10)\n• **GitHub:** [github.com/Diproxzz](https://github.com/Diproxzz)`;
  }

  // Generic fallback greeting or helper response
  return `I am **Leo**, Dipro's AI Assistant! I can help answer questions about Dipro Chowdhury's:\n\n• **Background & Experience at LTIMindtree**\n• **Education & Academic Record (8.79 CGPA)**\n• **AI/ML Projects (Malicious URL Detector, EchoGenius, Movie Engine)**\n• **Google & Vanderbilt Certifications**\n• **Skills & AI IDEs (Antigravity, Cursor, Copilot Studio)**\n• **Contact Details & Links**`;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      text: `Hi there! 👋 I'm **Leo**, Dipro's AI Assistant. Ask me anything about Dipro Chowdhury, his AI/ML projects, experience at LTIMindtree, or certifications!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend) => {
    const messageText = textToSend || input;
    if (!messageText.trim()) return;

    const userMsg = {
      id: Date.now().toString(),
      sender: 'user',
      text: messageText.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Simulate AI thinking and typing response
    setTimeout(() => {
      const botResponseText = generateBotResponse(messageText);
      const botMsg = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 550);
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'bot',
        text: `Chat history cleared! I'm Leo, Dipro's AI Assistant. Feel free to ask any question about Dipro Chowdhury.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  // Helper to render bold markdown and clickable links safely
  const renderFormattedText = (text) => {
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      // Parse markdown links [Label](Url)
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      let lineContent = [];
      let lastIndex = 0;
      let match;

      while ((match = linkRegex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          lineContent.push(line.substring(lastIndex, match.index));
        }
        lineContent.push(
          <a
            key={match.index}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 underline hover:text-cyan-200 font-semibold inline-flex items-center gap-1"
          >
            {match[1]}
            <ExternalLink className="w-3 h-3 inline" />
          </a>
        );
        lastIndex = match.index + match[0].length;
      }
      if (lastIndex < line.length) {
        lineContent.push(line.substring(lastIndex));
      }

      // Render bold **text**
      const lineStr = lineContent.length > 0 ? lineContent : [line];
      const parsedElements = lineStr.map((item, itemIdx) => {
        if (typeof item === 'string') {
          const parts = item.split(/\*\*(.*?)\*\*/g);
          return parts.map((part, pIdx) =>
            pIdx % 2 === 1 ? <strong key={pIdx} className="text-white font-bold">{part}</strong> : part
          );
        }
        return item;
      });

      return (
        <React.Fragment key={idx}>
          {parsedElements}
          {idx < lines.length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  return (
    <>
      {/* Floating Widget Toggle Button */}
      <div className="fixed bottom-5 right-5 z-40">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative group p-3.5 sm:p-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-2xl shadow-cyan-500/40 border border-cyan-400/50 flex items-center gap-2.5 min-h-[52px] min-w-[52px]"
          aria-label="Toggle Leo AI Chatbot"
        >
          <span className="relative flex items-center justify-center">
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Bot className="w-6 h-6 animate-pulse" />
            )}
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-400 border-2 border-[#080c14] animate-ping" />
          </span>

          {!isOpen && (
            <span className="hidden sm:inline-block font-heading font-bold text-xs tracking-wide pr-1">
              Ask Leo AI
            </span>
          )}
        </motion.button>
      </div>

      {/* Floating Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] h-[540px] max-h-[80vh] bg-[#0f172a]/95 backdrop-blur-xl border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Chatbot Header */}
            <div className="px-4 py-3 bg-[#080c14]/90 border-b border-slate-800 flex items-center justify-between sticky top-0 z-10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 shadow-md">
                  <div className="w-full h-full bg-[#080c14] rounded-[10px] flex items-center justify-center">
                    <Bot className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-white flex items-center gap-1.5">
                    <span>Leo</span>
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  </h3>
                  <p className="text-[11px] font-mono text-cyan-400/90 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online • Dipro's AI Assistant
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleClearHistory}
                  title="Clear chat history"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 font-sans text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-4 h-4 text-cyan-400" />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] p-3 rounded-2xl leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-medium rounded-tr-xs shadow-md'
                        : 'bg-[#080c14]/90 border border-slate-800 text-slate-200 rounded-tl-xs shadow-md'
                    }`}
                  >
                    <div>{renderFormattedText(msg.text)}</div>
                    <span
                      className={`block text-[9px] font-mono mt-1 text-right ${
                        msg.sender === 'user' ? 'text-slate-900/80' : 'text-slate-500'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-4 h-4 text-slate-300" />
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-2.5 justify-start">
                  <div className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="bg-[#080c14]/90 border border-slate-800 p-3 rounded-2xl rounded-tl-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Action Suggestion Pills */}
            <div className="px-3 py-2 bg-[#080c14]/60 border-t border-slate-800/80 flex flex-wrap gap-1.5 overflow-x-auto max-h-24">
              {SUGGESTED_QUESTIONS.map((question, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(question)}
                  className="px-2.5 py-1 rounded-full bg-slate-800/80 hover:bg-cyan-950 text-[11px] font-mono text-slate-300 hover:text-cyan-300 border border-slate-700/80 hover:border-cyan-500/50 transition-all shrink-0 min-h-[28px]"
                >
                  {question}
                </button>
              ))}
            </div>

            {/* Message Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-[#080c14] border-t border-slate-800 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Leo about Dipro's skills, projects..."
                className="flex-1 bg-slate-900/90 border border-slate-700/80 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors min-h-[40px]"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold hover:brightness-110 disabled:opacity-40 disabled:hover:brightness-100 transition-all min-h-[40px] min-w-[40px] flex items-center justify-center"
                aria-label="Send Message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

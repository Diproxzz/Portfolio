import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Sparkles, CheckCircle2, MessageSquare, Bot } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'AI/ML Engineering Opportunity',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Invalid email address';
    }
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      // Dispatch email directly to diprochowdhury123@gmail.com via FormSubmit endpoint
      const response = await fetch('https://formsubmit.co/ajax/diprochowdhury123@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Portfolio Inquiry: ${formData.subject} from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: 'AI/ML Engineering Opportunity', message: '' });
        setTimeout(() => setSubmitted(false), 7000);
      } else {
        // Fallback to mailto client if fetch service is blocked or offline
        window.location.href = `mailto:diprochowdhury123@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
        setSubmitted(true);
      }
    } catch (err) {
      // Network fallback to mailto
      window.location.href = `mailto:diprochowdhury123@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
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
            <Bot className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-fluid-h2 font-heading font-extrabold text-white tracking-tight">
            Let's Build Something <span className="gradient-text-cyan">With AI</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Whether you have an opportunity for an AI/ML Engineer, want to discuss Generative AI solutions, or collaborate on intelligent software projects — I'd love to connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
              <h3 className="font-heading font-bold text-xl text-white">Contact Information</h3>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block uppercase">Location</span>
                  <span className="text-slate-100 font-semibold text-base mt-0.5 block">Kolkata, India</span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block uppercase">Phone</span>
                  <a
                    href="tel:+916290090297"
                    className="text-slate-100 font-semibold text-base hover:text-cyan-400 transition-colors mt-0.5 block"
                  >
                    +91 6290090297
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block uppercase">Email</span>
                  <a
                    href="mailto:diprochowdhury123@gmail.com"
                    className="text-slate-100 font-semibold text-base hover:text-cyan-400 transition-colors mt-0.5 block break-all"
                  >
                    diprochowdhury123@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Connect */}
              <div className="pt-6 border-t border-slate-800">
                <span className="text-xs font-mono text-slate-400 block uppercase mb-3">Connect Online</span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://linkedin.com/in/dipro-chowdhury10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-800/80 hover:bg-cyan-500/20 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 transition-all border border-slate-700 min-h-[44px] min-w-[44px] flex items-center justify-center"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>

                  <a
                    href="https://github.com/Diproxzz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-800/80 hover:bg-cyan-500/20 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 transition-all border border-slate-700 min-h-[44px] min-w-[44px] flex items-center justify-center"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>

                  <a
                    href="mailto:diprochowdhury123@gmail.com"
                    className="p-3 rounded-xl bg-slate-800/80 hover:bg-cyan-500/20 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 transition-all border border-slate-700 min-h-[44px] min-w-[44px] flex items-center justify-center"
                    aria-label="Send Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800">
              <h3 className="font-heading font-bold text-xl text-white mb-6">Send Me a Message</h3>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Thank you! Your message has been sent to diprochowdhury123@gmail.com. I will reply to you shortly!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className={`w-full px-4 py-3 rounded-xl bg-[#080c14] border text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-sm ${
                      errors.name ? 'border-red-500' : 'border-slate-800'
                    }`}
                  />
                  {errors.name && <span className="text-xs text-red-400 mt-1 block">{errors.name}</span>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-[#080c14] border text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-sm ${
                      errors.email ? 'border-red-500' : 'border-slate-800'
                    }`}
                  />
                  {errors.email && <span className="text-xs text-red-400 mt-1 block">{errors.email}</span>}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#080c14] border border-slate-800 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-sm"
                  >
                    <option value="AI/ML Engineering Opportunity">AI/ML Engineering Opportunity</option>
                    <option value="Generative AI Consulting">Generative AI / Copilot Studio</option>
                    <option value="General Technical Inquiry">General Technical Inquiry / Collaboration</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Dipro, I would like to connect regarding an AI/ML engineering role..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#080c14] border text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-sm ${
                      errors.message ? 'border-red-500' : 'border-slate-800'
                    }`}
                  />
                  {errors.message && <span className="text-xs text-red-400 mt-1 block">{errors.message}</span>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:brightness-110 transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 text-base min-h-[44px]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border-2 border-slate-950 border-t-transparent animate-spin" />
                      Sending Message to diprochowdhury123@gmail.com...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </span>
                  )}
                </button>

              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { ChevronRight, Mail, Linkedin, Github, Cpu, Zap, MessageSquare } from "lucide-react";
import { EXPERIENCE, AI_PROJECTS, SKILLS } from "./constants";

export default function App() {
  const { scrollYProgress: globalScroll } = useScroll();
  const scaleX = useSpring(globalScroll, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: timelineScroll } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const cursorY = useTransform(timelineScroll, [0, 1], ["0%", "100%"]);
  const cursorOpacity = useTransform(timelineScroll, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  return (
    <div className="min-h-screen selection:bg-gold selection:text-app-bg">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-app-bg/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono text-sm font-medium tracking-tight text-white">SS // TECHNICAL LEAD</span>
          <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-zinc-500">
            <a href="#experience" className="hover:text-gold transition-colors">Experience</a>
            <a href="#ai-projects" className="hover:text-gold transition-colors">AI Projects</a>
            <a href="#about" className="hover:text-gold transition-colors">About</a>
            <a href="#contact" className="px-4 py-2 bg-white text-app-bg font-bold tracking-widest hover:bg-gold transition-all">Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[75vh] flex items-center px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-sm font-sans font-bold text-gold uppercase tracking-[0.3em] mb-2">TPM | Hardware-Software Synergy</h2>
                <h1 className="text-6xl md:text-7xl font-serif font-bold tracking-tight leading-[0.9] text-white">
                  Technical <br /> Project Lead <br /><span className="text-gold font-light italic serif lowercase">& AI Enthusiast.</span>
                </h1>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-app-text/70 max-w-xl font-light leading-relaxed"
              >
                Translating complexity into clarity. Over a decade of experience spanning technical leadership, customer enabling, enterprise & client security, hardware-software validation and building efficient systems.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-6"
              >
                <a href="#experience" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold hover:text-white transition-all">
                  Experience Timeline <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
            
            <div className="hidden lg:block lg:col-span-5 relative">
              <div className="aspect-[4/5] h-[400px] card-bg relative overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 space-y-4">
                  <div className="space-y-2">
                    <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-gold">The Grounding Philosophy</p>
                    <p className="text-xl italic font-serif text-white/90 leading-tight">"Live life as though everything is rigged in your favor."</p>
                  </div>
                  <div className="h-px bg-white/10 w-full" />
                  <div className="flex justify-between items-end">
                    <span className="text-3xl font-serif italic text-gold">2025.</span>
                    <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-white/40 text-right">Driven by logic,<br />Guided by art.</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 border border-gold/20 rounded-full flex items-center justify-center animate-spin-slow">
                 <span className="text-[8px] font-mono uppercase tracking-widest text-gold/40 rotate-90">Precision</span>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats / Highlights */}
        <section className="card-bg py-12 text-white overflow-hidden border-x-0">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-2 border-l border-gold pl-6">
                <h3 className="text-3xl font-serif italic text-gold">17+</h3>
                <p className="text-white opacity-40 text-[9px] font-sans font-bold uppercase tracking-[0.3em]">Engineering Years</p>
              </div>
              <div className="space-y-2 border-l border-white/10 pl-6">
                <h3 className="text-3xl font-serif italic text-gold">10+</h3>
                <p className="text-white opacity-40 text-[9px] font-sans font-bold uppercase tracking-[0.3em]">CPU SKU Enabled</p>
              </div>
              <div className="space-y-2 border-l border-white/10 pl-6">
                <h3 className="text-3xl font-serif italic text-gold">50+</h3>
                <p className="text-white opacity-40 text-[9px] font-sans font-bold uppercase tracking-[0.3em]">Workshops & Demos</p>
              </div>
              <div className="space-y-2 border-l border-white/10 pl-6">
                <h3 className="text-3xl font-serif italic text-gold">30%</h3>
                <p className="text-white opacity-40 text-[9px] font-sans font-bold uppercase tracking-[0.3em]">Customer Escalation Reduction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
              <div className="space-y-2">
                <h3 className="text-xs font-sans font-bold text-gold uppercase tracking-[0.3em]">Professional Backbone</h3>
                <h2 className="text-4xl font-serif font-bold tracking-tight text-white">Experience Timeline.</h2>
              </div>
              <div className="max-w-md space-y-4">
                <p className="text-white/60 font-light leading-relaxed serif italic text-lg">
                  My career has been built on three pillars: Engineering Excellence, Customer Success and results-driven Project Management.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <p className="text-[10px] font-sans font-bold uppercase text-gold tracking-widest">Compute</p>
                    <p className="text-xs text-white/80">Xeon, Core, Ultra</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-sans font-bold uppercase text-gold tracking-widest">Security</p>
                    <p className="text-xs text-white/80">ISRD, SGX, TXT</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-sans font-bold uppercase text-gold tracking-widest">Storage</p>
                    <p className="text-xs text-white/80">SATA & PCIe NAND</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative" ref={timelineRef}>
              {/* Timeline Track */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white/5 lg:left-0" />
              
              {/* Animated Progress Line */}
              <motion.div 
                className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-gold via-gold/50 to-transparent z-10 origin-top"
                style={{ scaleY: timelineScroll, height: '100%' }}
              />

              {/* Moving Cursor */}
              <motion.div
                className="absolute left-[-6px] w-3 h-3 bg-gold rounded-full z-20"
                style={{ 
                  top: cursorY,
                  opacity: cursorOpacity,
                  boxShadow: '0 0 20px #D4AF37',
                }}
              />

              <div className="space-y-12 relative z-10">
                {EXPERIENCE.map((exp, index) => (
                  <motion.div 
                    key={index}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-6 border-l-2 border-transparent hover:border-gold/30 transition-colors pl-8 py-2 group"
                  >
                    <div className="lg:col-span-3">
                      <div className="absolute left-[-5px] w-[10px] h-[10px] rounded-full bg-white/10 group-hover:bg-gold transition-colors" />
                      <span className="text-xs font-sans font-bold uppercase text-gold tracking-widest leading-loose">{exp.period}</span>
                      <h4 className="mt-1 font-bold text-lg text-white leading-tight">{exp.title}</h4>
                      <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-white/30">{exp.company}</p>
                    </div>
                    <div className="lg:col-span-9 space-y-4">
                      <p className="text-base text-white/70 font-light leading-relaxed italic serif">
                        {exp.description}
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                        {exp.highlights.map((item, i) => (
                          <li key={i} className="flex gap-4 items-start group/item">
                            <div className="w-1 h-1 rounded-full bg-gold/40 mt-2 group-hover/item:bg-gold transition-colors" />
                            <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-white/40 group-hover/item:text-white/80 transition-colors leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Strengths & Philosophy */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4 card-bg p-6 hover:bg-gold/5 transition-all">
               <div className="w-6 h-6 rounded-full border border-gold/30 flex items-center justify-center text-[10px] font-sans font-bold text-gold">01</div>
               <h3 className="text-lg font-bold tracking-tight text-white">Complexity to Clarity.</h3>
               <p className="text-white/50 text-xs leading-relaxed font-light">
                 Specializing in translating high-level architectural requirements into actionable engineering roadmaps.
               </p>
            </div>
            <div className="space-y-4 card-bg p-6 hover:bg-gold/5 transition-all">
               <div className="w-6 h-6 rounded-full border border-gold/30 flex items-center justify-center text-[10px] font-sans font-bold text-gold">02</div>
               <h3 className="text-lg font-bold tracking-tight text-white">Building Trust.</h3>
               <p className="text-white/50 text-xs leading-relaxed font-light">
                 Acting as a trusted advisor to global engineering teams, preventing escalations through proactive task force management.
               </p>
            </div>
            <div className="space-y-4 card-bg p-6 hover:bg-gold/5 transition-all">
               <div className="w-6 h-6 rounded-full border border-gold/30 flex items-center justify-center text-[10px] font-sans font-bold text-gold">03</div>
               <h3 className="text-lg font-bold tracking-tight text-white">Scalable Outcomes.</h3>
               <p className="text-white/50 text-xs leading-relaxed font-light">
                 Standardizing processes and automating workflows to reduce debug cycles and drive global product enablement.
               </p>
            </div>
          </div>
        </section>

        {/* AI Focus & Projects */}
        <section id="ai-projects" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h3 className="text-xs font-sans font-bold text-gold uppercase tracking-[0.3em]">Innovation Focus</h3>
              <h2 className="text-4xl font-serif font-bold tracking-tight text-white">AI Driven Systems.</h2>
              <div className="flex flex-wrap justify-center gap-2">
                {SKILLS.ai.map((s, i) => (
                  <span key={i} className="px-2 py-0.5 border border-white/10 text-[8px] font-sans font-bold text-white/40 uppercase tracking-widest rounded-full hover:border-gold/30 hover:text-gold transition-all cursor-default">{s}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {AI_PROJECTS.map((project, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="card-bg p-8 flex flex-col justify-between h-full group transition-all"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-app-bg transition-colors">
                      {index === 0 ? <Zap className="w-5 h-5" /> : index === 1 ? <Cpu className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
                    </div>
                    <div className="space-y-1">
                       <h4 className="text-lg font-bold tracking-tight text-white">{project.title}</h4>
                       <p className="text-[9px] font-sans font-bold text-gold uppercase tracking-widest">{project.tech}</p>
                    </div>
                    <p className="text-white/50 text-xs leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-6 flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[8px] font-bold uppercase tracking-widest text-white/20 border-b border-white/5 pb-0.5 group-hover:text-gold/60 transition-colors uppercase">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About: The Journey */}
        <section id="about" className="py-20 px-6 overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-4 text-center">
              <h3 className="text-xs font-sans font-bold text-gold uppercase tracking-[0.3em] flex items-center justify-center gap-3">
                 About Me
              </h3>
              <h2 className="text-4xl font-serif font-bold tracking-tight text-white mb-6">Beyond the code.</h2>
            </div>

            <div className="space-y-6 text-white/60 font-light leading-relaxed text-lg serif italic text-center max-w-3xl mx-auto">
              <p>
                A dreamer, a lover, a wife, and a mother. My journey to the United States was a leap from dream to decision—a bittersweet transition filled with new faces, deeper relations, and profound learnings. 
              </p>
              <p>
                Braving into the unknown has shaped me both professionally and personally. I've found a "home away from home" by embracing growth and transformation at every step.
              </p>
              <p>
                My perspective is shaped by travel, art, and the quiet reflection of journaling. Reading isn't just a hobby; it's the lens through which I see complexity and find clarity.
              </p>
            </div>

            <div className="pt-8 border-t border-white/5 max-w-xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-[7px] font-sans font-bold uppercase text-gold tracking-widest mb-0.5">Current Focus</span>
                  <span className="font-bold text-white text-xs">AI, TPM, Security</span>
                </div>
                <div className="hidden md:block w-px h-8 bg-white/5" />
                <div className="flex flex-col items-center">
                  <span className="text-[7px] font-sans font-bold uppercase text-gold tracking-widest mb-0.5">Interests</span>
                  <span className="font-bold text-white text-xs">Travel, Art, Journaling</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-24 flex items-center justify-center px-6 border-y border-white/5">
          <div className="max-w-3xl text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-serif italic font-light text-white leading-tight">
              "Live life as though everything is <br className="hidden md:block" /> rigged in your <span className="text-gold">favor.</span>"
            </h2>
            <div className="w-10 h-px bg-gold/40 mx-auto" />
            <p className="text-[9px] font-sans font-bold uppercase tracking-[0.4em] text-gold/60">The Grounding Philosophy</p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-tight leading-[0.85] text-white">
                Let's build & <br /> 
                <span className="italic text-gold font-light lowercase serif">create impact together.</span>
              </h2>
              <p className="text-white/40 font-light max-w-xl mx-auto italic serif text-lg">
                Connect, Converse and Share Ideas.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-12 md:gap-24">
              <a href="mailto:supreeti.sehra@gmail.com" className="group flex flex-col gap-1 text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-white/40 hover:text-gold transition-colors">
                <span className="text-[8px] text-gold/40">Collaborate VIA</span> <span className="flex items-center gap-2 justify-center"><Mail className="w-3 h-3" /> Email</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="group flex flex-col gap-1 text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-white/40 hover:text-gold transition-colors">
                <span className="text-[8px] text-gold/40">Connect ON</span> <span className="flex items-center gap-2 justify-center"><Linkedin className="w-3 h-3" /> LinkedIn</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="group flex flex-col gap-1 text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-white/40 hover:text-gold transition-colors">
                <span className="text-[8px] text-gold/40">Explore ON</span> <span className="flex items-center gap-2 justify-center"><Github className="w-3 h-3" /> GitHub</span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[8px] font-sans font-bold uppercase tracking-[0.4em] text-white/20">© 2026 Supreeti Sehra. Driven by logic, guided by art.</p>
            <div className="flex gap-8">
               <span className="text-[8px] font-sans font-bold uppercase tracking-[0.2em] text-white/40">Portfolio.</span>
               <span className="text-[8px] font-sans font-bold uppercase tracking-[0.2em] text-white/40 italic serif">V. 1.1</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

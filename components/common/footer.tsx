"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { gsap } from 'gsap';
import { Github, Twitter, Linkedin, ArrowUpRight, Send, CheckCircle2, ChevronUp } from 'lucide-react';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [year, setYear] = useState<number | string>(""); // Fix for hydration error
  const buttonRef = useRef(null);
  const scrollBtnRef = useRef(null);

  const { scrollYProgress } = useScroll();

  // Set the year on mount to avoid Next.js hydration mismatch
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    gsap.to(buttonRef.current, { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 });
    setTimeout(() => setSubscribed(true), 600);
  };

  const magneticEffect = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    gsap.to(currentTarget, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: "power2.out" });
  };

  const resetMagnetic = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
  };

  return (
    <footer className="relative border-t bg-background pt-20 pb-10 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Scroll to Top - Magnetic & Circular Progress */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        className="fixed bottom-10 right-10 z-50 hidden md:block"
      >
        <div 
          ref={scrollBtnRef}
          onMouseMove={magneticEffect}
          onMouseLeave={resetMagnetic}
          onClick={scrollToTop}
          className="relative w-14 h-14 flex items-center justify-center bg-foreground text-background rounded-full cursor-pointer shadow-2xl group"
        >
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <motion.circle
              cx="28" cy="28" r="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
              style={{ pathLength: scrollYProgress, opacity: 0.3 }}
            />
          </svg>
          <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-3"
          >
            <h2 className="text-2xl font-bold tracking-tighter mb-4">Blug<span className="text-primary">.</span></h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Elevating digital standards through innovative design and code.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            {[
              { title: "Product", links: ["Features", "Pricing", "Updates"] },
              { title: "Company", links: ["About", "Careers", "Contact"] },
            ].map((section, idx) => (
              <motion.div 
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <h4 className="font-semibold mb-4 text-xs uppercase tracking-[0.2em] text-foreground/50">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map(link => (
                    <li key={link}>
                      <a href="#" className="group text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 text-sm">
                        {link} 
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Section with Shimmer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-5"
          >
            <h4 className="font-semibold mb-4 text-xs uppercase tracking-[0.2em] text-foreground/50">Stay in the loop</h4>
            <div className="relative">
              {subscribed ? (
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }} 
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex items-center gap-2 text-primary font-medium p-4 bg-primary/5 rounded-xl border border-primary/20"
                >
                  <CheckCircle2 className="w-5 h-5" /> Subscribed successfully!
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 group">
                  <div className="relative flex-grow overflow-hidden rounded-xl border border-border bg-muted/20">
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
                    <input 
                      type="email" 
                      required 
                      placeholder="Enter your email" 
                      className="w-full bg-transparent px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                    />
                  </div>
                  <button 
                    ref={buttonRef}
                    type="submit"
                    className="bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all"
                  >
                    Join <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-[12px] font-mono uppercase tracking-tight">
            Blug Inc © {year}. All rights reserved.
          </p>

          <div className="flex gap-4">
            {[Github, Twitter, Linkedin].map((Icon, i) => (
              <div 
                key={i}
                onMouseMove={magneticEffect}
                onMouseLeave={resetMagnetic}
                className="p-3 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors"
              >
                <Icon className="w-4 h-4" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </footer>
  );
}
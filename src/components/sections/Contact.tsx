'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Reveal from '@/components/ui/Reveal';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('e.hossamsabry@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Honeypot check
    const hp = form.elements.namedItem('contact_hp') as HTMLInputElement;
    if (hp && hp.value) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      return;
    }

    const name = form.elements.namedItem('name') as HTMLInputElement;
    const email = form.elements.namedItem('email') as HTMLInputElement;
    const message = form.elements.namedItem('message') as HTMLTextAreaElement;

    setIsSubmitting(true);
    setFormStatus('Sending your message, please wait...');
    setErrorStatus(false);

    try {
      await emailjs.send(
        'service_f6ehl85',
        'template_dks5llc',
        {
          from_name: name.value,
          from_email: email.value,
          message: message.value,
          to_name: 'Hossam Sabry',
        },
        '0o6S42Yn8J2Sleaw1'
      );
      
      setFormStatus('Message sent successfully! I will get back to you shortly.');
      setSuccess(true);
      form.reset();
      
      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    } catch {
      setErrorStatus(true);
      setFormStatus('Message sending failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-32 bg-[#050507] overflow-hidden border-t border-white/5" id="contact">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,rgba(124,110,249,0.08)_0%,transparent_60%)] blur-[120px]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <Reveal>
            <div className="flex flex-col h-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 w-max">
                <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-text-2 font-bold">Contact</span>
              </div>
              <h2 className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-tight mb-6 text-white leading-tight">
                Let&apos;s Build<br />Something.
              </h2>
              <p className="text-[1.1rem] text-text-2 mb-10 leading-relaxed font-medium max-w-md">
                Have a BIM automation challenge? Need custom Revit tooling for your team? I want to hear about it.
              </p>
              
              <div className="mb-10">
                <button
                  onClick={copyEmail}
                  className="group inline-flex items-center gap-3 px-6 py-3.5 bg-white/5 border border-white/10 rounded-xl text-[14px] font-semibold text-white hover:border-brand/40 hover:bg-brand/10 transition-all shadow-[0_0_20px_rgba(0,0,0,0.2)]"
                  title="Click to copy email"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand/20 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  {copied ? '✓ Copied to Clipboard!' : 'e.hossamsabry@gmail.com'}
                </button>
              </div>
              
              <div className="flex gap-4 mt-auto">
                <a href="https://www.linkedin.com/in/HossamSabryDev" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl border border-white/20 bg-white/10 flex items-center justify-center hover:bg-[#0A66C2]/10 hover:border-[#0A66C2] hover:shadow-[0_0_20px_rgba(10,102,194,0.4)] hover:-translate-y-1 transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" className="text-[#0A66C2] bg-white rounded-[2px]" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.348c.429-.645 1.196-1.565 2.905-1.565 2.122 0 3.714 1.383 3.714 4.357v5.506zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.955.77-1.715 1.958-1.715 1.187 0 1.927.76 1.94 1.715 0 .953-.753 1.715-1.983 1.715zm1.946 11.597H3.392V9.806h3.891v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
                </a>
                <a href="https://github.com/M2Dawn" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl border border-white/20 bg-white/10 flex items-center justify-center text-white/90 hover:bg-white hover:border-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-[#0A0A0C] border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                {/* Honeypot Field - Label is a fun Easter egg, but the actual input is hidden! */}
                <div aria-hidden="true" className="mb-2 text-text-3 text-xs uppercase tracking-widest font-mono">
                  <label htmlFor="contact_hp">Do not fill this out if you are human</label>
                  <input type="text" id="contact_hp" name="contact_hp" autoComplete="off" tabIndex={-1} className="absolute opacity-0 pointer-events-none w-0 h-0" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[13px] font-bold text-text-2 tracking-wide uppercase">Name</label>
                    <input type="text" id="name" name="name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-[14px] text-white focus:outline-none focus:border-brand/50 focus:bg-white/10 focus:ring-1 focus:ring-brand/50 transition-all shadow-inner" placeholder="Omar Hassan" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[13px] font-bold text-text-2 tracking-wide uppercase">Email</label>
                    <input type="email" id="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-[14px] text-white focus:outline-none focus:border-brand/50 focus:bg-white/10 focus:ring-1 focus:ring-brand/50 transition-all shadow-inner" placeholder="omar@company.com" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[13px] font-bold text-text-2 tracking-wide uppercase">Message</label>
                  <textarea id="message" name="message" required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-[14px] text-white focus:outline-none focus:border-brand/50 focus:bg-white/10 focus:ring-1 focus:ring-brand/50 transition-all shadow-inner resize-y min-h-[120px]" placeholder="Tell me about your automation needs..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting || success}
                  className={`relative overflow-hidden w-full py-4 rounded-xl font-bold text-white transition-all duration-300 mt-2 ${success ? 'bg-green-500 shadow-[0_0_20px_rgba(74,222,128,0.3)]' : errorStatus ? 'bg-red-500' : 'bg-brand hover:bg-brand-light shadow-[0_0_30px_rgba(124,110,249,0.3)] hover:shadow-[0_0_40px_rgba(124,110,249,0.5)] hover:-translate-y-1'}`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? 'Sending Transmission...' : success ? 'Transmission Received ✓' : errorStatus ? 'Transmission Failed - Try Again' : 'Send Message'}
                  </span>
                </button>

                {success && (
                  <div className="mt-2 px-4 py-3 bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg text-[13px] font-semibold text-center animate-in fade-in slide-in-from-bottom-2" aria-live="polite">
                    Message sent &mdash; I will get back to you shortly.
                  </div>
                )}
                
                <div className="sr-only" aria-live="assertive">{formStatus}</div>
              </form>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}


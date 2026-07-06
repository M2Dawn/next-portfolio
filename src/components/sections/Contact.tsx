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
    <section className="relative py-32 bg-[#000000] overflow-hidden border-t border-white/5" id="contact">
      {/* Background - Spotlight Mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(124,110,249,0.15) 0%, transparent 60%), linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 48px 48px, 48px 48px'
        }}
      ></div>

      <div className="max-w-[800px] mx-auto px-6 w-full relative z-10 flex flex-col items-center">
        
        <Reveal>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
              <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-text-2 font-bold">Initiate Protocol</span>
            </div>
            <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight mb-6 text-white leading-tight">
              Let&apos;s Build<br />Something.
            </h2>
            <p className="text-[1.1rem] text-text-2 mb-10 leading-relaxed font-medium max-w-[600px] mx-auto">
              Have a BIM automation challenge? Need custom Revit tooling for your team? I want to hear about it.
            </p>
            
            {/* Contact Methods Group */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center w-full">
              <button
                onClick={copyEmail}
                className="group relative flex items-center gap-3 px-6 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-[14px] font-semibold text-white hover:border-brand/40 hover:bg-brand/10 transition-all shadow-[0_0_20px_rgba(0,0,0,0.2)] w-full sm:w-auto"
                title="Click to copy email"
              >
                <div className="w-8 h-8 rounded-xl bg-brand/20 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <span className="min-w-[200px] text-center">{copied ? '✓ Copied to Clipboard!' : 'e.hossamsabry@gmail.com'}</span>
              </button>
              
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/HossamSabryDev" target="_blank" rel="noopener noreferrer" className="w-[60px] h-[60px] rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#0A66C2]/10 hover:border-[#0A66C2] hover:shadow-[0_0_20px_rgba(10,102,194,0.4)] hover:-translate-y-1 transition-all duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="text-white/80 hover:text-[#0A66C2] transition-colors" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.348c.429-.645 1.196-1.565 2.905-1.565 2.122 0 3.714 1.383 3.714 4.357v5.506zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.955.77-1.715 1.958-1.715 1.187 0 1.927.76 1.94 1.715 0 .953-.753 1.715-1.983 1.715zm1.946 11.597H3.392V9.806h3.891v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
                </a>
                <a href="https://github.com/M2Dawn" target="_blank" rel="noopener noreferrer" className="w-[60px] h-[60px] rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-white/80 hover:bg-white hover:border-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>

            <div className="mt-6">
              <a href="mailto:e.hossamsabry@gmail.com" className="inline-flex items-center gap-2 text-[13px] text-text-3 hover:text-brand-light transition-colors duration-300 font-medium">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 7h10v10M7 17 17 7"/></svg>
                Open in email client
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200} className="w-full">
          {/* Command Center Form UI */}
          <div className="w-full bg-[#050505] border border-white/10 rounded-3xl p-2 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            
            <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-brand/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className="bg-[#0A0A0A] rounded-[1.25rem] p-8 md:p-10 h-full w-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border border-white/[0.02]">
              
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                  </div>
                  <span className="text-[11px] font-mono text-text-3 tracking-widest uppercase">Direct_Message.exe</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-brand animate-[ping_3s_ease-in-out_infinite] opacity-50"></div>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10 text-left">
                {/* Honeypot Field */}
                <div aria-hidden="true" className="absolute opacity-0 pointer-events-none w-0 h-0">
                  <label htmlFor="contact_hp">Do not fill this out if you are human</label>
                  <input type="text" id="contact_hp" name="contact_hp" autoComplete="off" tabIndex={-1} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[12px] font-mono font-bold text-text-2 tracking-widest uppercase">Name</label>
                    <input type="text" id="name" name="name" required className="w-full bg-[#121212] border border-white/5 rounded-xl px-4 py-3.5 text-[14px] text-white focus:outline-none focus:border-brand/40 focus:bg-[#161616] transition-all shadow-inner font-mono placeholder:text-text-3" placeholder="John Doe" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[12px] font-mono font-bold text-text-2 tracking-widest uppercase">Email</label>
                    <input type="email" id="email" name="email" required className="w-full bg-[#121212] border border-white/5 rounded-xl px-4 py-3.5 text-[14px] text-white focus:outline-none focus:border-brand/40 focus:bg-[#161616] transition-all shadow-inner font-mono placeholder:text-text-3" placeholder="john@company.com" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[12px] font-mono font-bold text-text-2 tracking-widest uppercase">Message</label>
                  <textarea id="message" name="message" required rows={4} className="w-full bg-[#121212] border border-white/5 rounded-xl px-4 py-3.5 text-[14px] text-white focus:outline-none focus:border-brand/40 focus:bg-[#161616] transition-all shadow-inner resize-y min-h-[140px] font-mono placeholder:text-text-3" placeholder="> Enter transmission payload..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting || success}
                  className={`relative overflow-hidden w-full py-4 rounded-xl font-bold font-mono text-[14px] tracking-widest uppercase text-white transition-all duration-300 mt-4 border ${success ? 'bg-green-500/20 border-green-500/50 text-green-400' : errorStatus ? 'bg-red-500/20 border-red-500/50 text-red-400' : 'bg-brand/10 border-brand/50 text-brand-light hover:bg-brand hover:text-white hover:shadow-[0_0_30px_rgba(124,110,249,0.3)] hover:-translate-y-1'}`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? 'EXECUTING...' : success ? 'PAYLOAD_DELIVERED ✓' : errorStatus ? 'ERR_TRANSMISSION_FAILED' : 'EXECUTE_SEND'}
                  </span>
                </button>

                {success && (
                  <div className="mt-2 text-center text-green-400 text-[13px] font-mono animate-in fade-in slide-in-from-bottom-2" aria-live="polite">
                    {'>'} Connection closed successfully. Reply expected shortly.
                  </div>
                )}
                
                <div className="sr-only" aria-live="assertive">{formStatus}</div>
              </form>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}


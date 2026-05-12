import React from 'react';
import { Wallet, Users, Shield, ArrowRight, BarChart3, Database, Lock, Check, Activity } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, light = false }: { title: string, subtitle: string, light?: boolean }) => (
  <div className="text-center mb-20">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className={`text-sm font-black uppercase tracking-[0.5em] mb-4 ${light ? 'text-gold' : 'text-primary'}`}>
        {subtitle}
      </h2>
      <h3 className={`text-4xl md:text-6xl font-black tracking-tighter ${light ? 'text-white' : 'text-ebony dark:text-white'}`}>
        {title}
      </h3>
      <div className={`w-24 h-1 mx-auto mt-8 rounded-full ${light ? 'bg-gold' : 'bg-primary'}`}></div>
    </motion.div>
  </div>
);

export default function Platform() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-ebony overflow-x-hidden">
      
      {/* ── HERO SECTION ─────────────────────────── */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-32">
            <motion.h4 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary font-black uppercase tracking-[0.5em] text-[10px] mb-6"
            >
              Platform Overview
            </motion.h4>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-7xl font-black text-ebony dark:text-white mb-8 tracking-tighter"
            >
              Enterprise Digital Infrastructure
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 dark:text-slate-400 leading-relaxed text-xl font-medium"
            >
              A institutional-grade platform providing the branch with specialized tools for automated fee calculations, hierarchy management, and comprehensive reporting.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-center mb-40">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-10"
             >
                <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center">
                   <Database className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-4xl font-black text-ebony dark:text-white tracking-tighter leading-tight">Automated Member Intelligence</h2>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-lg font-medium">
                  Centralize your entire membership database. The platform automatically tracks member categories ranging from Salary-Based, Business, to Investors. Fee calculations adjust dynamically based on customized tax and pension deductor rules.
                </p>
                <ul className="space-y-6 pt-4">
                   {[
                     'Dynamic Hierarchy: Woredas, Clusters, and Institutions',
                     'Excel Integration: Seamless bulk data import/export',
                     'Amharic Localization: Full support for official reporting formats'
                   ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-6 group">
                         <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-colors">
                            <ArrowRight className="w-4 h-4 text-gold group-hover:text-ebony" />
                         </div>
                         <span className="text-ebony dark:text-slate-300 font-bold tracking-tight text-lg">{feature}</span>
                      </li>
                   ))}
                </ul>
             </motion.div>
             <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative"
             >
                <div className="absolute -inset-10 bg-primary/10 rounded-[3rem] blur-3xl"></div>
                <div className="relative bg-ebony-card border border-white/5 rounded-[3rem] p-4 shadow-2xl overflow-hidden group">
                   <img src="/premium_dashboard.png" alt="Platform UI" className="w-full h-auto rounded-[2.5rem] border border-white/5 group-hover:scale-105 transition-transform duration-700" />
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* ── CORE FEATURES GRID ───────────────────── */}
      <section className="py-32 bg-slate-50 dark:bg-[#05070a] px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader subtitle="Core Capabilities" title="Management Excellence" />
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Wallet, title: t('common.revenue_tracking'), desc: 'Automated calculation of salary-based, business, and investor contributions with real-time analytics.' },
              { icon: Users, title: t('common.multi_sector_support'), desc: 'Dynamic hierarchy management from Woredas to specific institutions and rural clusters.' },
              { icon: BarChart3, title: 'Real-Time Analytics', desc: 'Instant visualization of monthly revenue goals vs actual collections across all sector branches.' },
              { icon: Lock, title: 'Role-Based Access', desc: 'Strict permissions ensuring Sector Officers can only view and manage their assigned unit members.' },
              { icon: Shield, title: 'Compliance & Audit', desc: 'Immutable transaction logs, strict access control, and advanced Excel export templates.' }
            ].map((f, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 rounded-[3rem] bg-white dark:bg-ebony-card border border-slate-100 dark:border-white/5 hover:border-gold/30 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-10 group-hover:bg-primary transition-all duration-500 shadow-lg">
                  <f.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-black text-ebony dark:text-white mb-6 tracking-tight">{f.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed font-medium">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────── */}
      <section className="py-40 bg-white dark:bg-ebony text-ebony dark:text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <SectionHeader 
            subtitle="The Journey" 
            title="How It Works" 
            light={false}
          />

          <div className="grid md:grid-cols-5 gap-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent hidden md:block"></div>
            
            {[
              { step: '01', title: 'Register', desc: 'Create your digital profile' },
              { step: '02', title: 'Verify', desc: 'Authentication by branch' },
              { step: '03', title: 'Pay', desc: 'Secure fee contribution' },
              { step: '04', title: 'Track', desc: 'Monitor your status' },
              { step: '05', title: 'Engage', desc: 'Stay updated & active' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center relative z-10 group"
              >
                <div className="w-20 h-20 rounded-full bg-slate-50 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 flex items-center justify-center mx-auto mb-8 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-500 shadow-sm">
                  <span className="text-2xl font-black">{item.step}</span>
                </div>
                <h4 className="text-xl font-black text-primary dark:text-gold mb-3 tracking-tight">{item.title}</h4>
                <p className="text-slate-500 dark:text-white/70 text-sm font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATISTICS ───────────────────────────── */}
      <section className="py-32 bg-slate-50 dark:bg-ebony-card relative overflow-hidden border-y border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
          {[
            { label: 'Total Members', value: '45.2K', suffix: '+' },
            { label: 'Annual Growth', value: '24', suffix: '%' },
            { label: 'Registered Units', value: '128', suffix: '' },
            { label: 'Monthly Traffic', value: '100K', suffix: '+' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-6xl md:text-7xl font-black text-ebony dark:text-white tracking-tighter mb-4">
                {stat.value}<span className="text-primary/60 dark:text-gold/60">{stat.suffix}</span>
              </h3>
              <p className="text-[10px] text-slate-500 dark:text-white/60 font-black uppercase tracking-[0.4em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CALL TO ACTION ───────────────────────── */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 dark:bg-ebony-card p-20 md:p-32 rounded-[4rem] relative overflow-hidden border border-slate-200 dark:border-white/5 shadow-2xl"
          >
            <div className="absolute inset-0 bg-ebony/20"></div>
            <div className="relative z-10 text-center space-y-12">
               <h3 className="text-5xl md:text-8xl font-black text-ebony dark:text-white tracking-tighter leading-none">
                  Ready to Lead the <br /> Digital Transformation?
               </h3>
               <p className="text-xl text-slate-500 dark:text-white/70 max-w-2xl mx-auto font-medium">
                  Join thousands of members who have already switched to the most secure and efficient contribution platform in the region.
               </p>
               <div className="flex flex-col sm:flex-row gap-8 justify-center">
                  <button 
                    onClick={() => router.push('/login')}
                    className="px-12 py-6 bg-primary text-white font-black uppercase tracking-[0.2em] rounded-full hover:scale-105 hover:bg-ebony transition-all shadow-xl"
                  >
                    Become a Member
                  </button>
                  <button 
                    onClick={() => router.push('/login')}
                    className="px-12 py-6 bg-transparent border-2 border-primary text-primary font-black uppercase tracking-[0.2em] rounded-full hover:bg-primary hover:text-white transition-all"
                  >
                    Access Dashboard
                  </button>
               </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

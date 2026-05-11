"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  ArrowRight, UserPlus, Check, Users, 
  Wallet, TrendingUp, Megaphone, ShieldCheck, Zap, FileSpreadsheet, 
  Receipt, ChevronRight, Star, Quote, Network
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SectionHeader = ({ title, subtitle, light = false }: { title: string, subtitle: string, light?: boolean }) => (
  <div className="text-center mb-20">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className={`text-sm font-black uppercase tracking-[0.5em] mb-4 ${light ? 'text-gold' : 'text-primary dark:text-gold'}`}>
        {subtitle}
      </h2>
      <h3 className={`text-4xl md:text-6xl font-black tracking-tighter ${light ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
        {title}
      </h3>
      <div className={`w-24 h-1 mx-auto mt-8 rounded-full ${light ? 'bg-gold' : 'bg-primary dark:bg-gold'}`}></div>
    </motion.div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    whileHover={{ scale: 1.05 }}
    className="group bg-white dark:bg-ebony-card border border-slate-200 dark:border-white/5 p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300"
  >
    <div className="w-16 h-16 rounded-2xl bg-primary/10 dark:bg-gold/10 flex items-center justify-center mb-8 group-hover:bg-primary dark:group-hover:bg-gold transition-colors">
      <Icon size={28} className="text-primary dark:text-gold group-hover:text-white dark:group-hover:text-ebony" />
    </div>
    <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-primary dark:group-hover:text-gold">{title}</h4>
    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{desc}</p>
  </motion.div>
);

export default function LandingPage() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div className="overflow-x-hidden bg-slate-50 dark:bg-ebony transition-colors duration-500">
      
      <section className="relative py-32 flex items-center justify-center min-h-[90vh]">
        <div className="max-w-5xl mx-auto px-8 w-full relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl lg:text-[80px] font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter mb-10">
              <span className="text-black dark:text-gold block mb-2">{t('common.hero_title_line1')}</span>
              <span className="block">{t('common.hero_title_line2')}</span>
            </h1>
            
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed font-bold mb-12 mx-auto">
              {t('common.hero_desc_landing')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => router.push('/login')} 
                className="flex items-center justify-center gap-4 bg-primary dark:bg-gold text-white dark:text-ebony px-10 py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-lg hover:scale-105 transition-all group"
              >
                {t('common.hero_btn_register')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <button 
                onClick={() => router.push('/login')} 
                className="flex items-center justify-center gap-4 bg-white dark:bg-white/10 border border-slate-200 dark:border-white/20 text-slate-900 dark:text-white px-10 py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-slate-100 dark:hover:bg-white/20 transition-all"
              >
                {t('common.hero_btn_login')}
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-3 gap-8 md:gap-16 pt-12 border-t border-slate-200 dark:border-white/10 w-full max-w-3xl mx-auto mt-20">
            {[
              { label: t('common.hero_stat_members'), value: '45,000+' },
              { label: t('common.hero_stat_contributions'), value: '$2.4M' },
              { label: t('common.hero_stat_sectors'), value: '120+' }
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + i * 0.1 }}>
                <p className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white mb-2">{stat.value}</p>
                <p className="text-[9px] text-primary dark:text-gold font-bold uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-40 bg-white dark:bg-ebony transition-colors duration-500">
        <div className="max-w-[1400px] mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="bg-primary/10 p-4 rounded-[3rem]">
              <div className="bg-slate-200 dark:bg-slate-800 h-[500px] rounded-[2.5rem] flex items-center justify-center">
                <Users size={100} className="text-primary dark:text-gold opacity-20" />
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <h2 className="text-sm font-black text-primary dark:text-gold uppercase tracking-[0.5em]">{t('common.about_label')}</h2>
            <h3 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight">{t('common.about_title')}</h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{t('common.about_desc')}</p>
            <ul className="space-y-6 pt-4">
              {[1, 2, 3, 4].map((i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-primary/10 dark:bg-gold/10 flex items-center justify-center group-hover:bg-primary dark:group-hover:bg-gold transition-colors">
                    <Check size={14} className="text-primary dark:text-gold group-hover:text-white dark:group-hover:text-ebony" />
                  </div>
                  <span className="text-slate-900 dark:text-white font-bold tracking-tight">{t(`common.about_item_${i}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="features" className="py-40 bg-slate-50 dark:bg-[#05070a] transition-colors duration-500">
        <div className="max-w-[1400px] mx-auto px-8">
          <SectionHeader subtitle={t('common.features_subtitle')} title={t('common.features_title')} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard icon={UserPlus} title={t('common.feat_reg_title')} desc={t('common.feat_reg_desc')} delay={0.1} />
            <FeatureCard icon={Wallet} title={t('common.feat_pay_title')} desc={t('common.feat_pay_desc')} delay={0.2} />
            <FeatureCard icon={TrendingUp} title={t('common.feat_analytics_title')} desc={t('common.feat_analytics_desc')} delay={0.3} />
            <FeatureCard icon={FileSpreadsheet} title={t('common.feat_export_title')} desc={t('common.feat_export_desc')} delay={0.4} />
          </div>
        </div>
      </section>

      <section className="py-40 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10">{t('common.cta_title_line1')} {t('common.cta_title_line2')}</h2>
          <p className="text-xl opacity-80 mb-12">{t('common.cta_desc')}</p>
          <button onClick={() => router.push('/login')} className="px-12 py-6 bg-white text-primary font-black uppercase tracking-widest rounded-full hover:scale-105 transition-all">
            {t('common.cta_btn_member')}
          </button>
        </div>
      </section>

    </div>
  );
}

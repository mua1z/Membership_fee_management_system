"use client"

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { Menu, X, Mail, Phone, Languages, Shield, Globe, Sun, Moon } from 'lucide-react';
import Link from 'next/link';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const currentLang = i18n.language || 'am';
  const toggleLanguage = () => {
    const newLang = currentLang.startsWith('en') ? 'am' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    if (localStorage.getItem('theme') === 'light') {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }

    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Features', path: '/#features' },
    { name: 'Platform', path: '/platform' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-ebony text-slate-900 dark:text-slate-300 font-sans relative overflow-x-hidden flex flex-col transition-colors duration-500 ${currentLang.startsWith('am') ? 'font-amharic' : ''}`}>
      
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 border-b bg-white dark:bg-[#05070a] border-slate-200 dark:border-white/10 ${scrolled ? 'py-3 shadow-sm' : 'py-6'}`}>
        <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-4 group">
            <img src="/pp-logo.png" alt="Logo" className="w-12 h-12 object-contain" />
            <div className="hidden sm:block text-left">
              <h3 className="font-black tracking-tighter leading-none text-lg text-slate-900 dark:text-white">{t('common.prosperity_party')}</h3>
              <p className="text-[10px] text-slate-500 dark:text-white/80 font-bold uppercase tracking-[0.4em] mt-1">{t('common.app_subtitle')}</p>
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map(item => (
              <Link 
                key={item.name} 
                href={item.path} 
                className={`text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-300 relative group ${pathname === item.path ? 'text-primary dark:text-white' : 'text-slate-500 dark:text-white/70'}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button onClick={toggleTheme} className="p-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-500 dark:text-white/50 hover:text-slate-900 dark:hover:text-white transition-all">
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={toggleLanguage} className="p-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-500 dark:text-white/50 hover:text-slate-900 dark:hover:text-white transition-all">
              <Globe className="w-5 h-5" />
            </button>
            <button onClick={() => router.push('/login')} className="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-[11px] uppercase tracking-widest rounded-full hover:scale-105 transition-all">
              {t('common.login')}
            </button>
          </div>

          <button className="lg:hidden text-slate-900 dark:text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <main className="flex-grow">
         {children}
      </main>

      <footer className="bg-white dark:bg-[#05070a] pt-32 pb-16 border-t border-slate-200 dark:border-white/5 transition-colors duration-500">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <img src="/pp-logo.png" alt="Logo" className="w-14 h-14 object-contain" />
                <div className="text-left">
                  <h3 className="text-slate-900 dark:text-white font-black tracking-tighter leading-none text-xl">{t('common.prosperity_party')}</h3>
                  <p className="text-[10px] text-primary dark:text-gold font-bold uppercase tracking-[0.4em] mt-1">{t('common.app_subtitle')}</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium max-w-sm text-left">
                Empowering the community through digital transformation and transparent membership management for the Dire Dawa Branch.
              </p>
            </div>
            
            <div className="text-left">
              <h4 className="text-slate-900 dark:text-white font-black text-xs uppercase tracking-[0.4em] mb-12 relative inline-block">
                Navigation
                <span className="absolute -bottom-4 left-0 w-8 h-[2px] bg-primary dark:bg-gold"></span>
              </h4>
              <ul className="space-y-6">
                {['Home', 'About Us', 'Platform', 'Security'].map(link => (
                  <li key={link}><a href="#" className="text-sm text-slate-600 dark:text-slate-400 font-semibold">{link}</a></li>
                ))}
              </ul>
            </div>
            
            <div className="text-left">
              <h4 className="text-slate-900 dark:text-white font-black text-xs uppercase tracking-[0.4em] mb-12 relative inline-block">
                Security
                <span className="absolute -bottom-4 left-0 w-8 h-[2px] bg-primary dark:bg-gold"></span>
              </h4>
              <ul className="space-y-6">
                {['Privacy Policy', 'Terms of Service', 'Data Protection'].map(link => (
                  <li key={link}><a href="#" className="text-sm text-slate-600 dark:text-slate-400 font-semibold">{link}</a></li>
                ))}
              </ul>
            </div>
            
            <div className="text-left">
              <h4 className="text-slate-900 dark:text-white font-black text-xs uppercase tracking-[0.4em] mb-12 relative inline-block">
                Contact
                <span className="absolute -bottom-4 left-0 w-8 h-[2px] bg-primary dark:bg-gold"></span>
              </h4>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <Phone size={18} className="text-primary dark:text-gold" />
                  <p className="text-sm font-bold text-slate-900 dark:text-white">+251 911 000 000</p>
                </div>
                <div className="flex gap-4">
                  <Mail size={18} className="text-primary dark:text-gold" />
                  <p className="text-sm font-bold text-slate-900 dark:text-white">support@pp-diredawa.org</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em]">
              &copy; {new Date().getFullYear()} Prosperity Party Dire Dawa Branch
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

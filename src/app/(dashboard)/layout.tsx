"use client"

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import { useTranslation } from 'react-i18next'
import {
  LayoutDashboard, Users, Wallet, FileText, LogOut, Menu, Sun, Moon,
  Settings, UserCircle, ShieldCheck, ChevronRight, Languages
} from 'lucide-react'
import PageLoader from '@/components/PageLoader'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth()
  const { t, i18n } = useTranslation()
  const pathname = usePathname()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [loggingOut, setLoggingOut] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  const handleLogout = () => {
    setLoggingOut(true)
    setTimeout(() => {
      logout()
      router.push('/login')
    }, 1000)
  }

  const currentLang = i18n.language || 'am'
  const toggleLanguage = () => {
    const newLang = currentLang.startsWith('en') ? 'am' : 'en'
    i18n.changeLanguage(newLang)
  }

  const navItems = [
    { icon: LayoutDashboard, label: t('common.dashboard'), path: '/dashboard', roles: ['admin', 'sector_officer', 'expert'] },
    { icon: Users,           label: t('common.members'),   path: '/members',   roles: ['admin', 'sector_officer', 'expert'] },
    { icon: Wallet,          label: t('common.payments'),  path: '/payments',  roles: ['admin', 'sector_officer', 'expert'] },
    { icon: FileText,        label: t('common.reports'),   path: '/reports',   roles: ['admin', 'sector_officer', 'expert'] },
    { icon: ShieldCheck,     label: t('common.users'),     path: '/users',     roles: ['admin'] },
    { icon: Settings,        label: t('common.settings'),  path: '/settings',  roles: ['admin'] },
  ].filter(item => item.roles.includes(user?.role || ''))

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/')

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 flex font-sans ${currentLang.startsWith('am') ? 'font-amharic' : ''}`}>
      {loggingOut && (
        <div className="fixed inset-0 z-[100] bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm flex items-center justify-center">
          <PageLoader />
        </div>
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-40 h-screen flex flex-col transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} bg-ebony border-r border-white/5 w-60 hidden lg:flex`}>
        <div className="flex flex-col items-center justify-center pt-8 pb-6 px-4 border-b border-slate-800/50">
          <img src="/pp-logo.png" alt="Logo" className="w-12 h-12 object-contain bg-white rounded-full p-1" />
          <div className="mt-3 text-center px-4">
            <h1 className="text-white font-black text-sm leading-tight tracking-tight">{t('common.prosperity_party')}</h1>
            <p className="text-gold text-[8px] font-black uppercase tracking-[0.2em] mt-1.5">{t('common.app_subtitle')}</p>
          </div>
        </div>

        <nav className="flex-1 px-3 py-6 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path} className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-all ${isActive(item.path) ? 'bg-gradient-to-r from-gold to-gold-dim text-white' : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'}`}>
              <div className="flex items-center gap-2.5">
                <item.icon className="w-4 h-4" />
                <span className="font-bold text-[12px] tracking-wide">{item.label}</span>
              </div>
              {isActive(item.path) && <ChevronRight className="w-3 h-3 opacity-70" />}
            </Link>
          ))}
        </nav>

        <div className="p-3 border-t border-white/5 bg-black/20">
          <Link href="/profile" className={`flex items-center gap-2.5 p-2.5 rounded-lg transition-all ${isActive('/profile') ? 'bg-white/10' : 'hover:bg-white/5'}`}>
            <div className="w-8 h-8 rounded-full border-2 border-gold/30 flex items-center justify-center text-white text-xs font-bold overflow-hidden bg-slate-800">
              {user?.fullName?.charAt(0)}
            </div>
            <div className="flex-1 min-w-0 text-left">
              <p className="text-[12px] font-bold text-white truncate leading-none mb-1">{user?.fullName}</p>
              <p className="text-[9px] text-slate-400 font-medium uppercase tracking-wider">{t(`common.${user?.role || 'expert'}`)}</p>
            </div>
          </Link>
        </div>
      </aside>

      {/* Main Area */}
      <div className={`flex-1 flex flex-col min-h-screen transition-all ${sidebarOpen ? 'lg:pl-60' : 'lg:pl-0'}`}>
        <header className="sticky top-0 z-30 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1.5 rounded-lg text-slate-600 dark:text-slate-400">
              <Menu className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-black text-slate-800 dark:text-white hidden md:block">
              {navItems.find(item => isActive(item.path))?.label || t('common.profile')}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={toggleLanguage} className="px-3 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-900/20 text-[10px] font-black text-amber-700 dark:text-amber-400 flex items-center gap-2 transition-all">
              <Languages className="w-4 h-4" />
              {currentLang.startsWith('am') ? 'English' : 'አማርኛ'}
            </button>
            <button onClick={toggleDarkMode} className="p-2 rounded-lg text-slate-600 dark:text-slate-400 transition-all">
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button onClick={handleLogout} className="flex items-center gap-1.5 p-1.5 rounded-lg text-rose-600 font-bold text-[11px] px-3">
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">{t('common.logout')}</span>
            </button>
          </div>
        </header>

        <main className="flex-1 p-4 lg:p-6 overflow-x-hidden">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

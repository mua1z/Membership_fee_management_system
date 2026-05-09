import { useTranslation } from 'react-i18next'

export default function PageLoader({ message }: { message?: string }) {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] gap-6 transition-colors duration-500">
      {/* Ambient glow */}
      <div className="absolute w-[300px] h-[300px] bg-[#FFD700]/10 dark:bg-[#FFD700]/5 rounded-full blur-[80px] pointer-events-none"></div>
      
      <div className="relative flex items-center justify-center">
        {/* Outer pulse ring */}
        <div className="absolute w-28 h-28 border border-[#FFD700]/30 dark:border-[#FFD700]/15 rounded-full animate-[ping_3s_ease-in-out_infinite]"></div>
        {/* Static ring */}
        <div className="w-20 h-20 border-2 border-[#FFD700]/20 dark:border-[#FFD700]/10 rounded-full"></div>
        {/* Spinning ring */}
        <div className="absolute inset-0 w-20 h-20 border-2 border-transparent border-t-[#FFD700] border-r-[#D4AF37]/60 dark:border-r-[#D4AF37]/40 rounded-full animate-spin" style={{ animationDuration: '1.5s' }}></div>
        {/* Logo */}
        <img src="/pp-logo.png" alt="logo" className="absolute w-10 h-10 object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] dark:drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
      </div>
      
      <div className="text-center space-y-2">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] bg-clip-text text-transparent bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B] dark:from-[#D4AF37] dark:via-[#FFD700] dark:to-[#D4AF37]">
          {message || t('common.loading')}...
        </p>
        {/* Shimmer bar */}
        <div className="w-32 h-[2px] bg-slate-200 dark:bg-white/5 rounded-full mx-auto overflow-hidden">
          <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent rounded-full animate-[shimmer_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  )
}

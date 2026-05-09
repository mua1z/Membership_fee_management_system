import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark">
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full animate-pulse"></div>
        <img 
          src="/pp-logo.png" 
          alt="Prosperity Party Logo" 
          className="w-32 h-32 relative z-10 animate-in zoom-in duration-1000"
        />
      </div>
      
      <div className="text-center space-y-4">
        <h2 className="text-white text-3xl font-black tracking-tighter uppercase">
          Prosperity <span className="text-gold">Party</span>
        </h2>
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-8 bg-gold/30"></div>
          <p className="text-gold font-bold text-[10px] uppercase tracking-[0.5em]">Dire Dawa Branch</p>
          <div className="h-[1px] w-8 bg-gold/30"></div>
        </div>
      </div>

      <div className="mt-16 w-64 h-[2px] bg-white/5 rounded-full overflow-hidden">
        <div className="h-full bg-gold w-0 animate-loading"></div>
      </div>
    </div>
  );
};

export default Preloader;

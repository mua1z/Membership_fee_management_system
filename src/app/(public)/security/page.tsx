"use client"

import React from 'react';
import { Shield, Lock, FileKey, Activity, AlertCircle } from 'lucide-react';

export default function SecurityPage() {
  return (
    <div className="bg-white dark:bg-ebony pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-32">
          <div className="w-24 h-24 bg-primary/10 border border-primary/20 rounded-[2rem] flex items-center justify-center mx-auto mb-10">
             <Shield className="w-12 h-12 text-primary" />
          </div>
          <h4 className="text-primary font-black uppercase tracking-[0.5em] text-[10px] mb-6">Security Architecture</h4>
          <h1 className="text-5xl lg:text-7xl font-black text-ebony dark:text-white mb-8 tracking-tighter">Institutional Trust Infrastructure</h1>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-xl font-medium">Your data is secured by industry-leading encryption and strict role-based access control policies.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-32">
           <div className="bg-slate-50 dark:bg-ebony-card border border-slate-100 dark:border-white/5 p-12 rounded-[3rem] shadow-xl hover:border-primary/30 transition-all duration-500">
              <Lock className="w-10 h-10 text-primary mb-8" />
              <h3 className="text-3xl font-black text-ebony dark:text-white mb-6 tracking-tight">Role-Based Access Control</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-lg font-medium">
                 The platform operates on a strict zero-trust model. Administrators have full oversight, while Sector Officers are cryptographically restricted to viewing and managing only members within their specific Woreda or Institution.
              </p>
           </div>
           <div className="bg-slate-50 dark:bg-ebony-card border border-slate-100 dark:border-white/5 p-12 rounded-[3rem] shadow-xl hover:border-gold/30 transition-all duration-500">
              <FileKey className="w-10 h-10 text-gold mb-8" />
              <h3 className="text-3xl font-black text-ebony dark:text-white mb-6 tracking-tight">JWT Authentication</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-lg font-medium">
                 Sessions are secured using JSON Web Tokens (JWT) with short-lived expiration. All API communications between the client and the backend require valid bearer tokens.
              </p>
           </div>
        </div>

        <div className="bg-ebony p-16 lg:p-24 rounded-[4rem] relative overflow-hidden shadow-2xl border border-white/5">
           <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
              <div className="space-y-8 text-left">
                 <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight">Continuous Telemetry & Data Integrity</h2>
                 <p className="text-slate-400 leading-relaxed text-lg font-medium">
                    Every action, import, deletion, and payment modification is logged. The system maintains an immutable record of bulk changes.
                 </p>
                 <ul className="space-y-6">
                    {['Immutable Data Logs', 'Automated Backups', 'Rate Limiting & Protection'].map((feature, i) => (
                       <li key={i} className="flex items-center gap-6">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                             <Activity className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-white font-bold tracking-tight text-lg">{feature}</span>
                       </li>
                    ))}
                 </ul>
              </div>
              <div className="relative">
                 <div className="relative bg-ebony-card border border-white/10 rounded-[3rem] p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                    <div className="w-24 h-24 rounded-full bg-primary/5 flex items-center justify-center mb-10 border border-primary/20">
                      <AlertCircle className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4 tracking-tight">System Integrity Verified</h3>
                    <p className="text-slate-500 text-sm uppercase tracking-[0.3em] font-black">No Vulnerabilities Detected</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

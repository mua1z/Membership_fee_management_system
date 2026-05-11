import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function OnboardingLayout({ children }: { children: React.ReactNode }) {
  const { sessionClaims } = await auth()
  
  if (sessionClaims?.metadata.onboardingComplete === true) {
    redirect('/dashboard')
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 border border-slate-100">
        <div className="flex justify-center mb-8">
          <img src="/pp-logo.png" alt="Logo" className="w-20 h-20" />
        </div>
        {children}
      </div>
    </div>
  )
}

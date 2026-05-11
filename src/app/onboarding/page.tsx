'use client'

import * as React from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { completeOnboarding } from './_actions'
import { Loader2, ArrowRight } from 'lucide-react'

export default function OnboardingPage() {
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const { user } = useUser()
  const router = useRouter()

  const handleSubmit = async (formData: FormData) => {
    setLoading(true)
    setError('')
    const res = await completeOnboarding(formData)
    if (res?.success) {
      await user?.reload()
      router.push('/dashboard')
    } else if (res?.error) {
      setError(res.error)
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-slate-900">Welcome to MCMS</h1>
        <p className="text-slate-500 mt-2 text-sm">Please complete your profile to access the platform.</p>
      </div>

      <form action={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="text-sm font-semibold text-slate-700">Account Type</label>
          <select 
            name="role" 
            required 
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          >
            <option value="expert">Expert</option>
            <option value="sector_officer">Sector Officer</option>
          </select>
          <p className="text-[10px] text-slate-400">Administrators will verify your role after submission.</p>
        </div>

        {error && <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-100">{error}</p>}
        
        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Complete Setup <ArrowRight className="w-4 h-4" /></>}
        </button>
      </form>
    </div>
  )
}

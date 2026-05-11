"use client"

import { useState, useEffect } from 'react'
import api from '@/lib/frontend/api'
import { useTranslation } from 'react-i18next'
import { Settings, DollarSign, RotateCcw, Save } from 'lucide-react'
import { motion } from 'framer-motion'
import PageLoader from '@/components/PageLoader'
import ConfirmDialog from '@/components/ConfirmDialog'

export default function SettingsPage() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('contribution')
  const [settings, setSettings] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [confirmOpen, setConfirmOpen] = useState(false)

  useEffect(() => {
    fetchSettings()
  }, [])

  const fetchSettings = async () => {
    try {
      const res = await api.get('/settings')
      setSettings(res.data.data)
    } catch (err) { console.error(err) }
    finally { setLoading(false) }
  }

  const handleSave = async () => {
    setSaving(true)
    setMessage('')
    try {
      await api.put('/settings', settings)
      setMessage('✅ Settings saved!')
      setTimeout(() => setMessage(''), 5000)
    } catch (err: any) {
      setMessage('❌ Failed to save')
    } finally { setSaving(false) }
  }

  const doRecalculate = async () => {
    setConfirmOpen(false)
    setSaving(true)
    try {
      const res = await api.post('/settings/recalculate')
      setMessage(`✅ ${res.data.message}`)
    } catch (err) { setMessage('❌ Recalculation failed') }
    finally { setSaving(false) }
  }

  if (loading) return <PageLoader />

  const tabs = [
    { id: 'contribution', label: t('common.contribution_rules'), icon: DollarSign },
    { id: 'system', label: t('common.system_settings'), icon: Settings },
    { id: 'recalculate', label: t('common.recalculate_all'), icon: RotateCcw }
  ]

  return (
    <div className="space-y-6 pt-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{t('common.settings')}</h1>
          <p className="text-gray-600 dark:text-gray-400">Configure system-wide settings and rules</p>
        </div>
        <button onClick={handleSave} disabled={saving} className="btn btn-primary flex items-center gap-2">
          <Save className="w-4 h-4" /> {t('common.save_all_changes')}
        </button>
      </div>

      {message && (
        <div className={`p-4 rounded-lg ${message.includes('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {message}
        </div>
      )}

      <div className="flex gap-4 border-b border-gray-200 dark:border-gray-700">
        {tabs.map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`py-4 px-2 border-b-2 font-medium flex items-center gap-2 ${activeTab === tab.id ? 'border-primary text-primary' : 'border-transparent text-gray-500'}`}>
            <tab.icon className="w-4 h-4" /> {tab.label}
          </button>
        ))}
      </div>

      <div className="card text-left">
        {activeTab === 'contribution' && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Contribution Rules</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Fee Calculation Base</label>
                <select className="input" value={settings.contributionRules.salaryBased.calculationBase} onChange={e => setSettings({...settings, contributionRules: {...settings.contributionRules, salaryBased: {...settings.contributionRules.salaryBased, calculationBase: e.target.value}}})}>
                  <option value="Net">Net Salary</option>
                  <option value="Gross">Gross Salary</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Pension Deduction (%)</label>
                <input className="input" type="number" value={settings.contributionRules.salaryBased.pensionPercentage} onChange={e => setSettings({...settings, contributionRules: {...settings.contributionRules, salaryBased: {...settings.contributionRules.salaryBased, pensionPercentage: Number(e.target.value)}}})} />
              </div>
            </div>
            {/* More rules can be added here as needed, matching the legacy UI */}
          </div>
        )}

        {activeTab === 'system' && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold">System Settings</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Organization Name</label>
                <input className="input" value={settings.system.organizationName} onChange={e => setSettings({...settings, system: {...settings.system, organizationName: e.target.value}})} />
              </div>
              <div>
                <label className="block text-sm mb-1">Default Currency</label>
                <input className="input" value={settings.system.currency} onChange={e => setSettings({...settings, system: {...settings.system, currency: e.target.value}})} />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'recalculate' && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Recalculate All Members</h3>
            <p className="text-gray-500 text-sm">This will re-calculate contribution fees for all members based on current rules.</p>
            <button onClick={() => setConfirmOpen(true)} className="btn btn-primary flex items-center gap-2">
              <RotateCcw className="w-4 h-4" /> Recalculate Now
            </button>
          </div>
        )}
      </div>

      <ConfirmDialog
        open={confirmOpen}
        title="Recalculate All Members"
        message="Are you sure? This will update contribution fees for all members in the database."
        onConfirm={doRecalculate}
        onCancel={() => setConfirmOpen(false)}
      />
    </div>
  )
}

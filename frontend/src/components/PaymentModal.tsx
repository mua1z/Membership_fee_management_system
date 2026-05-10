import { useState, useEffect } from 'react'
import api from '../lib/api'
import { X } from 'lucide-react'
import { getCurrentEthiopianPeriod } from '../utils/ethiopianCalendar'
import { useTranslation } from 'react-i18next'

interface PaymentModalProps {
  onClose: () => void
  onSuccess: (receiptId?: string) => void
}

interface Member {
  _id: string
  memberId: string
  fullName: string
  branch: string
  contribution: { monthlyFee: number }
}

export default function PaymentModal({ onClose, onSuccess }: PaymentModalProps) {
  const { t } = useTranslation()
  const [members, setMembers] = useState<Member[]>([])
  const [selectedMember, setSelectedMember] = useState('')
  
  const ethPeriod = getCurrentEthiopianPeriod()
  
  const [formData, setFormData] = useState({
    amount: 0,
    currency: 'ETB',
    frequency: 'Monthly',
    method: 'Cash' as string,
    receivedBy: '',
    period: {
      month: ethPeriod.month,
      year: ethPeriod.year
    },
    notes: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    api.get('/members', { params: { limit: 1000 } })
      .then(res => setMembers(res.data.data))
      .catch(err => console.error(err))
  }, [])

  const handleMemberSelect = (memberId: string) => {
    setSelectedMember(memberId)
    const member = members.find(m => String(m._id) === memberId || String((m as any).id) === memberId)
    if (member) {
      setFormData(prev => ({
        ...prev,
        amount: member.contribution?.monthlyFee || (member as any).contributionMonthlyFee || 0
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await api.post('/payments', {
        member: selectedMember,
        ...formData
      })
      onSuccess(res.data.data?.receiptId)
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to record payment')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-2xl">
        <div className="border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Record Payment</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {error && (
            <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1">Select Member *</label>
            <select
              value={selectedMember}
              onChange={(e) => handleMemberSelect(e.target.value)}
              className="input"
              required
            >
              <option value="">Choose a member...</option>
              {members.map(m => (
                <option key={m._id} value={m._id}>
                  {m.memberId} - {m.fullName} ({m.branch})
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Amount *</label>
              <input
                type="number"
                value={formData.amount}
                onChange={(e) => setFormData(prev => ({ ...prev, amount: Number(e.target.value) }))}
                className="input"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Currency</label>
              <select
                value={formData.currency}
                onChange={(e) => setFormData(prev => ({ ...prev, currency: e.target.value }))}
                className="input"
              >
                <option value="ETB">ETB</option>
                <option value="USD">USD</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Payment Method *</label>
              <select
                value={formData.method}
                onChange={(e) => setFormData(prev => ({ ...prev, method: e.target.value }))}
                className="input"
                required
              >
                <option value="Cash">Cash</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="Mobile Money">Mobile Money</option>
                <option value="Check">Check</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Frequency</label>
              <select
                value={formData.frequency}
                onChange={(e) => setFormData(prev => ({ ...prev, frequency: e.target.value }))}
                className="input"
              >
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
                <option value="Semi-Annual">Semi-Annual</option>
                <option value="Annual">Annual</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Month</label>
              <select
                value={formData.period.month}
                onChange={(e) => setFormData(prev => ({ ...prev, period: { ...prev.period, month: Number(e.target.value) } }))}
                className="input"
              >
                {Array.from({ length: 13 }, (_, i) => i + 1).map(m => (
                  <option key={m} value={m}>{t(`common.eth_month_${m}`)}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Year</label>
              <input
                type="number"
                value={formData.period.year}
                onChange={(e) => setFormData(prev => ({ ...prev, period: { ...prev.period, year: Number(e.target.value) } }))}
                className="input"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Received By *</label>
            <input
              type="text"
              value={formData.receivedBy}
              onChange={(e) => setFormData(prev => ({ ...prev, receivedBy: e.target.value }))}
              className="input"
              placeholder="Name of person receiving payment"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Notes</label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
              className="input"
              rows={3}
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button type="button" onClick={onClose} className="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" disabled={loading} className="btn btn-primary">
              {loading ? 'Recording...' : 'Record Payment'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

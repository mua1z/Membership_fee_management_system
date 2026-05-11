"use client"

import { useState, useEffect } from 'react'
import api from '@/lib/frontend/api'
import { useTranslation } from 'react-i18next'
import { Search, Save, Check, Filter, Download, Loader2, Trash2, Users, Wallet, Banknote, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import { useAuth } from '@/context/AuthContext'
import PaymentModal from '@/components/PaymentModal'
import ReceiptModal from '@/components/ReceiptModal'
import ConfirmDialog from '@/components/ConfirmDialog'
import PageLoader from '@/components/PageLoader'

interface Payment {
  id?: number
  receiptId: string
  memberId: string
  amount: number
  currency: string
  frequency: string
  method: string
  paymentDate: string
  periodMonth: number
  periodYear: number
  receivedBy: string
  status: string
  memberInfo?: { 
    fullName: string; 
    branch: string;
    sectorUnit?: { name: string };
    memberCategory?: { name: string };
  }
}

interface MemberPaymentStatus {
  _id: number;
  memberId: string;
  fullName: string;
  branch: string;
  fee: number;
  paymentStatus: 'Paid' | 'Unpaid';
  paymentDate: string | null;
  paymentId: number | null;
}

export default function PaymentsPage() {
  const { user } = useAuth()
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState<'monthly' | 'history'>('monthly')

  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth() + 1

  const [payments, setPayments] = useState<Payment[]>([])
  const [historySearch, setHistorySearch] = useState('')
  const [summary, setSummary] = useState({ totalMembers: 0, totalMonthlyRevenue: 0, totalYearlyRevenue: 0 })

  const [members, setMembers] = useState<MemberPaymentStatus[]>([])
  const [monthlySearch, setMonthlySearch] = useState('')
  const [selectedMonthNum, setSelectedMonthNum] = useState(currentMonth)
  const [selectedYearNum, setSelectedYearNum] = useState(currentYear)
  const [savingId, setSavingId] = useState<number | null>(null)
  const [checkedIds, setCheckedIds] = useState<Record<number, boolean>>({})

  const [filters, setFilters] = useState({ 
    membershipType: '', 
    paymentStatus: ''
  })
  const [showFilters, setShowFilters] = useState(false)
  const [selectedReceiptId, setSelectedReceiptId] = useState<string | null>(null)

  const [sectorTypes, setSectorTypes] = useState<any[]>([])
  const [sectors, setSectors] = useState<any[]>([])
  const [categories, setCategories] = useState<any[]>([])

  const [selectedSectorType, setSelectedSectorType] = useState('')
  const [selectedSectorId, setSelectedSectorId] = useState('')
  const [selectedCategoryId, setSelectedCategoryId] = useState('')

  const [loading, setLoading] = useState(false)
  const [exporting, setExporting] = useState(false)
  const [hasFiltered, setHasFiltered] = useState(false)

  const [historyPage, setHistoryPage] = useState(1)
  const [historyPages, setHistoryPages] = useState(0)
  const [monthlyPage, setMonthlyPage] = useState(1)
  const [monthlyPages, setMonthlyPages] = useState(0)

  const [confirmSaveSelected, setConfirmSaveSelected] = useState(false)
  const [confirmPayAll, setConfirmPayAll] = useState(false)
  const [pendingPayAllMembers, setPendingPayAllMembers] = useState<MemberPaymentStatus[]>([])
  const [confirmDeletePayment, setConfirmDeletePayment] = useState<{ open: boolean; id: string | number | null }>({ open: false, id: null })

  useEffect(() => {
    api.get('/sector-types').then(res => setSectorTypes(res.data)).catch(console.error)
  }, [])

  useEffect(() => {
    if (selectedSectorType) {
      api.get(`/sectors?type=${selectedSectorType}`).then(res => setSectors(res.data)).catch(console.error)
      setSelectedSectorId('')
    } else {
      setSectors([])
      setSelectedSectorId('')
    }
  }, [selectedSectorType])

  useEffect(() => {
    const targetSectorId = user?.role === 'sector_officer' ? user?.sectorUnitId : selectedSectorId;
    if (targetSectorId) {
      api.get(`/sectors/${targetSectorId}/categories`).then(res => setCategories(res.data)).catch(console.error)
    } else {
      setCategories([])
      setSelectedCategoryId('')
    }
  }, [selectedSectorId, user?.role, user?.sectorUnitId])

  const fetchPayments = async () => {
    if (!hasFiltered) return
    setLoading(true)
    try {
      const params: any = { page: historyPage, limit: 15 }
      if (historySearch) params.memberId = historySearch
      if (selectedSectorType) params.sectorType = selectedSectorType
      if (selectedSectorId) params.sectorId = selectedSectorId
      if (selectedCategoryId) params.categoryId = selectedCategoryId
      if (filters.membershipType) params.membershipType = filters.membershipType
      if (filters.paymentStatus) params.status = filters.paymentStatus
      
      const res = await api.get('/payments', { params })
      setPayments(res.data.data)
      if (res.data.summary) setSummary(res.data.summary)
      if (res.data.pagination) setHistoryPages(res.data.pagination.pages)
    } catch (err) { console.error(err) }
    finally { setLoading(false) }
  }

  const fetchMonthlyStatus = async () => {
    if (!hasFiltered) return
    setLoading(true)
    try {
      const params: any = { 
        month: selectedMonthNum, 
        year: selectedYearNum, 
        search: monthlySearch, 
        limit: 15, 
        page: monthlyPage 
      }
      if (selectedSectorType) params.sectorType = selectedSectorType
      if (selectedSectorId) params.sectorId = selectedSectorId
      if (selectedCategoryId) params.categoryId = selectedCategoryId
      if (filters.membershipType) params.membershipType = filters.membershipType
      if (filters.paymentStatus) params.paymentStatus = filters.paymentStatus

      const res = await api.get('/payments/status', { params })
      setMembers(res.data.data)
      if (res.data.summary) setSummary(res.data.summary)
      if (res.data.pagination) setMonthlyPages(res.data.pagination.pages)
      
      const initialChecks: Record<number, boolean> = {}
      res.data.data.forEach((m: MemberPaymentStatus) => {
        initialChecks[m._id] = m.paymentStatus === 'Paid'
      })
      setCheckedIds(initialChecks)
    } catch (err) { console.error(err) }
    finally { setLoading(false) }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeTab === 'history') fetchPayments()
      else fetchMonthlyStatus()
    }, 500)
    return () => clearTimeout(timer)
  }, [activeTab, historySearch, monthlySearch, selectedMonthNum, selectedYearNum, filters, historyPage, monthlyPage, selectedSectorType, selectedSectorId, selectedCategoryId, hasFiltered])

  const handleExport = async () => {
    setExporting(true)
    try {
      const endpoint = activeTab === 'monthly' ? '/payments/status' : '/payments'
      const params: any = { limit: 100000 }
      if (activeTab === 'monthly') {
        params.month = selectedMonthNum
        params.year = selectedYearNum
        params.search = monthlySearch
        params.paymentStatus = filters.paymentStatus
      } else {
        params.memberId = historySearch
        params.status = filters.paymentStatus
      }
      params.membershipType = filters.membershipType
      params.sectorType = selectedSectorType
      params.sectorId = selectedSectorId
      params.categoryId = selectedCategoryId

      const res = await api.get(endpoint, { params })
      const data = res.data.data
      
      const XLSX = await import('xlsx')
      const ws = XLSX.utils.json_to_sheet(data)
      const wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, ws, 'Payments')
      XLSX.writeFile(wb, `Payments-Export-${new Date().toISOString().split('T')[0]}.xlsx`)
    } catch (err) { console.error(err) }
    finally { setExporting(false) }
  }

  const handleSavePayment = async (member: MemberPaymentStatus) => {
    setSavingId(member._id)
    try {
      const res = await api.post('/payments', {
        member: member.memberId,
        amount: member.fee,
        method: 'Cash',
        paymentDate: new Date().toISOString(),
        periodMonth: selectedMonthNum,
        periodYear: selectedYearNum,
        status: 'Paid'
      })
      await fetchMonthlyStatus()
      if (res.data.data?.receipt?.receiptId) setSelectedReceiptId(res.data.data.receipt.receiptId)
    } catch(err: any) {
      console.error(err)
    } finally { setSavingId(null) }
  }

  const handlePayAllFiltered = async () => {
    setLoading(true)
    try {
      const params: any = { month: selectedMonthNum, year: selectedYearNum, search: monthlySearch, limit: 100000 }
      if (selectedSectorType) params.sectorType = selectedSectorType
      if (selectedSectorId) params.sectorId = selectedSectorId
      if (selectedCategoryId) params.categoryId = selectedCategoryId
      
      const res = await api.get('/payments/status', { params })
      const unpaid = (res.data.data as MemberPaymentStatus[]).filter(m => m.paymentStatus === 'Unpaid')
      if (unpaid.length > 0) {
        setPendingPayAllMembers(unpaid)
        setConfirmPayAll(true)
      }
    } catch (err) { console.error(err) }
    finally { setLoading(false) }
  }

  const doPayAll = async () => {
    setConfirmPayAll(false)
    setLoading(true)
    try {
      const payload = pendingPayAllMembers.map(m => ({
        member: m.memberId,
        amount: m.fee,
        method: 'Cash',
        paymentDate: new Date().toISOString(),
        periodMonth: selectedMonthNum,
        periodYear: selectedYearNum,
        status: 'Paid'
      }))
      await api.post('/payments/bulk', payload)
      await fetchMonthlyStatus()
    } catch (err) { console.error(err) }
    finally { setLoading(false) }
  }

  const doDeletePayment = async () => {
    const id = confirmDeletePayment.id
    setConfirmDeletePayment({ open: false, id: null })
    if (!id) return
    try {
      await api.delete(`/payments/${id}`)
      if (activeTab === 'monthly') fetchMonthlyStatus()
      else fetchPayments()
    } catch (err) { console.error(err) }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{t('common.payments')}</h1>
          <p className="text-gray-600 dark:text-gray-400">Track and record member payments</p>
        </div>
        <button onClick={handleExport} disabled={exporting} className="btn btn-secondary flex items-center gap-2">
          {exporting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
          {t('common.export')}
        </button>
      </div>

      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-4">
          {['monthly', 'history'].map((tab: any) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-4 px-1 text-sm font-medium border-b-2 transition-colors ${activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              {t(`common.${tab === 'monthly' ? 'monthly_collection' : 'payment_history'}`)}
            </button>
          ))}
        </nav>
      </div>

      <div className="card flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={activeTab === 'monthly' ? monthlySearch : historySearch}
            onChange={(e) => activeTab === 'monthly' ? setMonthlySearch(e.target.value) : setHistorySearch(e.target.value)}
            placeholder={t('common.search') + "..."}
            className="input pl-10 w-full"
          />
        </div>
        
        <div className="flex flex-wrap items-center justify-end gap-2 w-full md:w-2/3">
          <button onClick={() => setShowFilters(!showFilters)} className={`btn btn-secondary flex items-center gap-2 ${showFilters ? 'bg-gray-200 dark:bg-gray-700' : ''}`}>
            <Filter className="w-4 h-4" />
            {t('common.filter')}
          </button>
          
          {activeTab === 'monthly' && (
            <div className="flex items-center gap-1 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-1">
              <select value={selectedMonthNum} onChange={(e) => setSelectedMonthNum(Number(e.target.value))} className="bg-transparent border-none text-sm font-semibold">
                {[1,2,3,4,5,6,7,8,9,10,11,12].map(m => <option key={m} value={m}>{t(`common.${['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'][m-1]}`)}</option>)}
              </select>
              <select value={selectedYearNum} onChange={(e) => setSelectedYearNum(Number(e.target.value))} className="bg-transparent border-none text-sm font-semibold">
                {[2026, 2025, 2024].map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
          )}
        </div>
      </div>

      {showFilters && (
        <div className="card grid grid-cols-2 md:grid-cols-4 gap-3 animate-in slide-in-from-top-2">
          {user?.role !== 'sector_officer' && (
            <select value={selectedSectorType} onChange={(e) => setSelectedSectorType(e.target.value)} className="input">
              <option value="">{t('common.sector_type')}</option>
              {sectorTypes.map(t_obj => <option key={t_obj.id} value={t_obj.name}>{t_obj.name}</option>)}
            </select>
          )}
          {user?.role !== 'sector_officer' && (
            <select value={selectedSectorId} disabled={!selectedSectorType} onChange={(e) => setSelectedSectorId(e.target.value)} className="input">
              <option value="">{t('common.sector_unit')}</option>
              {sectors.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
            </select>
          )}
          <select value={selectedCategoryId} disabled={user?.role !== 'sector_officer' && !selectedSectorId} onChange={(e) => setSelectedCategoryId(e.target.value)} className="input">
            <option value="">{t('common.category')}</option>
            {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
          <button onClick={() => setHasFiltered(true)} className="btn btn-primary">{t('common.display_payments')}</button>
        </div>
      )}

      {hasFiltered ? (
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: t('common.total_members'), value: summary.totalMembers, icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
              { label: t('common.monthly_revenue'), value: `${summary.totalMonthlyRevenue.toLocaleString()} ETB`, icon: Wallet, color: 'text-emerald-600', bg: 'bg-emerald-50' },
              { label: t('common.yearly_revenue'), value: `${summary.totalYearlyRevenue.toLocaleString()} ETB`, icon: Banknote, color: 'text-purple-600', bg: 'bg-purple-50' }
            ].map(s => (
              <div key={s.label} className="card flex items-center gap-4">
                <div className={`p-3 rounded-lg ${s.bg}`}><s.icon className={`w-5 h-5 ${s.color}`} /></div>
                <div><p className="text-2xl font-bold">{s.value}</p><p className="text-xs text-gray-500">{s.label}</p></div>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            {activeTab === 'monthly' && (
              <button onClick={handlePayAllFiltered} className="btn btn-primary flex items-center gap-2">
                <Check className="w-4 h-4" /> {t('common.pay_all_filtered')}
              </button>
            )}
          </div>

          <div className="table-container">
            <table className="table">
              <thead className="table-header">
                <tr>
                  <th>{t('common.members')}</th>
                  <th>{t('common.amount')}</th>
                  <th>{t('common.status')}</th>
                  <th className="text-right">{t('common.action')}</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {loading ? (
                  <tr><td colSpan={4} className="py-20 text-center"><Loader2 className="w-8 h-8 animate-spin mx-auto" /></td></tr>
                ) : activeTab === 'monthly' ? (
                  members.map(m => (
                    <tr key={m._id}>
                      <td><p className="font-medium">{m.fullName}</p><p className="text-xs text-gray-500">{m.memberId} • {m.branch}</p></td>
                      <td className="font-semibold">{m.fee.toLocaleString()}</td>
                      <td><span className={`badge ${m.paymentStatus === 'Paid' ? 'badge-success' : 'badge-danger'}`}>{t(`common.${m.paymentStatus.toLowerCase()}`)}</span></td>
                      <td className="text-right">
                        {m.paymentStatus === 'Unpaid' ? (
                          <button onClick={() => handleSavePayment(m)} disabled={savingId === m._id} className="btn btn-primary btn-sm">
                            {savingId === m._id ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Save className="w-4 h-4 mr-1" /> {t('common.save')}</>}
                          </button>
                        ) : (
                          <button onClick={() => setConfirmDeletePayment({ open: true, id: m.paymentId })} className="btn btn-ghost btn-sm text-red-600"><Trash2 className="w-4 h-4" /></button>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  payments.map(p => (
                    <tr key={p.id}>
                      <td><p className="font-medium">{p.memberInfo?.fullName}</p><p className="text-xs text-gray-500">{p.memberId} • {p.memberInfo?.branch}</p></td>
                      <td className="font-semibold">{p.amount.toLocaleString()}</td>
                      <td><span className="badge badge-success">{p.status}</span></td>
                      <td className="text-right">
                        <button onClick={() => setSelectedReceiptId(p.receiptId)} className="btn btn-ghost btn-sm text-primary"><Download className="w-4 h-4" /></button>
                        <button onClick={() => setConfirmDeletePayment({ open: true, id: p.id || null })} className="btn btn-ghost btn-sm text-red-600"><Trash2 className="w-4 h-4" /></button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="card py-20 text-center">
          <Filter className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold">{t('common.filter_to_view')}</h3>
          <p className="text-gray-500">{t('common.filter_desc')}</p>
        </div>
      )}

      {selectedReceiptId && <ReceiptModal receiptId={selectedReceiptId} onClose={() => setSelectedReceiptId(null)} />}
      
      <ConfirmDialog
        isOpen={confirmPayAll}
        onClose={() => setConfirmPayAll(false)}
        onConfirm={doPayAll}
        title={t('common.pay_all_filtered')}
        message={`Are you sure you want to record payments for ${pendingPayAllMembers.length} members?`}
      />

      <ConfirmDialog
        isOpen={confirmDeletePayment.open}
        onClose={() => setConfirmDeletePayment({ open: false, id: null })}
        onConfirm={doDeletePayment}
        title={t('common.reverse_payment')}
        message="Are you sure you want to delete this payment record? This will also void the receipt."
        type="danger"
      />
    </motion.div>
  )
}

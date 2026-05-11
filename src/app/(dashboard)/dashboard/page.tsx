"use client"

import { useState, useEffect } from 'react'
import api from '@/lib/frontend/api'
import { useAuth } from '@/context/AuthContext'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import PageLoader from '@/components/PageLoader'
import { Users, DollarSign, TrendingUp, AlertTriangle } from 'lucide-react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell
} from 'recharts'

interface DashboardData {
  summary: {
    totalMembers: number
    activeMembers: number
    yearlyRevenue: number
    monthlyRevenue: number
    pendingPayments: number
    defaultedMembers: number
  }
  membersByType: Array<{ _id: string; count: number }>
  membersByBranch: Array<{ _id: string; count: number }>
  membersByCluster: Array<{ _id: string; count: number }>
  membersBySector: Array<{ _id: string; count: number }>
  membersByCategory: Array<{ _id: string; count: number }>
  paymentTrend: Array<{ _id: { year: number; month: number }; revenue: number; count: number }>
  topContributors: Array<{ fullName: string; memberId: string; branch: string; contribution: { monthlyFee: number } }>
  revenueByType: Array<{ _id: string; totalRevenue: number }>
  scopedToSector: boolean
}

const COLORS = ['#C6930B', '#0F172A', '#1E293B', '#475569', '#EAB308', '#926C08', '#FDE047', '#D1D5DB']

export default function DashboardPage() {
  const { user } = useAuth()
  const { t, i18n } = useTranslation()
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)

  const isSectorOfficer = user?.role === 'sector_officer'

  useEffect(() => {
    api.get('/dashboard/stats')
      .then(res => setData(res.data.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <PageLoader message={t('common.analytics_loading')} />
  }

  if (!data) {
    return <div className="text-center text-rose-500 py-20 font-bold">{t('common.dashboard_fail')}</div>
  }

  const statCards = [
    {
      title: isSectorOfficer ? t('common.sector_members') : t('common.total_members'),
      value: data.summary.totalMembers,
      icon: Users,
      color: 'text-slate-900 dark:text-white',
      borderColor: 'border-slate-200 dark:border-slate-800',
      subtext: `${data.summary.activeMembers} ${t('common.active')} ${t('common.members')}`
    },
    {
      title: isSectorOfficer ? t('common.sector_revenue') : t('common.yearly_revenue'),
      value: `ETB ${Number(data.summary.yearlyRevenue).toLocaleString()}`,
      icon: DollarSign,
      color: 'text-[var(--gold)]',
      borderColor: 'border-[var(--gold)]/30',
      subtext: `ETB ${Number(data.summary.monthlyRevenue).toLocaleString()} ${t('common.just_now')}`
    },
    {
      title: t('common.payment_status'),
      value: data.summary.pendingPayments,
      icon: AlertTriangle,
      color: 'text-rose-600',
      borderColor: 'border-rose-100 dark:border-rose-900/30',
      subtext: `${data.summary.defaultedMembers} ${t('common.inactive')}`
    },
    {
      title: t('common.performance'),
      value: '+12.5%',
      icon: TrendingUp,
      color: 'text-emerald-600',
      borderColor: 'border-emerald-100 dark:border-emerald-900/30',
      subtext: t('common.growth_vs_last_year'),
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-2">
          {t('common.prosperity_party')} <span className="text-[var(--gold)]">{t('common.app_title')}</span>
        </h1>
        {isSectorOfficer ? (
          <p className="text-[11px] text-slate-500 font-medium uppercase tracking-widest">
            {t('common.sector')}: <span className="text-[var(--gold)] font-bold">{user?.assignedSectorUnit?.name || 'Assigned Sector'}</span>
          </p>
        ) : (
          <p className="text-[11px] text-slate-500 font-medium uppercase tracking-widest">{t('common.branch_overview')}</p>
        )}
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statCards.map((card, idx) => (
          <div key={idx} className={`card border-b-2 ${card.borderColor} flex flex-col gap-2 shadow-sm`}>
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800">
                <card.icon className={`w-4 h-4 ${card.color}`} />
              </div>
            </div>
            <div>
              <p className="text-xl font-black text-slate-900 dark:text-white">{card.value}</p>
              <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{card.title}</p>
            </div>
            <p className="text-[9px] font-medium text-slate-400 border-t border-slate-50 dark:border-slate-800 pt-1.5 mt-1">
              {card.subtext}
            </p>
          </div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">{t('common.revenue_trend')}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.paymentTrend.slice(-12)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="_id.month" tickFormatter={(m) => t(`common.${['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'][m-1]}`)} />
              <YAxis />
              <Tooltip formatter={(value: number) => `ETB ${value.toLocaleString()}`} />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#0ea5e9" strokeWidth={2} name="Revenue" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">
            {isSectorOfficer ? t('common.members_by_category') : t('common.members_by_type')}
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={isSectorOfficer ? (data.membersByCategory?.length ? data.membersByCategory : data.membersByType) : data.membersByType}
                cx="50%" cy="50%" labelLine={false}
                label={({ _id, percent }: any) => `${t(_id)} (${(percent * 100).toFixed(0)}%)`}
                outerRadius={80} fill="#8884d8" dataKey="count"
              >
                {(isSectorOfficer ? (data.membersByCategory?.length ? data.membersByCategory : data.membersByType) : data.membersByType).map((_: any, index: number) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value, name, props) => [value, t(props.payload._id)]} />
              <Legend formatter={(value) => t(value)} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {!isSectorOfficer && (
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">{t('common.members_by_unit')}</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data.membersByBranch}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="_id" tick={{ fontSize: 10 }} angle={-45} textAnchor="end" height={80} tickFormatter={(v) => t(v)} />
                <YAxis />
                <Tooltip formatter={(value, name, props) => [value, t(props.payload._id)]} />
                <Bar dataKey="count" fill="#0ea5e9" name={t('common.members')} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">{t('common.top_contributors')}</h3>
          <div className="space-y-3">
            {data.topContributors.length === 0 ? (
              <p className="text-center text-gray-400 py-6">{t('common.no_contributors')}</p>
            ) : (
              data.topContributors.map((member, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-[var(--navy)] text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-medium text-sm">{member.fullName}</p>
                      <p className="text-xs text-gray-500">{member.memberId} · {member.branch}</p>
                    </div>
                  </div>
                  <span className="font-semibold text-emerald-600 text-sm">ETB {member.contribution.monthlyFee.toLocaleString()}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

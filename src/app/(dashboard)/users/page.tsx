'use client'

import { useState, useEffect } from 'react'
import {
  Users, Plus, Edit2, Trash2, Key, Shield, Building2,
  Search, Loader2, CheckCircle2, AlertCircle, X, Eye, EyeOff, ToggleLeft, ToggleRight
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

interface UserAccount {
  id: string
  username: string
  email: string
  fullName: string
  role: 'admin' | 'sector_officer' | 'expert'
  sectorUnitId: number | null
  isActive: boolean
  profilePic: string | null
  createdAt: number
}

const emptyForm = {
  username: '', email: '', fullName: '',
  role: 'sector_officer' as 'admin' | 'sector_officer' | 'expert',
  sectorUnitId: '', password: '', isActive: true
}

export default function UserManagementPage() {
  const { t } = useTranslation()
  const [users, setUsers] = useState<UserAccount[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  
  // Modal state
  const [showModal, setShowModal] = useState(false)
  const [editingUser, setEditingUser] = useState<UserAccount | null>(null)
  const [form, setForm] = useState({ ...emptyForm })
  const [saving, setSaving] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ type, message })
    setTimeout(() => setToast(null), 4000)
  }

  const fetchUsers = async () => {
    setLoading(true)
    try {
      const res = await axios.get('/api/users')
      setUsers(res.data.data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchUsers() }, [])

  const handleSave = async () => {
    setSaving(true)
    try {
      if (editingUser) {
        await axios.put(`/api/users/${editingUser.id}`, form)
      } else {
        await axios.post('/api/users', form)
      }
      showToast('success', 'User saved successfully')
      setShowModal(false)
      fetchUsers()
    } catch (err: any) {
      showToast('error', err.response?.data?.message || 'Failed to save user')
    } finally {
      setSaving(false)
    }
  }

  const filtered = users.filter(u =>
    u.fullName.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase()) ||
    u.username.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-6 space-y-6">
      {/* Toast */}
      {toast && (
        <div className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-5 py-4 rounded-xl shadow-xl ${
          toast.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
        }`}>
          {toast.type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
          <span className="font-medium">{toast.message}</span>
        </div>
      )}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">User Management (Clerk)</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage system user accounts via Clerk</p>
        </div>
        <button 
          onClick={() => { setEditingUser(null); setForm({...emptyForm}); setShowModal(true) }} 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add User
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Search users..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700/50 border-b dark:border-gray-700">
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">User</th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Username</th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Role</th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={4} className="py-20 text-center"><Loader2 className="w-8 h-8 animate-spin mx-auto text-blue-500" /></td></tr>
            ) : filtered.map(u => (
              <tr key={u.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 font-bold overflow-hidden">
                      {u.profilePic ? <img src={u.profilePic} alt="" className="w-full h-full object-cover" /> : u.fullName.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{u.fullName}</div>
                      <div className="text-xs text-gray-500">{u.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-mono text-sm">@{u.username}</td>
                <td className="px-6 py-4 uppercase text-xs font-bold tracking-wider text-blue-600">{u.role}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-600 transition-colors"><Edit2 className="w-4 h-4" /></button>
                    <button className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-red-600 transition-colors"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
          >
            <div className="flex items-center justify-between p-6 border-b dark:border-gray-700">
              <h2 className="text-xl font-bold">{editingUser ? 'Edit User' : 'Add New User'}</h2>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"><X className="w-5 h-5" /></button>
            </div>
            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                  <input 
                    className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none" 
                    value={form.fullName} onChange={e => setForm({...form, fullName: e.target.value})} 
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
                  <input 
                    className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none" 
                    value={form.username} onChange={e => setForm({...form, username: e.target.value})} 
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                <input 
                  className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none" 
                  value={form.email} onChange={e => setForm({...form, email: e.target.value})} 
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Role</label>
                <select 
                  className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={form.role} onChange={e => setForm({...form, role: e.target.value as any})}
                >
                  <option value="admin">Admin</option>
                  <option value="sector_officer">Sector Officer</option>
                  <option value="expert">Expert</option>
                </select>
              </div>
              {!editingUser && (
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Initial Password</label>
                  <div className="relative">
                    <input 
                      type={showPassword ? 'text' : 'password'}
                      className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none" 
                      value={form.password} onChange={e => setForm({...form, password: e.target.value})} 
                    />
                    <button 
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-700/50 flex justify-end gap-3 border-t dark:border-gray-700">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors">Cancel</button>
              <button 
                onClick={handleSave}
                disabled={saving}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold shadow-lg shadow-blue-500/30 flex items-center gap-2 transition-all"
              >
                {saving && <Loader2 className="w-4 h-4 animate-spin" />}
                {editingUser ? 'Save Changes' : 'Create User'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

"use client"

import { useState, useEffect, useRef } from 'react'
import api from '@/lib/frontend/api'
import { useAuth } from '@/context/AuthContext'
import { useTranslation } from 'react-i18next'
import { Camera, Save, Key, User, Mail, AtSign, Shield, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import PageLoader from '@/components/PageLoader'

interface Toast { type: 'success' | 'error'; message: string }

export default function ProfilePage() {
  const { t } = useTranslation()
  const { user, updateUser } = useAuth()
  const fileRef = useRef<HTMLInputElement>(null)

  const [profile, setProfile] = useState({
    fullName: '',
    email: '',
    username: '',
  })
  const [passwordForm, setPasswordForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' })
  const [preview, setPreview] = useState<string | null>(null)
  const [avatarFile, setAvatarFile] = useState<File | null>(null)
  const [saving, setSaving] = useState(false)
  const [savingPassword, setSavingPassword] = useState(false)
  const [uploadingAvatar, setUploadingAvatar] = useState(false)
  const [loading, setLoading] = useState(true)
  const [toast, setToast] = useState<Toast | null>(null)
  const [sectorUnit, setSectorUnit] = useState<string>('')

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ type, message })
    setTimeout(() => setToast(null), 4000)
  }

  useEffect(() => {
    api.get('/users/me').then(res => {
      const u = res.data.data
      setProfile({ fullName: u.fullName || '', email: u.email || '', username: u.username || '' })
      setSectorUnit(u.assignedSectorUnit?.name || '')
      if (u.profilePic) setPreview(u.profilePic)
    }).catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setAvatarFile(file)
    setPreview(URL.createObjectURL(file))
  }

  const handleSaveAvatar = async () => {
    if (!avatarFile) return
    setUploadingAvatar(true)
    try {
      const formData = new FormData()
      formData.append('avatar', avatarFile)
      // Note: Implementation of file upload might vary based on server setup
      // For now, we simulate success if the endpoint isn't fully ready for multipart in Next.js App Router
      const res = await api.post('/users/me/avatar', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      const newPic = res.data.data.profilePic
      setPreview(newPic)
      updateUser({ profilePic: newPic })
      setAvatarFile(null)
      showToast('success', t('common.profile_pic_updated'))
    } catch (err: any) {
      showToast('error', err.response?.data?.message || 'Failed to upload picture.')
    } finally {
      setUploadingAvatar(false)
    }
  }

  const handleSaveProfile = async () => {
    setSaving(true)
    try {
      await api.put('/users/me', profile)
      updateUser(profile)
      showToast('success', t('common.profile_updated'))
    } catch (err: any) {
      showToast('error', err.response?.data?.message || 'Failed to update profile.')
    } finally {
      setSaving(false)
    }
  }

  const handleChangePassword = async () => {
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      showToast('error', t('common.passwords_dont_match'))
      return
    }
    setSavingPassword(true)
    try {
      await api.put('/users/me/password', {
        currentPassword: passwordForm.currentPassword,
        newPassword: passwordForm.newPassword
      })
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' })
      showToast('success', t('common.password_changed'))
    } catch (err: any) {
      showToast('error', err.response?.data?.message || 'Failed to change password.')
    } finally {
      setSavingPassword(false)
    }
  }

  const ROLE_COLORS: Record<string, string> = {
    admin: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
    sector_officer: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    expert: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
  }

  if (loading) return <PageLoader />

  return (
    <div className="max-w-3xl mx-auto space-y-6 pt-10">
      {toast && (
        <div className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-5 py-4 rounded-xl shadow-xl animate-in slide-in-from-right-4 ${toast.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
          {toast.type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
          <span className="font-medium">{toast.message}</span>
        </div>
      )}

      <div>
        <h1 className="text-2xl font-bold">{t('common.my_profile')}</h1>
        <p className="text-gray-600 dark:text-gray-400">{t('common.profile_subtitle')}</p>
      </div>

      <div className="card flex flex-col sm:flex-row items-center gap-6">
        <div className="relative group">
          <div className="w-24 h-24 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-3xl font-bold overflow-hidden border-4 border-white dark:border-gray-800">
            {preview ? <img src={preview} alt="avatar" className="w-full h-full object-cover" /> : <span>{user?.fullName?.charAt(0)}</span>}
          </div>
          <button onClick={() => fileRef.current?.click()} className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Camera className="w-7 h-7 text-white" />
          </button>
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
        </div>

        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-xl font-bold">{user?.fullName}</h2>
          <p className="text-gray-500 text-sm">{user?.email}</p>
          <div className="flex flex-wrap gap-2 mt-2 justify-center sm:justify-start">
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${ROLE_COLORS[user?.role || 'expert']}`}>
              <Shield className="w-3 h-3 inline mr-1" />
              {t(`common.${user?.role || 'expert'}`)}
            </span>
            {sectorUnit && <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800">{sectorUnit}</span>}
          </div>
        </div>

        {avatarFile && (
          <button onClick={handleSaveAvatar} disabled={uploadingAvatar} className="btn btn-primary flex items-center gap-2">
            {uploadingAvatar ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {t('common.save_photo')}
          </button>
        )}
      </div>

      <div className="card space-y-5">
        <h3 className="text-lg font-semibold flex items-center gap-2 text-left"><User className="w-5 h-5 text-primary" /> {t('common.personal_information')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div>
            <label className="block text-sm font-medium mb-1">{t('common.full_name')}</label>
            <input className="input" value={profile.fullName} onChange={e => setProfile(p => ({ ...p, fullName: e.target.value }))} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t('common.username')}</label>
            <input className="input" value={profile.username} onChange={e => setProfile(p => ({ ...p, username: e.target.value }))} />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">{t('common.email')}</label>
            <input className="input" type="email" value={profile.email} onChange={e => setProfile(p => ({ ...p, email: e.target.value }))} />
          </div>
        </div>
        <div className="flex justify-end">
          <button onClick={handleSaveProfile} disabled={saving} className="btn btn-primary flex items-center gap-2">
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {t('common.save_changes')}
          </button>
        </div>
      </div>

      <div className="card space-y-5">
        <h3 className="text-lg font-semibold flex items-center gap-2 text-left"><Key className="w-5 h-5 text-primary" /> {t('common.reset_password')}</h3>
        <div className="space-y-4 text-left">
          <div>
            <label className="block text-sm font-medium mb-1">{t('common.current_password')}</label>
            <input className="input" type="password" value={passwordForm.currentPassword} onChange={e => setPasswordForm(p => ({ ...p, currentPassword: e.target.value }))} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">{t('common.new_password')}</label>
              <input className="input" type="password" value={passwordForm.newPassword} onChange={e => setPasswordForm(p => ({ ...p, newPassword: e.target.value }))} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{t('common.confirm_new_password')}</label>
              <input className="input" type="password" value={passwordForm.confirmPassword} onChange={e => setPasswordForm(p => ({ ...p, confirmPassword: e.target.value }))} />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button onClick={handleChangePassword} disabled={savingPassword} className="btn btn-primary flex items-center gap-2">
            {savingPassword ? <Loader2 className="w-4 h-4 animate-spin" /> : <Key className="w-4 h-4" />}
            {t('common.reset_password')}
          </button>
        </div>
      </div>
    </div>
  )
}

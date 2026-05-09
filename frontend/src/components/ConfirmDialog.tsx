import { useEffect, useRef } from 'react'
import { AlertCircle, CheckCircle, Trash2, RotateCcw, Info } from 'lucide-react'

export type ConfirmDialogVariant = 'danger' | 'warning' | 'info' | 'success'

interface ConfirmDialogProps {
  open: boolean
  title: string
  message: string
  confirmLabel?: string
  cancelLabel?: string
  variant?: ConfirmDialogVariant
  onConfirm: () => void
  onCancel: () => void
}

const variantConfig = {
  danger: {
    icon: Trash2,
    iconBg: 'bg-red-100 dark:bg-red-900/30',
    iconColor: 'text-red-600 dark:text-red-400',
    confirmBtn: 'bg-red-600 hover:bg-red-700 text-white',
    border: 'border-red-100 dark:border-red-900/30',
  },
  warning: {
    icon: AlertCircle,
    iconBg: 'bg-amber-100 dark:bg-amber-900/30',
    iconColor: 'text-amber-600 dark:text-amber-400',
    confirmBtn: 'bg-amber-600 hover:bg-amber-700 text-white',
    border: 'border-amber-100 dark:border-amber-900/30',
  },
  info: {
    icon: Info,
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
    confirmBtn: 'bg-blue-600 hover:bg-blue-700 text-white',
    border: 'border-blue-100 dark:border-blue-900/30',
  },
  success: {
    icon: CheckCircle,
    iconBg: 'bg-green-100 dark:bg-green-900/30',
    iconColor: 'text-green-600 dark:text-green-400',
    confirmBtn: 'bg-green-600 hover:bg-green-700 text-white',
    border: 'border-green-100 dark:border-green-900/30',
  },
}

export default function ConfirmDialog({
  open,
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  variant = 'info',
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  const cancelRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (open) cancelRef.current?.focus()
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCancel()
    }
    if (open) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, onCancel])

  if (!open) return null

  const config = variantConfig[variant]
  const Icon = config.icon

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onCancel}
      />

      {/* Dialog */}
      <div
        className={`relative z-10 w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border ${config.border} animate-in fade-in zoom-in-95 duration-200`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-title"
      >
        <div className="p-6">
          {/* Icon + Title */}
          <div className="flex items-start gap-4">
            <div className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${config.iconBg}`}>
              <Icon className={`w-5 h-5 ${config.iconColor}`} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 id="confirm-title" className="text-base font-semibold text-gray-900 dark:text-gray-100">
                {title}
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {message}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex items-center justify-end gap-3">
            <button
              ref={cancelRef}
              onClick={onCancel}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              {cancelLabel}
            </button>
            <button
              onClick={onConfirm}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${config.confirmBtn}`}
            >
              {confirmLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

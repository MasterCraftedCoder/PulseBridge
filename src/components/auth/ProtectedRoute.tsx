import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { SkeletonCard } from '@/components/ui/SkeletonCard'

interface ProtectedRouteProps {
  children: React.ReactNode
  requireRole?: 'citizen' | 'volunteer' | 'admin'
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requireRole 
}) => {
  const { user, profile, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <SkeletonCard className="w-96" />
      </div>
    )
  }

  if (!user) {
    return <Navigate to={`/auth?next=${location.pathname}`} replace />
  }

  if (requireRole && profile?.role !== requireRole) {
    return <Navigate to="/role-selection" replace />
  }

  return <>{children}</>
}

export default ProtectedRoute
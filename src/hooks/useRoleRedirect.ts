import { useNavigate } from 'react-router-dom';
import { useAuth } from './useAuth';

export function useRoleRedirect() {
  const { role } = useAuth();
  const navigate = useNavigate();

  function redirectToDashboard() {
    if (role === 'admin') navigate('/admin/dashboard');
    else if (role === 'volunteer') navigate('/volunteer/dashboard');
    else navigate('/dashboard');
  }

  return { redirectToDashboard };
} 
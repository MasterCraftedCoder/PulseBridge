import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const NavBar: React.FC = () => {
  const { user, role, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <nav className="bg-blue-700 text-white px-4 py-2 flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <Link to="/" className="font-bold text-lg">PulseBridge</Link>
        <Link to="/dashboard">Dashboard</Link>
        {role === 'admin' && <Link to="/admin/dashboard">Admin</Link>}
        {role === 'volunteer' && <Link to="/volunteer/dashboard">Volunteer</Link>}
        <Link to="/emergency">Emergency</Link>
      </div>
      <div className="flex gap-4 items-center">
        {!user && <Link to="/login">Login</Link>}
        {!user && <Link to="/signup">Sign Up</Link>}
        {user && <button className="btn btn-sm" onClick={handleLogout}>Logout</button>}
      </div>
    </nav>
  );
}; 
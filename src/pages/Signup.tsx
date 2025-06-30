import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useRoleRedirect } from '../hooks/useRoleRedirect';

const Signup: React.FC = () => {
  const { signup } = useAuth();
  const { redirectToDashboard } = useRoleRedirect();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await signup(form.email, form.password);
    setLoading(false);
    if (error) setError(error.message);
    else redirectToDashboard();
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full border rounded px-3 py-2" type="email" required />
        <input name="password" value={form.password} onChange={handleChange} placeholder="Password" className="w-full border rounded px-3 py-2" type="password" required />
        {error && <div className="text-red-600">{error}</div>}
        <button type="submit" className="btn btn-primary w-full" disabled={loading}>{loading ? 'Signing up...' : 'Sign Up'}</button>
      </form>
    </div>
  );
};

export default Signup; 
import React, { useState } from 'react';
import { useVolunteerRegistration } from '../../hooks/useVolunteerRegistration';

interface Props {
  open: boolean;
  onClose: () => void;
}

export const VolunteerRegistrationModal: React.FC<Props> = ({ open, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const { register, loading, error, success } = useVolunteerRegistration();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await register(form);
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Become a Volunteer</h2>
        {success ? (
          <div className="text-green-600 mb-4">Thank you for registering! We will contact you soon.</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="w-full border rounded px-3 py-2" required />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full border rounded px-3 py-2" type="email" required />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="w-full border rounded px-3 py-2" required />
            {error && <div className="text-red-600">{error}</div>}
            <div className="flex gap-2 justify-end">
              <button type="button" className="btn" onClick={onClose}>Cancel</button>
              <button type="submit" className="btn btn-primary" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}; 
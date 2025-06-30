import React, { useState, useEffect } from 'react';
import { useIncidentReport } from '../../hooks/useIncidentReport';

interface Props {
  open: boolean;
  onClose: () => void;
}

export const IncidentReportModal: React.FC<Props> = ({ open, onClose }) => {
  const [form, setForm] = useState({ description: '', lat: '', lng: '' });
  const { report, loading, error, success } = useIncidentReport();

  useEffect(() => {
    if (open && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setForm((f) => ({ ...f, lat: pos.coords.latitude.toString(), lng: pos.coords.longitude.toString() }));
        },
        () => {},
        { enableHighAccuracy: true }
      );
    }
  }, [open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await report(form);
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Emergency SOS</h2>
        {success ? (
          <div className="text-green-600 mb-4">Your emergency has been reported. Help is on the way!</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea name="description" value={form.description} onChange={handleChange} placeholder="Describe your emergency..." className="w-full border rounded px-3 py-2" required />
            <div className="flex gap-2">
              <input name="lat" value={form.lat} onChange={handleChange} placeholder="Latitude" className="w-full border rounded px-3 py-2" required />
              <input name="lng" value={form.lng} onChange={handleChange} placeholder="Longitude" className="w-full border rounded px-3 py-2" required />
            </div>
            {error && <div className="text-red-600">{error}</div>}
            <div className="flex gap-2 justify-end">
              <button type="button" className="btn" onClick={onClose}>Cancel</button>
              <button type="submit" className="btn btn-primary" disabled={loading}>{loading ? 'Reporting...' : 'Report SOS'}</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}; 
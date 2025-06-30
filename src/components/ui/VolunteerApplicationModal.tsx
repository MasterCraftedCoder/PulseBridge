import React, { useState } from 'react';
import { useVolunteerApplication } from '../../hooks/useVolunteerApplication';

interface Props {
  open: boolean;
  onClose: () => void;
}

const steps = ['Personal Info', 'Skills', 'Certifications', 'Review'];

export const VolunteerApplicationModal: React.FC<Props> = ({ open, onClose }) => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    skills: '', certifications: '',
  });
  const { saveStep, submit, loading, error, success } = useVolunteerApplication();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = async () => {
    await saveStep(step + 1, form);
    setStep(step + 1);
  };
  const handleBack = () => setStep(step - 1);
  const handleSubmit = async () => {
    await submit(form);
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Volunteer Application</h2>
        <div className="mb-4 flex gap-2">
          {steps.map((s, i) => (
            <div key={s} className={`px-3 py-1 rounded ${i === step ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>{s}</div>
          ))}
        </div>
        {success ? (
          <div className="text-green-600 mb-4">Application submitted! We will review and contact you.</div>
        ) : (
          <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            {step === 0 && (
              <>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="w-full border rounded px-3 py-2" required />
                <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full border rounded px-3 py-2" type="email" required />
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="w-full border rounded px-3 py-2" required />
              </>
            )}
            {step === 1 && (
              <textarea name="skills" value={form.skills} onChange={handleChange} placeholder="List your skills..." className="w-full border rounded px-3 py-2" required />
            )}
            {step === 2 && (
              <textarea name="certifications" value={form.certifications} onChange={handleChange} placeholder="List certifications..." className="w-full border rounded px-3 py-2" required />
            )}
            {step === 3 && (
              <div className="space-y-2">
                <div><b>Name:</b> {form.name}</div>
                <div><b>Email:</b> {form.email}</div>
                <div><b>Phone:</b> {form.phone}</div>
                <div><b>Skills:</b> {form.skills}</div>
                <div><b>Certifications:</b> {form.certifications}</div>
              </div>
            )}
            {error && <div className="text-red-600">{error}</div>}
            <div className="flex gap-2 justify-end">
              <button type="button" className="btn" onClick={onClose}>Cancel</button>
              {step > 0 && <button type="button" className="btn" onClick={handleBack}>Back</button>}
              {step < steps.length - 1 && <button type="button" className="btn btn-primary" onClick={handleNext} disabled={loading}>Next</button>}
              {step === steps.length - 1 && <button type="button" className="btn btn-primary" onClick={handleSubmit} disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}; 
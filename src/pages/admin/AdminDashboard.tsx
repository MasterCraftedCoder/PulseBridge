import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { useAdminDashboardData } from '../../hooks/useAdminDashboardData';
import { supabase } from '../../lib/supabase';

const AdminDashboard: React.FC = () => {
  const { user, role } = useAuth();
  const { analytics, volunteers, applications, incidents } = useAdminDashboardData();
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleVolunteerStatus = async (id: string, status: string) => {
    const { error } = await supabase.from('volunteers').update({ status }).eq('id', id);
    if (error) setFeedback('Error updating volunteer status');
    else setFeedback('Volunteer status updated');
    setTimeout(() => setFeedback(null), 2000);
    window.location.reload(); // quick refresh for demo; use SWR or state in production
  };

  const handleApplicationStatus = async (id: string, status: string) => {
    const { error } = await supabase.from('applications').update({ status }).eq('id', id);
    if (error) setFeedback('Error updating application status');
    else setFeedback('Application status updated');
    setTimeout(() => setFeedback(null), 2000);
    window.location.reload();
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <div className="mb-2">Welcome, {user?.email} ({role})</div>
      <div className="space-y-2 mt-4">
        <Link to="/admin/analytics" className="btn w-full">Analytics</Link>
        <Link to="/admin/volunteers" className="btn w-full">Volunteers</Link>
        <Link to="/admin/applications" className="btn w-full">Applications</Link>
        <Link to="/admin/incidents" className="btn w-full">Incidents</Link>
      </div>
      {feedback && <div className="mt-4 text-green-600">{feedback}</div>}
      <div className="mt-8">
        <h3 className="font-semibold mb-2">Volunteers</h3>
        {volunteers.length === 0 ? (
          <div className="text-gray-500">No volunteers found.</div>
        ) : (
          <ul className="space-y-2">
            {volunteers.map((v: any) => (
              <li key={v.id} className="border rounded p-2 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <div><b>Name:</b> {v.name}</div>
                  <div><b>Email:</b> {v.email}</div>
                  <div><b>Status:</b> {v.status}</div>
                </div>
                <div className="flex gap-2">
                  <button className="btn btn-success btn-sm" onClick={() => handleVolunteerStatus(v.id, 'approved')}>Approve</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleVolunteerStatus(v.id, 'rejected')}>Reject</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-8">
        <h3 className="font-semibold mb-2">Applications</h3>
        {applications.length === 0 ? (
          <div className="text-gray-500">No applications found.</div>
        ) : (
          <ul className="space-y-2">
            {applications.map((a: any) => (
              <li key={a.id} className="border rounded p-2 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <div><b>Status:</b> {a.status}</div>
                  <div><b>Data:</b> {JSON.stringify(a.data)}</div>
                  <div className="text-xs text-gray-400">{new Date(a.created_at).toLocaleString()}</div>
                </div>
                <div className="flex gap-2">
                  <button className="btn btn-success btn-sm" onClick={() => handleApplicationStatus(a.id, 'approved')}>Approve</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleApplicationStatus(a.id, 'rejected')}>Reject</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-8">
        <h3 className="font-semibold mb-2">Incidents</h3>
        {incidents.length === 0 ? (
          <div className="text-gray-500">No incidents found.</div>
        ) : (
          <ul className="space-y-2">
            {incidents.map((i: any) => (
              <li key={i.id} className="border rounded p-2">
                <div><b>Status:</b> {i.status}</div>
                <div><b>Description:</b> {i.description}</div>
                <div className="text-xs text-gray-400">{new Date(i.created_at).toLocaleString()}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* TODO: Show analytics (charts, etc.) */}
    </div>
  );
};

export default AdminDashboard; 
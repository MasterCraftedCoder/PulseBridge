import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useVolunteerDashboardData } from '../../hooks/useVolunteerDashboardData';
import { TrainingVideoModal } from '../../components/ui/TrainingVideoModal';
// TODO: Import hooks for fetching training progress and incidents

const VolunteerDashboard: React.FC = () => {
  const { user, role } = useAuth();
  const [showTrainingModal, setShowTrainingModal] = useState(false);
  const { trainingProgress, incidents } = useVolunteerDashboardData();
  // TODO: Fetch training progress and incident history from Supabase
  // const { trainingProgress, incidents } = useVolunteerDashboardData();

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Volunteer Dashboard</h2>
      <div className="mb-2">Welcome, {user?.email} ({role})</div>
      <div className="space-y-4 mt-4">
        <button className="btn btn-info w-full" onClick={() => setShowTrainingModal(true)}>Watch Training Video</button>
        {/* TODO: Show training progress */}
        {/* TODO: Show incident history */}
      </div>
      <div className="mt-8">
        <h3 className="font-semibold mb-2">Training Progress</h3>
        {trainingProgress.length === 0 ? (
          <div className="text-gray-500">No training completed yet.</div>
        ) : (
          <ul className="space-y-2">
            {trainingProgress.map((tp: any) => (
              <li key={tp.video_id} className="border rounded p-2">
                <div><b>Video:</b> {tp.video_id}</div>
                <div><b>Completed:</b> {tp.completed ? 'Yes' : 'No'}</div>
                {tp.completed_at && <div className="text-xs text-gray-400">{new Date(tp.completed_at).toLocaleString()}</div>}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-8">
        <h3 className="font-semibold mb-2">Incident History</h3>
        {incidents.length === 0 ? (
          <div className="text-gray-500">No incidents reported.</div>
        ) : (
          <ul className="space-y-2">
            {incidents.map((incident: any) => (
              <li key={incident.id} className="border rounded p-2">
                <div><b>Status:</b> {incident.status}</div>
                <div><b>Description:</b> {incident.description}</div>
                <div className="text-xs text-gray-400">{new Date(incident.created_at).toLocaleString()}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <TrainingVideoModal open={showTrainingModal} onClose={() => setShowTrainingModal(false)} videoId="training-1" videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" />
    </div>
  );
};

export default VolunteerDashboard; 
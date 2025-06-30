import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useUserDashboardData } from '../hooks/useUserDashboardData';
import { VolunteerRegistrationModal } from '../components/ui/VolunteerRegistrationModal';
import { VolunteerApplicationModal } from '../components/ui/VolunteerApplicationModal';
import { IncidentReportModal } from '../components/ui/IncidentReportModal';
import { TrainingVideoModal } from '../components/ui/TrainingVideoModal';
import { DownloadBrochureButton } from '../components/ui/DownloadBrochureButton';

const UserDashboard: React.FC = () => {
  const { user, role } = useAuth();
  const [showVolunteerModal, setShowVolunteerModal] = useState(false);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [showIncidentModal, setShowIncidentModal] = useState(false);
  const [showTrainingModal, setShowTrainingModal] = useState(false);
  const { applicationStatus, incidents } = useUserDashboardData();

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
      <div className="mb-2">Welcome, {user?.email} ({role})</div>
      <div className="space-y-4 mt-4">
        <button className="btn btn-primary w-full" onClick={() => setShowVolunteerModal(true)}>Become a Volunteer</button>
        <button className="btn btn-secondary w-full" onClick={() => setShowApplicationModal(true)}>Start Application</button>
        <button className="btn btn-danger w-full" onClick={() => setShowIncidentModal(true)}>Emergency SOS</button>
        <button className="btn btn-info w-full" onClick={() => setShowTrainingModal(true)}>Watch Training Video</button>
        <DownloadBrochureButton />
      </div>
      <div className="mt-8">
        <h3 className="font-semibold mb-2">Application Status</h3>
        <div>{applicationStatus ? applicationStatus : 'No application found.'}</div>
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
      <VolunteerRegistrationModal open={showVolunteerModal} onClose={() => setShowVolunteerModal(false)} />
      <VolunteerApplicationModal open={showApplicationModal} onClose={() => setShowApplicationModal(false)} />
      <IncidentReportModal open={showIncidentModal} onClose={() => setShowIncidentModal(false)} />
      <TrainingVideoModal open={showTrainingModal} onClose={() => setShowTrainingModal(false)} videoId="training-1" videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" />
    </div>
  );
};

export default UserDashboard; 
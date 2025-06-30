import React from 'react';
import { useTrainingProgress } from '../../hooks/useTrainingProgress';

interface Props {
  open: boolean;
  onClose: () => void;
  videoId: string;
  videoUrl: string;
}
export const TrainingVideoModal: React.FC<Props> = ({ open, onClose, videoId, videoUrl }) => {
  const { markComplete, completed, loading } = useTrainingProgress(videoId);
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">Training Video</h2>
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <iframe src={videoUrl} title="Training Video" className="w-full h-64" allowFullScreen />
        </div>
        {completed ? (
          <div className="text-green-600 mb-4">Training completed!</div>
        ) : (
          <button className="btn btn-primary" onClick={markComplete} disabled={loading}>
            {loading ? 'Marking...' : 'Mark as Complete'}
          </button>
        )}
        <button className="btn ml-2" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}; 
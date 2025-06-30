import React from 'react';
import { useBrochureDownload } from '../../hooks/useBrochureDownload';

export const DownloadBrochureButton: React.FC = () => {
  const { download, loading } = useBrochureDownload();
  return (
    <button className="btn btn-secondary w-full" onClick={download} disabled={loading}>
      {loading ? 'Downloading...' : 'Download Brochure'}
    </button>
  );
}; 
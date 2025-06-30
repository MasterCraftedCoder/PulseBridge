// Offline queue and sync helpers for incidents
// TODO: Use IndexedDB for robust storage

const INCIDENT_QUEUE_KEY = 'offline_incident_queue';

export function queueIncident(incident: any) {
  const queue = JSON.parse(localStorage.getItem(INCIDENT_QUEUE_KEY) || '[]');
  queue.push(incident);
  localStorage.setItem(INCIDENT_QUEUE_KEY, JSON.stringify(queue));
}

export function getQueuedIncidents() {
  return JSON.parse(localStorage.getItem(INCIDENT_QUEUE_KEY) || '[]');
}

export function clearQueuedIncidents() {
  localStorage.removeItem(INCIDENT_QUEUE_KEY);
}

export async function syncQueuedIncidents() {
  // TODO: Sync queued incidents with server when online
} 
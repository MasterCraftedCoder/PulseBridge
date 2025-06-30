export interface ResponseTime {
  incidentId: string;
  responseSeconds: number;
  timestamp: string;
}

export interface RegionCluster {
  region: string;
  count: number;
}

export interface IncidentsPerDay {
  date: string;
  count: number;
} 
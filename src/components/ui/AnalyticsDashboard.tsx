import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { supabase } from '../../lib/supabase';
import { ResponseTime, RegionCluster, IncidentsPerDay } from '../../types/analytics';

const COLORS = ['#3b82f6', '#f59e42', '#10b981', '#ef4444', '#6366f1'];

export const AnalyticsDashboard: React.FC = () => {
  const [responseTimes, setResponseTimes] = useState<ResponseTime[]>([]);
  const [regionClusters, setRegionClusters] = useState<RegionCluster[]>([]);
  const [incidentsPerDay, setIncidentsPerDay] = useState<IncidentsPerDay[]>([]);

  useEffect(() => {
    // TODO: Fetch real analytics data from Supabase
    // Example: setResponseTimes(await fetch...)
  }, []);

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Admin Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold mb-2">Response Times</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={responseTimes}>
              <XAxis dataKey="timestamp" hide />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="responseSeconds" stroke="#3b82f6" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Region Clusters</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={regionClusters} dataKey="count" nameKey="region" cx="50%" cy="50%" outerRadius={60} fill="#8884d8">
                {regionClusters.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Incidents Per Day</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={incidentsPerDay}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="text-gray-500">Charts use sample data. TODO: Connect to Supabase analytics.</div>
    </div>
  );
}; 
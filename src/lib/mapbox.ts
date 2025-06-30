/// <reference types="vite/client" />
// Mapbox helpers for Directions API and route drawing
// TODO: Add your Mapbox access token

export const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN || '';

export async function getRoute(start: [number, number], end: [number, number]) {
  // Call Mapbox Directions API and return route geometry as GeoJSON
  const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=${MAPBOX_TOKEN}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.routes && data.routes[0]) {
      return data.routes[0].geometry;
    }
    return null;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Mapbox route error', e);
    return null;
  }
}

export function drawRouteOnMap(map: any, routeGeoJson: any) {
  // Remove existing route layer if present
  if (map.getSource('route')) {
    map.removeLayer('route');
    map.removeSource('route');
  }
  map.addSource('route', {
    type: 'geojson',
    data: {
      type: 'Feature',
      properties: {},
      geometry: routeGeoJson,
    },
  });
  map.addLayer({
    id: 'route',
    type: 'line',
    source: 'route',
    layout: { 'line-join': 'round', 'line-cap': 'round' },
    paint: { 'line-color': '#3b82f6', 'line-width': 5 },
  });
} 
import React, { useEffect, useRef } from 'react';
// @ts-ignore
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { getRoute, drawRouteOnMap, MAPBOX_TOKEN } from '../../lib/mapbox';

interface MapboxLiveMapProps {
  userLocation: [number, number] | null;
  patientLocation: [number, number];
}

export const MapboxLiveMap: React.FC<MapboxLiveMapProps> = ({ userLocation, patientLocation }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const routeLayerId = 'route-line';

  useEffect(() => {
    if (!mapRef.current) return;
    if (!mapInstance.current) {
      mapboxgl.accessToken = MAPBOX_TOKEN; // TODO: Insert your Mapbox access token
      mapInstance.current = new mapboxgl.Map({
        container: mapRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: patientLocation,
        zoom: 13,
      });
    }
    const map = mapInstance.current;

    // Add patient marker
    new mapboxgl.Marker({ color: 'red' })
      .setLngLat(patientLocation)
      .addTo(map);

    // Add user marker if available
    if (userLocation) {
      new mapboxgl.Marker({ color: 'blue' })
        .setLngLat(userLocation)
        .addTo(map);
      // Fetch and draw route
      getRoute(userLocation, patientLocation).then((routeGeoJson) => {
        if (routeGeoJson) {
          drawRouteOnMap(map, routeGeoJson);
        }
      });
    }
    return () => {
      // Clean up map instance on unmount
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userLocation?.[0], userLocation?.[1], patientLocation[0], patientLocation[1]]);

  return (
    <div className="w-full h-96 rounded-lg border" id="map-container" ref={mapRef} />
  );
}; 
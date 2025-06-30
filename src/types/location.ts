export interface Location {
  lat: number;
  lng: number;
}

export interface RouteGeometry {
  coordinates: [number, number][];
  duration: number; // seconds
  distance: number; // meters
} 
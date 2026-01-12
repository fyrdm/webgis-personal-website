import { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

// Fix for default markers in react-leaflet
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.divIcon({
  html: `<img src="${icon}" alt="marker" style="width: 25px; height: 41px;" />`,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: iconShadow,
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Component to handle map centering
function ChangeMapView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

function Map() {
  const [mapCenter, setMapCenter] = useState([51.505, -0.09]);
  const [mapZoom, setMapZoom] = useState(2);
  const [selectedLocation, setSelectedLocation] = useState(null);
  
  // Sample locations data - replace with your actual locations
  const locations = [
    {
      id: 1,
      name: "London Office",
      position: [51.505, -0.09],
      description: "Our main office in London"
    },
    {
      id: 2,
      name: "Paris Branch",
      position: [48.8566, 2.3522],
      description: "European headquarters in Paris"
    },
    {
      id: 3,
      name: "New York Office",
      position: [40.7128, -74.0060],
      description: "North American operations center"
    },
    {
      id: 4,
      name: "Tokyo Location",
      position: [35.6762, 139.6503],
      description: "Asia Pacific regional office"
    },
    {
      id: 5,
      name: "Sydney Branch",
      position: [-33.8688, 151.2093],
      description: "Australia and Oceania office"
    }
  ];

  const handleLocationClick = (location) => {
    setMapCenter(location.position);
    setMapZoom(13); // Zoom in when a location is selected
    setSelectedLocation(location.id);
    
    // Optional: Smooth scroll to map
    document.querySelector('.map-container')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const handleResetView = () => {
    setMapCenter([51.505, -0.09]);
    setMapZoom(2);
    setSelectedLocation(null);
  };

  return (
    <div className="map-page">
      <h1>Our Locations</h1>
      <p>Find our offices and branches around the world</p>
      
      <div className="map-container">
        <MapContainer 
          center={mapCenter} 
          zoom={mapZoom} 
          style={{ height: '500px', width: '100%' }}
        >
          <ChangeMapView center={mapCenter} zoom={mapZoom} />
          
          <LayersControl position="topright">
            {/* OpenStreetMap Layer */}
            <LayersControl.BaseLayer checked name="OpenStreetMap">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>
            
            {/* Satellite Layer */}
            <LayersControl.BaseLayer name="Satellite">
              <TileLayer
                attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              />
            </LayersControl.BaseLayer>
          </LayersControl>

          {/* Markers for each location */}
          {locations.map(location => (
            <Marker 
              key={location.id} 
              position={location.position}
              eventHandlers={{
                click: () => {
                  setSelectedLocation(location.id);
                },
              }}
            >
              <Popup>
                <div className="popup-content">
                  <h3>{location.name}</h3>
                  <p>{location.description}</p>
                  <small>
                    Lat: {location.position[0].toFixed(4)}, 
                    Lng: {location.position[1].toFixed(4)}
                  </small>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        
        <div className="map-controls">
          <button onClick={handleResetView} className="reset-view-btn">
            Reset World View
          </button>
        </div>
      </div>

      {/* Locations list */}
      <div className="locations-list">
        <h2>All Locations</h2>
        <div className="locations-grid">
          {locations.map(location => (
            <div 
              key={location.id} 
              className={`location-card ${selectedLocation === location.id ? 'selected' : ''}`}
              onClick={() => handleLocationClick(location)}
            >
              <h3>{location.name}</h3>
              <p>{location.description}</p>
              <div className="coordinates">
                Latitude: {location.position[0].toFixed(4)}<br />
                Longitude: {location.position[1].toFixed(4)}
              </div>
              <div className="click-hint">Click to view on map</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Map;
import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import { fromLonLat } from 'ol/proj';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { Icon, Style } from 'ol/style';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import OSM from 'ol/source/OSM';

const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new Map({
      target: mapRef.current,

        layers: [
          new TileLayer({
            source: new OSM(), // OpenStreetMap as the tile layer source
          }),
        ],
      
      view: new View({
        center: fromLonLat([0, 0]),
        zoom: 2,
      }),
    });

    // Create a marker layer
    const markerLayer = new VectorLayer({
      source: new VectorSource(),
    });

    // Create a marker style
    const markerStyle = new Style({
      image: new Icon({
        
        src: 'img/map.png',
        imgSize: [50, 100], // Resized width and height of the image
        anchor: [0.5, 1], // set anchor point to the bottom center of the icon
      }),
    });

    // Add markers to the layer
    const markerCoordinates = [
      [0, 0],
      [10, 10],
      [-10, -10],
    ];

    markerCoordinates.forEach((coordinate) => {
      const marker = new Feature({
        geometry: new Point(fromLonLat(coordinate)),
      });
      marker.setStyle(markerStyle);
      markerLayer.getSource().addFeature(marker);
    });

    // Add the marker layer to the map
    map.addLayer(markerLayer);

    // Handle click events on markers
    map.on('click', (event) => {
      map.forEachFeatureAtPixel(event.pixel, (feature) => {
        // Perform actions when a marker is clicked
        console.log('Marker clicked:', feature.getProperties());
      });
    });

    // Clean up the map instance when the component is unmounted
    return () => {
      map.setTarget(null);
    };
  }, []);

  return <div ref={mapRef} className="map-container" />;
};

export default MapComponent;

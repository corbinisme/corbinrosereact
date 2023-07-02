import React, { useEffect, useRef, useState } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import { fromLonLat } from 'ol/proj';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { Icon, Style } from 'ol/style';
import { transform } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import OSM from 'ol/source/OSM';

const MapComponent = () => {
  const mapRef = useRef(null);
  const [markers, setMarkers] = useState([])

  useEffect(() => {


    let newMarkers = [];
    const url = "https://corbinrose.com/blog/wp-json/wp/v2/posts/?categories=313&per_page=100&_embed";
                                
      fetch(url)
      .then(response => {
          if (!response.ok) {
            throw new Error("HTTP error " + response.status);
          }
          return response.json();
      })
      .then(json => {
              
          console.log(json);

          const data= json;
          console.log("getting new data", data)
          data.forEach(function(el){
              const title = el.title.rendered;
              const desc = el.excerpt.rendered;
              const linky = el.guid.rendered;
              const content = "";
              const featured = el.jetpack_featured_media_url;
              const latlong = el.acf.latlong.split(",");
              const lat = latlong[0]
              const lng = latlong[1];
              
              const obj = {
                  lat: lat,
                  lng: lng,
                  name: title,
                  desc: desc,
                  guid: linky,
                  id: el.id,
                  featured:featured
              }
              newMarkers.push(obj)
          
              
          });
          console.log("making", newMarkers);
          setMarkers(newMarkers);
          //corbinrose.maps.makeDatMap(newMarkers, target, 2); 
    })

  }, []);

  useEffect(()=>{


    const viewCenter = (markers[0]? [markers[0].lng, markers[0].lat]:  [0,0]);
    const map = new Map({
      target: mapRef.current,
      projection: 'EPSG:4326',
        layers: [
          new TileLayer({
            source: new OSM(), // OpenStreetMap as the tile layer source
          }),
        ],
      
      view: new View({
        center: fromLonLat(viewCenter),
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
   
    /*
    markerCoordinates.forEach((coordinate) => {
      const marker = new Feature({
        geometry: new Point(fromLonLat(coordinate)),
      });
      marker.setStyle(markerStyle);
      markerLayer.getSource().addFeature(marker);
    });
    */

    markers.forEach((item) => {

      const coord = [item.lng, item.lat];
      const transformedCoord = transform(coord, 'EPSG:4326', 'EPSG:3857');
      const point = new Point(transformedCoord);
      //get image here also?

      const newmarker = new Feature({
        geometry: point,
        id: item.id, 
        description: item.desc, 
        name: item.name,
        featured:item.featured

        
      });
      newmarker.setStyle(markerStyle);
      markerLayer.getSource().addFeature(newmarker);
    });

     // Add the marker layer to the map
     map.addLayer(markerLayer);

     
    /*
    let features = [];
    markers.forEach(item=>{

      const longitude = item.lng;
      const latitude = item.lat;
      

      
      const iconFeature = new Feature({
        //geometry: new ol.geom.Point(window.ol.proj.transform([longitude, latitude], 'EPSG:4326', 'EPSG:3857'))
        geometry: new Point(fromLonLat([longitude, latitude])),
      });
      

      const iconStyle = new Style({
        image: new Icon(({
          anchor: [0.5, 1],
          src: "https://corbinrose.com/blog/wp-content/uploads/pin.png"
        }))
      });
      //console.log(item.lng, item.lat)
      const id = 'icon_' + item.guid;
      iconFeature.setStyle(iconStyle);
      iconFeature.setProperties({ 'id': id, 'description': item.desc, 'name': item.name })
      features.push(iconFeature);
    })
    console.log("features", features)
    var vectorSource = new VectorLayer({
      features: features
    });

    var vectorLayer = new VectorLayer({
      source: vectorSource
    });
    map.addLayer(vectorLayer);
    */
    

   

    // Handle click events on markers
    map.on('click', (event) => {
      map.forEachFeatureAtPixel(event.pixel, (feature) => {
        // Perform actions when a marker is clicked
        const props = feature.getProperties();
        alert(props.name)
        console.log('Marker clicked:', props);
      });
    });

    // Clean up the map instance when the component is unmounted
    return () => {
      map.setTarget(null);
    };

  }, [markers])

  return (
    <div className="map-area">
      <div ref={mapRef} className="map-container" />
      <div className="map-preview">
        Load preview
      </div>
    </div>
  );
};

export default MapComponent;

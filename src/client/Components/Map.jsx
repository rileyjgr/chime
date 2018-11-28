import React, { Component } from 'react';
import ReactMapboxGl, {Layer, Feature} from "react-mapbox-gl";

// tslint:disable-next-line:no-var-requires
<<<<<<< HEAD
const TOKEN = "pk.eyJ1IjoiY2hyaXN0aWFudGF2IiwiYSI6ImNqb2JvNXNzNjBkNTAzcW92ZzdjeG9pc2cifQ.Z2_g9u8RmV7cR91dUGeFUA";
const data = require('../../server/controllers/google-apis/heatMapData.json');
=======
const data = require('../../server/controllers/google-apis/heatMapData.json');
const TOKEN = "pk.eyJ1IjoiY2hyaXN0aWFudGF2IiwiYSI6ImNqb2JvNXNzNjBkNTAzcW92ZzdjeG9pc2cifQ.Z2_g9u8RmV7cR91dUGeFUA";

>>>>>>> master
const Map = ReactMapboxGl({
  accessToken: TOKEN
});

const layerPaint = {
  'heatmap-weight': {
    property: 'indicator',
    type: 'exponential',
    stops: [[0, 0], [5, 2]]
  },
  // Increase the heatmap color weight weight by zoom level
  // heatmap-ntensity is a multiplier on top of heatmap-weight
  'heatmap-intensity': {
    stops: [[0, 0], [5, 1.2]]
  },
  // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
  // Begin color ramp at 0-stop with a 0-transparancy color
  // to create a blur-like effect.
  'heatmap-color': [
    'interpolate',
    ['linear'],
    ['heatmap-density'],
    0,
    'rgba(33,102,172,0)',
    0.25,
    'rgb(103,169,207)',
    0.5,
    'rgb(209,229,240)',
    0.8,
    'rgb(253,219,199)',
    1,
    'rgb(239,138,98)',
    2,
    'rgb(178,24,43)'
  ],
  // Adjust the heatmap radius by zoom level
  'heatmap-radius': {
    stops: [[0, 1], [5, 50]]
  }
};

export default class HeatMap extends Component {
  constructor() {
    super();
    this.state = {
      center: [-74.0060, 40.7328]
    }
  };

  render() {
    return (
      <Map
<<<<<<< HEAD
        style="mapbox://styles/mapbox/light-v9"
=======
        style= "mapbox://styles/mapbox/light-v9"
>>>>>>> master
        center={this.state.center}
        containerStyle={{
          height: "75vh",
          width: "100vw"
        }}
      >
        <Layer type="heatmap" paint={layerPaint}>
          {data.map((el, index) => (
          <Feature key={index} coordinates={el.latlng} properties={el} /> 
          ))}
        </Layer>
      </Map>
    );
  }
}

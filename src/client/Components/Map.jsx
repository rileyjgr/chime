import React, { Component } from 'react';
import ReactMapboxGl from "react-mapbox-gl";

const TOKEN = process.env.MAPBOX_ACCESS_TOKEN;

const Map = ReactMapboxGl({
  accessToken: TOKEN
});

export default class HeatMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [-74.0060, 40.7128]
    }
  };

  render() {
    return (
      <Map
        style= "mapbox://styles/mapbox/light-v9"
        center={this.state.center}
        containerStyle={{
          height: "80vh",
          width: "100vw"
        }}
      >
      </Map>
    );
  }
}
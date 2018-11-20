import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';

const TOKEN = process.env.MAPBOX_ACCESS_TOKEN;
const STYLE = "mapbox://styles/mapbox/light-v9";



export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        height: 600,
        width: 1106,
        latitude: 40.75,
        longitude: -74,
        zoom: 7
      }
    };
  }

  render() {
    return (
      <div className="reactmapgl" style={{right: 10, left: 10}}>
      <ReactMapGL 
        mapboxApiAccessToken={TOKEN}
        mapStyle={STYLE}
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
      />
      </div>
    );
  }
}
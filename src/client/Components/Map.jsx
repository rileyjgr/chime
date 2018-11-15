import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';

const TOKEN = process.env.MAPBOX_ACCESS_TOKEN;
const STYLE = "mapbox://styles/mapbox/light-v9";

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: window.innerWidth,
        height: 600,
        latitude: 40.75,
        longitude: -74,
        zoom: 7
      }
    };
  }

  render() {
    return (
      <div className="reactmapgl">
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
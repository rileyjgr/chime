import React, { Component } from 'react';
import NavBar from './Navbar';
import PanelOne from './PanelOne';
import { Button, FormGroup, FormControl, ControlLabel, Jumbotron, Nav, NavItem, Row, ProgressBar, Tooltip, ButtonToolbar, Panel, Grid, Col } from "react-bootstrap";
import '../App.css';


var user = {
  basicInfo: {
    name: "Jano Doe",
    gender: "None",
    birthday: "Jan 1, 1999",
    location: "NYC, NY",
    photo: ".png",
    bio: ""
  }
}


class Avatar extends React.Component {
  render() {
    var image = this.props.image,
      style = {
        width: this.props.width || 50,
        height: this.props.height || 50
      };

    if (!image) return null;

    return (
      <div className="avatar" style={style}>
        <img src={this.props.image} />
      </div>
    );
  }
}

class MainPanel extends React.Component {
  render() {
    var info = this.props.info;
    if (!info) return null;

    return (
      <div><NavBar />
        <PanelOne />




        <div className="top">

          <Avatar
            image={info.photo}
            width={100}
            height={100}
          />
          <h2>{info.name}</h2>
          <h3>{info.location}</h3>

          <hr />
          <p>{info.gender} | {info.birthday}</p>
        </div>

        <div className="bottom">
          <h4>Biography</h4>
          <p>{info.bio}</p>
        </div>
      </div>
    );
  }
}


class Dashboard extends React.Component {
  render() {
    return (
      <div id="user-profile">
        <PanelOne />
        <MainPanel info={user.basicInfo} />
        <ProgressBar>
          <ProgressBar active bsStyle="info" now={35} key={2} label={'35%'} />
          <Tooltip placement="bottom" className="in tip1" id="tooltip-bottom">
            Google Home
  </Tooltip>
          <ProgressBar active bsStyle="danger" now={65} key={3} label={'65%'} />
          <Tooltip placement="bottom" className="in tip2 " id="tooltip-bottom">
            Slack Users
  </Tooltip>
        </ProgressBar>;
      </div>

    )
  }
}





export default Dashboard;
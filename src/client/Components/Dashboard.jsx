<<<<<<< HEAD
import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";

import { Card } from "./Card";
import { StatsCard } from "./StatsCard";
import AnonFeedback from "./AnonFeedback";
import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "./Variables";




class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    return (
      <div className="content dashboard1">
        <Grid fluid>
          <Row className="dash">
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fas fa-robot fa-3x" />}
                statsText="Active Users"
                statsValue="99K"
                statsIcon={<i className="fas fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fas fa-clipboard-list fa-3x" />}
                statsText="Meetings"
                statsValue="180"
                statsIcon={<i className="fas fa-calendar-o" />}
                statsIconText="Schedule"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fas fa-chart-line fa-3x" />}
                statsText="Updates"
                statsValue="27"
                statsIcon={<i className="fas fa-clock-o" />}
                statsIconText="In the last month"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fas fa-cloud-sun-rain fa-3x" />}
                statsText="Weather"
                statsValue="45°"
                statsIcon={<i className="fas fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
          </Row>
          <Row className="dash">
            <Col md={8}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Users Behavior"
                category="24 Hour performance"
                stats="Updated 3 minutes ago"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataSales}
                      type="Line"
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Email Statistics"
                category="Last Campaign Performance"
                stats="Campaign sent 2 days ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
            </Col>
          </Row>

          <Row className="dash">
            <Col md={6}>
              <Card
                id="chartActivity"
                title="2018 Activity"
                category=""
                stats="Data information certified"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendBar)}</div>
                }
              />
            </Col>

            <Col md={6}>
              <Card
                title="Anonymous Feedback"
                category="HR Department"
                stats="Updated 1 minute ago"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table">
                      <AnonFeedback />
                    </table>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
=======
import React, { Component } from 'react';

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
       <div>
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
          <MainPanel info={user.basicInfo} />
        </div>
      )
    }
  }
  
export default Dashboard;
>>>>>>> master

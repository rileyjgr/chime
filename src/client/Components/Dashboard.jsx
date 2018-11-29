import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import { Card } from "./Card";
import { StatsCard } from "./StatsCard";
import AnonFeedback from "./AnonFeedback";
import Navbar from "./Navbar";
import {
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

        <Navbar />
        <Grid fluid>
          <Row className="dash dash2">
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<img className="img" src={require('../../dist/users.jpg')} />}
                statsText="Active Users"
                statsValue="99K"
                statsIcon={<i className="fas fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<img className="img" src={require('../../dist/calendar.jpg')} />}
                statsText="Meetings"
                statsValue="180"
                statsIcon={<i className="fas fa-calendar-o" />}
                statsIconText="Schedule"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<img className="updates" src={require('../../dist/artificialintelligence.jpg')} />}
                statsText="Updates"
                statsValue="27"
                statsIcon={<i className="fas fa-clock-o" />}
                statsIconText="In the last month"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<img className="img" src={require('../../dist/weather.jpg')} />}
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
                title="Anonymous Feedback"
                category="HR Department"
                stats="Updated 1 minute ago"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table table2">
                      <AnonFeedback />
                    </table>
                  </div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                className="news"
                statsIcon="fa fa-history"
                title="Company News"
                category="Daily Updates"
                stats="Updated 3 minutes ago"
                content={
                  <container style={{ height: "300px" }}>
                    <div style={{ height: "374px" }}>


                    </div>
                  </container>}
              />

            </Col>
          </Row>

          <Row className="dash">
            <Col md={12}>
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


          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
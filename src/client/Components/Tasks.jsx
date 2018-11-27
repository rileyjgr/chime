import React, { Component } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import Checkbox from "./CustomCheckbox.jsx";
import Button from "./CustomButton.jsx";
import axios from 'axios';


class Tasks extends Component {
  constructor() {
    super();
    this.state = {
      feedback: [{ "_id": "5bea1d812f9ca0088cb3d335", "message": "i dont like jano", "__v": 0 }]
    }
  }

  // componentDidMount() {
  //   axios.get(`/api/feedback`)
  //     .then(async (res) => {
  //       const feedbackData = res.data;
  //       let { message } = '';
  //       const feedback = { message };
  //       let feedbackArray = [];
  //       for (let key in feedbackData) {
  //         message = feedbackData[key].message;

  //         const newFeedback = { message };
  //         feedbackArray.push(newFeedback);
  //       }
  //       this.setState({ feedback: feedbackArray });
  //     }).catch(err => {
  //       this.setState({ feedback: err });
  //     })
  // }
  render() {
    <div id="feedback">
      {this.state.feedback.map(feeds => <div><h5>{feedback.message}</h5>></div>)}
    </div>

  }
}

export default Tasks;

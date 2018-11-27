import React, { Component } from "react";
import axios from 'axios';


class AnonFeedback extends Component {
  constructor() {
    super();
    this.state = {
      feedback: []
    }
  }

  componentDidMount() {
    axios.get(`/api/feedback`)
      .then(async (res) => {
        const feedbackData = res.data;
        let { message } = '';
        const feedback = { message };
        let feedbackArray = [];
        for (let key in feedbackData) {
          message = feedbackData[key].message;

          const newFeedback = { message };
          feedbackArray.push(newFeedback);
        }
        this.setState({ feedback: feedbackArray });
      }).catch(err => {
        this.setState({ feedback: err });
      })
  }
  render() {

    console.log(this.state.feedback);
    return (<div id="feedback">
      {this.state.feedback.map(feedback => <div><h5>{feedback.message}</h5>></div>)}
    </div>)




  }
}

export default AnonFeedback;

import React, { Component } from 'react';
import Navbar from './Navbar';

export default class License extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="wrapper tabled">
                    <div className="stage" id="intro">
                        <div className="middled">
                            <div id="license">
                                <div id="slack">
                                    As a team, Chime adheres to the Slack/Google API terms and agreement.
                                    <br />
                                    Slack-Business: In using the Slack API, developers must agree to respect our business as we respect yours. Every Application must behave in accordance with appropriate and accepted business conduct. As part of good business practices, Applications and developers are prohibited from:
                                    <ul>
                                        <li>Circumventing Slack’s intended limitations (including pricing, features and access structures). You may not use the Slack API to replicate or compete with core products or services offered by Slack</li>
                                        <li>Advertising, including display ads, within the Application experience or Slack platform. In addition, Applications may not use Data or content from Slack in any advertisements or for purposes of targeting advertisements or contacting Users, including in that Application, your other Applications, or elsewhere</li>
                                        <li>Implying a Slack endorsement, certification, affiliation or partnership unless you have explicit permission from Slack to do so</li>
                                        <li>Sub-licensing, distributing or allowing access to the Slack APIs to anyone else</li>
                                        <li>Additionally we agree to their other use limitations, as are listed in their terms <a href="https://api.slack.com/developer-policy">HERE</a></li>
                                    </ul>
                                </div>
                                <br /><br />
                                <div id="google">
                                    Google-Terms: In using Dialogflow, we adhere to all of Google terms as provided below.
                                    <ul>
                                        <li>Any data collected or used pursuant to this Agreement is in accordance with Google’s Privacy Policy.</li>
                                        <li>In order to continually innovate and improve Google Play, related products and services, and the user and Developer experience across Google products and services, Google may collect certain usage statistics from Google Play and Devices including, but not limited to, information on how the Product, Google Play, and Devices are being used.</li>
                                        <li>The data collected is used in the aggregate to improve Google Play, related products and services, and the user and Developer experience across Google products and services. Developers have access to certain data collected by Google via the Play Console.</li>
                                        <li>We also agree to the other terms laid out in their user agreement listed <a href="https://play.google.com/intl/ALL_us/about/developer-distribution-agreement.html">HERE</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

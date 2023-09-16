import React, { Component } from "react";
import "./DHIlab.css";
import logoImage from "../DHIlab/logo192.png"; // Update the path accordingly

class DHIlabLogo extends Component {
  render() {
    return (
      <React.Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
          <image
            href={logoImage}
            x="0"
            y="0"
            width="200"
            height="200"
          />
        </svg>
      </React.Fragment>
    );
  }
}

export default DHIlabLogo;
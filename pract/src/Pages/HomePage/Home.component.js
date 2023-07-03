import React, { PureComponent } from "react";

import Shopping from "../../Components/images/7118427.webp";
import "./HomeStyles.scss";
export default class Homecomponent extends PureComponent {
  render() {
    return (
      <div>
        <div className="shopy">
          <img className="shopy-img" src={Shopping} alt="" />
        </div>
      </div>
    );
  }
}

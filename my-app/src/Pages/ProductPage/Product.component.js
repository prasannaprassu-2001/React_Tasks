import React, { PureComponent } from "react";
import "./ProductStyles.scss";

export default class Productcomponent extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <div className="flex">
        <div className="flex-left">
          <div className="flex-main_image">
            <img
              src={data.image}
              className="slide"
              height={500}
              width={500}
              alt=""
            />
          </div>
          <div className="flex-right">
            <h3 className="tit">{data.title}</h3>
            <p className="des">{data.description}</p>
            <h4 className="pri">
              <small>$</small>
              {data.price}
            </h4>
          </div>
          <button>Add To Bag</button>
        </div>
      </div>
    );
  }
}

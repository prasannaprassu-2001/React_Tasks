import React, { PureComponent } from "react";
import "./ProductStyles.scss";

export default class Productcomponent extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <div>
        <div className="product">
          <div className="product-data">
            <img
              src={data.image}
              className="product-image"
              alt=""
            />
            <br /> <br />
          <button className="product-btn">Add To Bag</button>
          </div>
          <div className="product-details">
            <h3 className="product-title">{data.title}</h3>
            <p className="product-des">{data.description}</p>
            <h4 className="product-price">
              <small>$</small>
              {data.price}
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

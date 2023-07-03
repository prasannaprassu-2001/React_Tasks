import React, { PureComponent } from "react";
import "./ProductStyles.scss";

export default class Productcomponent extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <div>
        <div className="header">
          <div className="product">
            <div className="product-img">
              <img src={data.image} className="product-img-img" alt="" />
              <br /> <br />
              <button className="product-cart">Add To Bag</button>
            </div>
            <div className="product-details">
              <h1 className="product-title">{data.title}</h1>
              <p className="product-cate">{data.category}</p>
              <h4 className="product-price">
                <small>$</small>
                {data.price}
              </h4>
              <select>
                <option>Select Size</option>
                <option>XXL</option>
                <option>XL</option>
                <option>LARGE</option>
                <option>MEDIUM</option>
                <option>SMALL</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { PureComponent } from "react";
import star from "../../Components/images/146-1468904_orange-5-pointed-star-shape-orange-star-hd.png";
import { Link } from "react-router-dom";
import "./CategoryStyles.scss";

export default class CateComp extends PureComponent {
  render() {
    const { categoryData, handleSortChange } = this.props;

    return (
      <div>
        <div className="category-sort">
          <select onChange={handleSortChange} className="category-sort2">
            <option>Sort by</option>
            <option value="priceLowToHigh">Price: High to Low</option>
            <option value="priceHighToLow">Price: Low to High</option>
            <option value="titleAZ">Title: A to Z</option>
            <option value="titleZA">Title: Z to A</option>
          </select>
        </div>
        <div className="category-item">
          {categoryData.map((item, index) => {
            return (
              <div key={index} className="category-one">
                <ol key={index}>
                  <Link
                    to={`/${item.id}/${item.title}`}
                    className="category-link"
                  >
                    {}
                    <div className="category-border">
                      <li className="category-li">
                        <img
                          className="category-image"
                          src={item.image}
                          alt=""
                        />
                      </li>
                      <span className="category-tp">
                        <li className="category-title">
                          {item.title.substring(0, 10)}
                        </li>
                        <li className="category-price">${item.price}/-</li>
                      </span>

                      <li className="category-desc">
                        {item.description.substring(0, 65)}.....
                      </li>
                      <span className="category-tp">
                        <li className="category-star-icon">
                          <img src={star} alt="" height={20} />
                          <img src={star} alt="" height={20} />
                          <img src={star} alt="" height={20} />
                          <img src={star} alt="" height={20} />
                          <img src={star} alt="" height={20} />
                        </li>
                        <li>
                          <button className="category-button">BuyNow</button>
                        </li>
                      </span>
                    </div>
                  </Link>
                </ol>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

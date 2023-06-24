import React, { PureComponent } from "react";
import "./CategoryStyles.scss";
import { Link } from "react-router-dom";

class CategoryComponent extends PureComponent {
  render() {
    const { category, handleChange, categoryData, handleSortChange } =
      this.props;
    return (
      <div className="content">
        <div className="content-item">
          {category.map((items, index) => (
            <div key={index}>
              <Link to={items.category} onClick={handleChange} value={items}>
                {items}
              </Link>
            </div>
          ))}
        </div>
        <div className="sorts">
          <select onChange={handleSortChange}>
            <option value="">Sort By</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="titleAZ">Title: A to Z</option>
            <option value="titleZA">Title: Z to A</option>
          </select>
        </div>
        <div className="items">
          {categoryData.map((item, index) => {
            return (
              <div key={index} className="item">
                <Link to={`${item.id}`}>
                  <img src={item.image} height={200} width={300} alt="" />
                  <p>{item.title}</p>
                  <br />
                  <h3>{item.price}</h3>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CategoryComponent;

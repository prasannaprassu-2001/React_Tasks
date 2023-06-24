import React, { PureComponent } from "react";

import Categorycomponent from "./Category.component";

class CategoryContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      select: "",
      categoryData: [],
      sortBy: "",
    };
  }
  componentDidMount() {
    this.categorydataapi();
  }

  categorydataapi = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => this.setState({ category: data }))
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = (event) => {
    const select = event.target.innerHTML;
    this.setState({ select: select }, () => {
      this.apidata();
    });
  };
  apidata = () => {
    const store = this.state.select;
    console.log(store);
    fetch(`https://fakestoreapi.com/products/category/${store}`)
      .then((res) => res.json())
      .then((data) => this.setState({ categoryData: data }))
      .catch((err) => {
        console.log(err);
      });
  };

  handleSortChange = (event) => {
    const sortBy = event.target.value;
    this.setState({ sortBy }, () => {
      this.sortCategoryData();
    });
  };

  sortCategoryData = () => {
    const { categoryData, sortBy } = this.state;
    let sortedData = [...categoryData];

    switch (sortBy) {
      case "priceLowToHigh":
        sortedData.sort((a, b) => a.price - b.price);
        break;
      case "priceHighToLow":
        sortedData.sort((a, b) => b.price - a.price);
        break;
      case "titleAZ":
        sortedData.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "titleZA":
        sortedData.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    this.setState({ categoryData: sortedData });
  };

  render() {
    const { category, categoryData } = this.state;

    return (
      <div>
        <Categorycomponent
          category={category}
          handleChange={this.handleChange}
          categoryData={categoryData}
          handleSortChange={this.handleSortChange}
          handleProductClick={this.handleProductClick}
        />
      </div>
    );
  }
}

export default CategoryContainer;

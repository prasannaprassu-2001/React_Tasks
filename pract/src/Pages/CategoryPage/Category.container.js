import React, { PureComponent } from "react";
import Categorycomponent from "./Category.component";
class CategoryContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      select: "",
      categoryData: [],
      sortBy: "",
    };
  }
  componentDidMount() {
    this.apidata();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.params.items !== this.props.params.items) {
      this.apidata();
    }
  }
  apidata = () => {
    const { items } = this.props.params;
    fetch(`https://fakestoreapi.com/products/category/${items}`)
      .then((res) => res.json())
      .then((data) => this.setState({ categoryData: data }))
      .catch((err) => {
        console.log(err);
      });
  };

  handleSortChange = (event) => {
    const sortBy = event.target.value;
    console.log(sortBy);
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
    const { categoryData } = this.state;

    return (
      <div>
        <Categorycomponent
          categoryData={categoryData}
          handleSortChange={this.handleSortChange}
        />
      </div>
    );
  }
}

export default CategoryContainer;

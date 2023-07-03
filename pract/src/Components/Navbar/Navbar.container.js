import React, { PureComponent } from "react";
import Navbarcomponent from "./Navbar.component";
export default class Navbarcontainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.categorydata();
  }

  categorydata = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => this.setState({ data: data }))
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <Navbarcomponent data={this.state.data} />
      </div>
    );
  }
}

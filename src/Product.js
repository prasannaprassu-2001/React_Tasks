import React from "react";

class Product extends React.Component {
  state = {
    Product_Name: "APPLE iPhone 13 (Starlight, 128 GB)",
    Product_img:
      "https://rukminim1.flixcart.com/image/832/832/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70 ",
    Product_Price: 65999,
    Product_qty: 1,
    Product_Total: 65999,
  };
  onIncrement = () => {
    this.setState({ Product_qty: this.state.Product_qty + 1 });
  };
  onDecrement = () => {
    this.setState({ Product_qty: this.state.Product_qty - 1 });
  };
  render() {
    return (
      <>
        <hr></hr>
        <h1>PRODUCT COMPONENT </h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <td>Product Name</td>
              <td>Image</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Total Price</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.Product_Name}</td>
              <td>
                <img src={this.state.Product_img} alt="" height="100px" />
              </td>
              <td>{this.state.Product_Price}</td>
             <td>
              <button className="decrease-button" type="button" onClick={this.onDecrement}>-</button>
              <button className="increase-button" type="button" onClick={this.onIncrement}>+</button>
             </td>
              <td>{this.state.Product_qty * this.state.Product_Price}</td>
            </tr>
            
          </tbody>
        </table>
      </>
    );
  }
}
export default Product;
import React, { Component } from "react";
import ListComponent from "./List.Component";


export default class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      newItem: "",
      editIndex: -1,
    };
    this.listfunctions = {
      handleChange: this.handleChange.bind(this),
      addItem: this.addItem.bind(this),
      removeItem: this.removeItem.bind(this),
     
      editItem:this.editItem.bind(this),
      updateItem:this.updateItem.bind(this),
      saveItem:this.saveItem.bind(this),
    };
  }
 
  

  handleChange = (event) => {
    this.setState({ newItem: event.target.value });
  };

  addItem = () => {
    if (this.state.newItem !== "") {
      this.setState((prevState) => ({
        items: [...prevState.items, this.state.newItem],
        newItem: "",
      }));
    }
  };

  removeItem = (index) => {
    this.setState((prevState) => {
      const updatedItems = [...prevState.items];
      updatedItems.splice(index, 1);
      return { items: updatedItems };
    });
  };
  editItem = (index) => {
    

  this.setState({editIndex: index, newItem:this.state.items[index]});

    // if (updatedItem !== null && updatedItem !== "") {
    //   this.setState((prevState) => {
    //     const updatedItems = [...prevState.items];
    //     updatedItems[index] = updatedItem;
    //     return { items: updatedItems };
    //   });
    // }

  };

  updateItem = (event) => {
    this.setState({newItem: event.target.value});
  };
  saveItem = (index) => {
    const { items, newItem } = this.state;
    if (newItem !== "") {
      const updatedItems = [...items];
      updatedItems[index] = newItem;
      this.setState({ items: updatedItems, newItem: "", editIndex: -1});
    }
  };
 
  render() {
    return (
      <div>
        <ListComponent {...this.state} {...this.listfunctions} />
      </div>
    );
  }
}

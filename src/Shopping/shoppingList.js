import React, { Component } from 'react';
import './shoppingList.css';

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      newItem: '',
    };
  }

  handleChange = (event) => {
    this.setState({ newItem: event.target.value });
  };

  addItem = () => {
    if (this.state.newItem !== '') {
      this.setState((prevState) => ({
        items: [...prevState.items, this.state.newItem],
        newItem: '',
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
    const { items } = this.state;
    const updatedItem = prompt('Enter a new value for the item:', items[index]);
  
    if (updatedItem !== null && updatedItem !== '') {
      this.setState((prevState) => {
        const updatedItems = [...prevState.items];
        updatedItems[index] = updatedItem;
        return { items: updatedItems };
      });
    }
  };

  render() {
    const { items, newItem } = this.state;

    return (
      <div>
        <div className="shopping-list-app">
        <h1>Shopping List App</h1>
        <div>
          <input
            type="text"
            value={newItem}
            onChange={this.handleChange}
            placeholder="Enter an item"
          />
          <button onClick={this.addItem}>Add</button>
        </div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button  onClick={() => this.removeItem(index)}>Delete</button>
              <button className="edit" onClick={() => this.editItem(index)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
      </div>
      
    );
  }
}

export default ShoppingList;
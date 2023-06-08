import React, { PureComponent } from 'react'
import "./shoppingList.scss";


class ListComponent extends PureComponent {
  render() {
    const { items, newItem,handleChange ,addItem,removeItem,editItem, saveItem,editIndex} = this.props;
      
   
    return (
      <div>
       
        <div className="shopping-list-app">
        <h1>Shopping List App 
          <img src="https://www.pngitem.com/pimgs/m/161-1612826_28-collection-of-shopping-clipart-no-background-shopping.png" alt="" />

           </h1>
       
        <div>
          <input
            type="text"
            value={newItem}
            onChange={handleChange}
            placeholder="Enter an item"
          />
          <button onClick={addItem}>Add</button>
        </div>
        <ul>
            {items.map((item, index) => (
              <li key={index}>
                {editIndex === index ? (
                  <>
                  <input
                    type="text"
                    value={newItem}
                    onChange={handleChange}
                  />
                  
                  </>
                  
                ) : (
                  item
                )}
                {editIndex === index ? (
                  <button onClick={() => saveItem(index)}>Save</button>
                ) : (
                  <>
                    <button onClick={removeItem}>Delete</button>
                    <button onClick={() => editItem(index)}>Edit</button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default ListComponent
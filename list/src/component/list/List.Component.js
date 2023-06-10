import React, { PureComponent } from 'react';
import "./shoppingList.scss";
import Shopping from "../images/shopping-card-svgrepo-com.svg";
export default class ListComponent extends PureComponent {
  render() {
    const { tasks, displayModal, editedTask, editNew } = this.props;

    return (
      <div>
        <h1 className='name'>Shopping List App
        <img src={Shopping} alt="" />

        </h1>

        <input
          type="text"
          className='input-field'
          value={editedTask}
          onChange={this.props.handleTaskChange}
          placeholder="Enter task..."
        />
        <button onClick={this.props.addTask}>Add Task</button>

        <ul>
          {tasks.map((task, index) => (
            <li key={index} className='task-name'>
              <div className='task-name-2'>
              {task}
              </div>
              <div className='task-name-edit'>
              <button  onClick={() => this.props.popup(index)}>Edit</button>
              <button onClick={() => this.props.deleteTask(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>

        {displayModal && (
          <div id="editModal" className="modal">
            <span onClick={this.props.closeModal} className="close" title="Close Modal">
              &times;
            </span>
            <div className="modal-content">
              <h1>Edit Task</h1>
              <input type="text" value={editNew} onChange={this.props.handleTaskChanges} />
              <button type="button" onClick={this.props.addTask}>
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

}




import { PureComponent } from "react";
import "./TodoList.scss";
class TodoListcomponent extends PureComponent {
  taskData = () => {
    const { taskList, HandleEdit, handleDelete } = this.props;
    return (
      taskList &&
      taskList.map((data, index) => (
        <div className="card-data" key={index}>
          <div className="card">
            <ul>
              <li>
                <p className="card-title">{data.editedTaskName}</p>
                <p className="card-content">{data.editedDescription}</p>
                <>
                  <button
                    value={index}
                    onClick={(e) => HandleEdit(e.target.value)} className="button-Edit"
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDelete(index)} className="button-Delete">Delete</button>
                </>
              </li>
            </ul>
          </div>
        </div>
    
      ))
    );
  };

  render() {
    const {
      handleClick,
      createTask,
      handleChange,
      NewTask,
      handleSave,
      error,
      // data,
      // editedDescription,
      // HandleEdit,
    } = this.props;
    return (
      <>
        <div className="task">
          <h3>Todo List</h3>
          <button className="task-btn" onClick={handleClick}>
            Create Task
          </button>
        </div>
        <div className={createTask ? "Addtask-container" : "hidden"}>
          <div className="Addtask-containerTitle">
            <p>Title:</p>
            <input
              type="text"
              className="Addtask-container-title"
              onChange={handleChange}
              name="taskName"
            />
          </div>
          <div className="Addtask-containerContent">
            <p>Content: </p>
            <textarea
              type="text"
              className="Addtask-container-title"
              onChange={handleChange}
              name="description"
            />
          </div>
          <div className="btn">
            <button className="Addtask-containerSaveBtn" onClick={NewTask}>
              Save
            </button>
            <button className="Addtask-containerCloseBtn" onClick={handleClick}>
              Close
            </button>
          </div>
        </div>
        {error && <p className="error-message">{error}</p>}
        {this.taskData()}
        <div className={this.props.edit ? "" : "hidden"}>
          <div className="card-data">
            <div className="card">
            <ul>
              <li>
                <p >Title -</p>
                <textarea name="taskName" onChange={handleChange}>
                  {this.props.taskName}
                </textarea>
                <p>Content</p>
                <textarea onChange={handleChange} name="description">
                  {this.props.description}
                </textarea>
                <button value={this.props.index} onClick={(e) => handleSave(e)}>
                  Save
                </button>
                <button onClick={this.props.handleEditt}>Cancel</button>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TodoListcomponent;

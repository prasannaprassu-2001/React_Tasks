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
                <p className="card-title">{data.TaskName}</p>
                <p className="card-content">{data.Description}</p>
                <>
                  <button
                    value={index}
                    onClick={(e) => HandleEdit(e.target.value)}
                    className="button-Edit">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className ="button-Delete">
                    Delete
                  </button>
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
      error2,
      error3,
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
          <div className="Addtask-container-modem">
            <div className="Addtask-containerTitle">
            {error && <p className="error-message">{error}</p>}
              <p>Title:</p>
              <input
                type="text"
                className="Addtask-container-title"
                value={this.props.taskName === "" ? "" : this.props.taskName}
                onChange={handleChange}
                name="taskName"
               maxLength={20}
              />
        {error2 && <p className="error-message2">{error2}</p>}

            </div>
            <div className="Addtask-containerContent">
              <p>Content: </p>
              <textarea
                type="text"
                maxLength={80}
                value={
                  this.props.description === "" ? "" : this.props.description
                }
                className="Addtask-container-title"
                onChange={handleChange}
                name="description"
              />
        {error3 && <p className="error-message3">{error3}</p>}

            </div>
            <div className="btn">
              <button className="Addtask-containerSaveBtn" onClick={NewTask}>
                Save
              </button>
              <button
                className="Addtask-containerCloseBtn"
                onClick={handleClick}
              >
                Close
              </button>
            </div>
          </div>
        </div>
        {this.taskData()}
        <div className={this.props.edit ? "" : "hidden"}>
          <div className="modal">
            <ul>
              <li>
                <div className="modal-content">
                  <div className="border">
                    <p>Title -</p>
                    <textarea
                      name="taskName"
                      className="border-edit"
                      onChange={handleChange}
                      value={this.props.taskName}
                      maxLength={80}
                    >
                      {this.props.taskName && this.props.taskName}
                    </textarea>
                  </div>
                  <div className="border">
                    <p>Content</p>
                    <textarea
                      onChange={handleChange}
                      maxLength={80}
                      className="modal-border"
                      name="description"
                      value={this.props.description}
                    >
                      {this.props.description && this.props.description}
                    </textarea>
                  </div>
                  <div className="button-data">
                    <button
                      value={this.props.index}
                      onClick={(e) => handleSave(e)}
                      className="button-Edit"
                    >
                      Save
                    </button>
                    <button
                      onClick={this.props.handleEditt}
                      className="button-Delete"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default TodoListcomponent;
import { PureComponent } from "react";
import "./TodoList.scss";
import { connect } from "react-redux";
import { addTask, editTask, deleteTask } from "../../Redux/Action"
class TodoListcomponent extends PureComponent {
  taskData = () => {
    const { taskList, editIndex, editedDescription, handleChange, handleSave, handleEdit, handleDelete } = this.props;
  
    return taskList.map((data, index) => (
      <div className="card">
      <ul key={index}>
        <li>
          <h1>Title:</h1>
          {data.taskName}
        </li>
        <li>
          <h2>Content:</h2>
          {data.description}
        </li>
        <li>
          {index === editIndex ? (
            <>
              <textarea
                value={editedDescription}
                onChange={handleChange}
                name="editedDescription"
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={() => handleEdit(-1)}>Cancel</button>
            </>
          ) : (
            <>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </>
          )}
        </li>
      </ul>
      </div>
    ));
  };
  

  

  render() {
    const { handleClick, createTask, handleChange, addTask } = this.props;

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
            <button className="Addtask-containerSaveBtn" onClick={addTask}>
              Save
            </button>
            <button className="Addtask-containerCloseBtn" onClick={handleClick}>
              Close
            </button>
          </div>
        </div>
        {this.taskData()}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    taskList: state.taskList,
    editIndex: state.editIndex,
    editedDescription: state.editedDescription,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTask(task)),
    handleEdit: (index, task) => dispatch(editTask(index, task)),
    handleDelete: (index) => dispatch(deleteTask(index)),
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListcomponent);
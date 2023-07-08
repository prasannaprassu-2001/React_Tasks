import React, { PureComponent } from "react";
import TodoListcomponent from "./TodoList.component";
import { connect } from "react-redux";
import { addTask, editTask, deleteTask } from "../../Redux/Action";

class TodoListcontainer extends PureComponent {
  state = {
    createTask: false,
    taskName: "",
    description: "",
  };

  handleClick = () => {
    this.setState((prev) => ({
      createTask: !prev.createTask,
    }));
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };


  addTask = () => {
    const { taskName, description } = this.state;
    const task = { taskName, description };
  
    this.props.addTask(task);
  
    this.setState({
      taskName: "",
      description: "",
      createTask:false,
    });
  };
  
  

  handleEdit = (index, task) => {
    this.props.handleEdit(index, task);
  };

  handleSave = () => {
    const { editIndex, editedTaskName, editedDescription } = this.props;
    const task = { taskName: editedTaskName, description: editedDescription };

    this.props.handleEdit(editIndex, task);
  };

  handleDelete = (index) => {
    this.props.handleDelete(index);
  };

  render() {
    const { createTask,taskList, taskName, description } = this.state;
    const {  editIndex, editedTaskName, editedDescription } = this.props;

    return (
      <TodoListcomponent
        createTask={createTask}
        taskName={taskName}
        description={description}
        taskList={taskList}
        editIndex={editIndex}
        editedTaskName={editedTaskName}
        editedDescription={editedDescription}
        handleClick={this.handleClick}
        handleChange={this.handleChange}
        addTask={this.addTask}
        handleEdit={this.handleEdit}
        handleSave={this.handleSave}
        handleDelete={this.handleDelete}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    taskList: state.taskList,
    editIndex: state.editIndex,
    editedTaskName: state.editedTaskName,
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoListcontainer);
import React, { PureComponent } from "react";
import TodoListcomponent from "./TodoList.component";
import { connect } from "react-redux";
import { addTask, editTask, deleteTask } from "../../Redux/Action";

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

class TodoListcontainer extends PureComponent {
  state = {
    createTask: false,
    edit: false,
    taskName: "",
    description: "",
    index: 0,
    error: "",
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

  NewTask = () => {
    const { taskName, description } = this.state;

    if (taskName === "") {
      if (description === "") {
        this.setState({
          error: "Please enter the required  fields",
        });
      }
    } else if (taskName === "") {
      this.setState({
        error: "Please enter the title field",
      });
    } else if (description === "") {
      this.setState({
        error: "Please enter the content field",
      });
    } else {
      const data = {
        editedTaskName: taskName,
        editedDescription: description,
      };
      this.props.addTask(data);
      this.setState({
        taskName: "",
        description: "",
        createTask: false,
        error: "",
      });
    }
  };
  handleEditt = () => {
    this.setState((prev) => ({
      edit: !prev.edit,
    }));
  };
  HandleEdit = (e) => {
    console.log("clicked", e.target);
    this.props.taskList.filter((data, index) => {
      if (index === JSON.parse(e)) {
        this.setState({
          index: JSON.parse(e),
          taskName: data.editedTaskName,
          description: data.editedDescription,
        });
      }
    });
    this.setState((prev) => ({
      edit: !prev.edit,
    }));
  };

  handleSave = (e) => {
    const editIndex = JSON.parse(e.target.value);
    const task = {
      editedTaskName: this.state.taskName,
      editedDescription: this.state.description,
    };
    this.props.handleEdit(editIndex, task);
    this.setState((prev) => ({
      edit: !prev.edit,
    }));
  };

  handleDelete = (index) => {
    this.props.handleDelete(index);
  };

  render() {
    const { createTask } = this.state;

    return (
      <TodoListcomponent
        {...this.state}
        {...this.props}
        createTask={createTask}
        handleClick={this.handleClick}
        handleChange={this.handleChange}
        NewTask={this.NewTask}
        HandleEdit={this.HandleEdit}
        handleSave={this.handleSave}
        handleDelete={this.handleDelete}
        handleEditt={this.handleEditt}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListcontainer);

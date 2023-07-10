import React, { PureComponent } from "react";
import TodoListcomponent from "./TodoList.component";
import { connect } from "react-redux";
import { addTask, editTask, deleteTask } from "../../Redux/Action";

const mapStateToProps = (state) => {
  return {
    taskList: state.taskList,
    editIndex: state.editIndex,
    TaskName: state.TaskName,
    Description: state.Description,
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
    error2: "",
    error3: "",
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

    if(taskName === '' && description === ''){
      this.setState({
        error: "Please enter the required fields",
        error2:"",
        error3:"",
      })
    } else if(taskName === ''){
      this.setState({
        error2: "Please enter the title field",
        error:"",
        error3:""
      })
    }else if(description === ''){
      this.setState({
        error3: "Please enter the content field",
        error:'',
        error2:"",
      })
    }else{
      const data = {
        TaskName: taskName,
        Description: description,
      };
      this.props.addTask(data);
      this.setState({
        taskName: "",
        description: "",
        createTask: false,
  
      });
    }
  };

  handleEditt = () => {
    this.setState((prev) => ({
      edit: !prev.edit,
    }));
  };
  HandleEdit = (e) => {
    this.setState((prev) => ({
      edit: !prev.edit,
    }));
    this.props.taskList.filter((data, index) => {
      if (index === JSON.parse(e)) {
        this.setState({
          index: JSON.parse(e),
          taskName: data.TaskName,
          description: data.Description,
        });
      }
    });
  };

  handleSave = (e) => {
    const editIndex = JSON.parse(e.target.value);
    const task = {
      TaskName: this.state.taskName,
      Description: this.state.description,
    };
    this.props.handleEdit(editIndex, task);
    this.setState((prev) => ({
      edit: !prev.edit,
      taskName: "",
      description: "",
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
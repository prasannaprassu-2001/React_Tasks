import React, { PureComponent } from "react";
import ListComponent from "./List.Component";


export default class Functions extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      displayModal: false,
      editedTask: '',
      editedTaskIndex: null,
      editNew: '',
    };
  }

  popup = (index) => {
    if (index !== null) {
      const { tasks } = this.state;
      const editedTask = tasks[index];
      this.setState({
        displayModal: true,
        editedTask,
        editNew: editedTask,
        editedTaskIndex: index,
      });
    }
  };

  closeModal = () => {
    this.setState({
      displayModal: false,
      editedTask: '',
      editedTaskIndex: null,
      editNew: '',
    });
  };

  handleTaskChange = (event) => {
    this.setState({ editedTask: event.target.value });
  };

  handleTaskChanges = (event) => {
    this.setState({ editNew: event.target.value });
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.addTask();
    }
  };

  addTask = () => {
    const { tasks, editedTask, editNew, editedTaskIndex } = this.state;

    if (editedTask.trim() === '') {
      return; 
    }

    if (editedTaskIndex !== null) {
     
      const updatedTasks = [...tasks];
      updatedTasks[editedTaskIndex] = editNew;
      this.setState({ tasks: updatedTasks, displayModal: false });
    } else {
    
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, editedTask],
        displayModal: false,
      }));
    }

    this.setState({ editedTask: '', editedTaskIndex: null, editNew: '' });
  };

  deleteTask = (index) => {
    const { tasks, editedTaskIndex } = this.state;
    if (editedTaskIndex === null) {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      this.setState({ tasks: updatedTasks });
    }
  };

  render() {
    const { tasks, displayModal, editedTask, editNew } = this.state;

    return (
      <div>
        <ListComponent
          tasks={tasks}
          displayModal={displayModal}
          editedTask={editedTask}
          editNew={editNew}
          handleTaskChange={this.handleTaskChange}
          handleTaskChanges={this.handleTaskChanges}
          handleKeyPress={this.handleKeyPress}
          addTask={this.addTask}
          popup={this.popup}
          deleteTask={this.deleteTask}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}

import React, { Component } from "react";
import Todolist from "./TodoList";
import Completed from "./Completed";

class Actions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTask: "",
      targetTime: "",
      showCompleted: true,
      todoList: [],
      completedList: [],
      filteredTodoList: [],
      filteredCompletedList: []
    };
  }

  searchTask = e => {
    e.preventDefault();
    if (!this.state.inputTask) {
      this.setState({
        filteredTodoList: this.state.todoList,
        filteredCompletedList: this.state.completedList
      });
    } else {
      let fTodoList = [];
      let fCompletedList = [];
      if (this.state.todoList.length > 0) {
        fTodoList = this.state.todoList.filter(
          t => t.task.indexOf(this.state.inputTask) >= 0
        );
      }
      if (this.state.completedList.length > 0) {
        fCompletedList = this.state.completedList.filter(
          t => t.task.indexOf(this.state.inputTask) >= 0
        );
      }
      this.setState({
        filteredTodoList: fTodoList,
        filteredCompletedList: fCompletedList
      });
    }
  };

  onChangeInput = e => {
    if (e.target.name === "task") {
      this.setState({ inputTask: e.target.value });
    } else if (e.target.name === "datetime") {
      this.setState({ targetTime: e.target.value });
    } else {
      this.setState({ showCompleted: e.target.checked });
    }
  };

  completeTask = id => {
    let newTodoList = [];
    let newCompleteList = [];
    let temp = null;

    const todoList = this.state.todoList;
    const completedList = this.state.completedList;

    newTodoList = todoList.filter(t => t.id !== id);
    temp = todoList.filter(t => t.id === id);
    temp[0].completedOn = new Date().toLocaleString();
    newCompleteList = completedList.concat(temp);

    this.setState({
      todoList: newTodoList,
      completedList: newCompleteList,
      filteredTodoList: newTodoList,
      filteredCompletedList: newCompleteList
    });
  };

  addTask = e => {
    e.preventDefault();
    const temp = {
      id: new Date().getTime(),
      task: this.state.inputTask,
      completeBy: this.state.targetTime
        ? new Date(this.state.targetTime).toLocaleString()
        : new Date(new Date().getTime() + 18000000).toLocaleString()
    };

    let newTodoList = this.state.todoList.concat(temp);

    this.setState({
      todoList: newTodoList,
      inputTask: "",
      targetTime: "",
      filteredTodoList: newTodoList
    });
  };

  render() {
    return (
      <>
        <form>
          <textarea
            value={this.state.inputTask}
            name="task"
            placeholder="Enter/Search task"
            onChange={this.onChangeInput}
            rows="4"
            cols="60"
          />
          <br />
          Complete by(
          <span style={{ fontSize: "10px" }}>
            Leave blank to add 5 hrs from now.
          </span>
          ):&nbsp;
          <input
            type="datetime-local"
            value={this.state.targetTime}
            name="datetime"
            placeholder="Finish by.."
            onChange={e => {
              this.onChangeInput(e);
            }}
          />
          <br />
          <button onClick={this.addTask}>Add</button>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={this.searchTask}>Search</button>
          <br />
          <input
            type="checkbox"
            name="showCompleted"
            checked={this.state.showCompleted}
            onChange={this.onChangeInput}
          />{" "}
          Show completed tasks?
        </form>
        <Todolist
          taskList={this.state.filteredTodoList}
          completeTask={this.completeTask}
        />
        <Completed
          taskList={this.state.filteredCompletedList}
          showCompleted={this.state.showCompleted}
        />
      </>
    );
  }
}

export default Actions;

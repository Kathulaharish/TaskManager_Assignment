import React, { Component } from 'react';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
    };
  }

  addTask = () => {
    const { tasks, newTask } = this.state;
    if (newTask.trim() !== '') {
      this.setState({
        tasks: [...tasks, { id: tasks.length + 1, text: newTask }],
        newTask: '',
      });
    }
  };

  deleteTask = (taskId) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== taskId),
    });
  };

  updateTask = (taskId, newText) => {
    this.setState({
      tasks: this.state.tasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      ),
    });
  };

  handleInputChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  render() {
    const { tasks, newTask } = this.state;

    return (
      <div>
        <h1>Task List</h1>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.text}
              <button onClick={() => this.deleteTask(task.id)}>Delete</button>
              <input
                type="text"
                value={task.text}
                onChange={(e) => this.updateTask(task.id, e.target.value)}
              />
            </li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            value={newTask}
            onChange={this.handleInputChange}
          />
          <button onClick={this.addTask}>Add Task</button>
        </div>
      </div>
    );
  }
}

export default TaskList;
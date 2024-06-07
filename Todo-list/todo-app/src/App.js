import React from 'react';
import TaskInput from './Componets/TaskInput';
import TaskList from './Componets/TaskList';

const App = () => {
  return (
    <div className="App">
      <h1>React To-Do Application</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;

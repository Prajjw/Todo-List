import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const TaskInput = () => {
  // Local state to hold the input value
  const [task, setTask] = useState('');
  // useDispatch hook to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Handler function to add a new task
  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task)); // Dispatch the addTask action
      setTask(''); // Clear the input field
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' ? handleAddTask() : null} // Add task on Enter key press
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;

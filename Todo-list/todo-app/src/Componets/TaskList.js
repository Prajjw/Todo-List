import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';

const TaskList = () => {
  const tasksState = useSelector(state => state.tasksState);
  const tasks = tasksState ? tasksState.tasks : [];
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEditTask = (id, text) => {
    setEditMode(id);
    setEditText(text);
  };

  const handleSaveEdit = (id) => {
    dispatch(editTask(id, editText));
    setEditMode(null);
    setEditText('');
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {editMode === task.id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => handleSaveEdit(task.id)}>Save</button>
            </>
          ) : (
            <>
              {task.text}
              <button onClick={() => handleEditTask(task.id, task.text)}>Edit</button>
              <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

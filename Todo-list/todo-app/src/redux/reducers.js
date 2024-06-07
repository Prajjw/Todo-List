import { combineReducers } from 'redux';
import { ADD_TASK, DELETE_TASK, EDIT_TASK } from './actions';

// Initial state for the tasks reducer
const initialState = {
  tasks: [] // An empty array to hold the tasks
};

// Reducer function to handle tasks related actions
const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      // Handle adding a new task
      return {
        ...state, // Spread the current state
        tasks: [...state.tasks, { id: Date.now(), text: action.payload, completed: false }] // Add the new task to the tasks array
      };
    case DELETE_TASK:
      // Handle deleting a task
      return {
        ...state, // Spread the current state
        tasks: state.tasks.filter(task => task.id !== action.payload) // Remove the task with the matching id
      };
    case EDIT_TASK:
      // Handle editing a task
      return {
        ...state, // Spread the current state
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, text: action.payload.updatedTask } : task // Update the task text if ids match
        )
      };
    default:
      return state; // Return the current state if no action matches
  }
};

// Combine reducers (useful if there are multiple reducers in the future)
const rootReducer = combineReducers({
  tasksState: tasksReducer // Register tasksReducer under tasksState
});

export default rootReducer; // Export the root reducer as the default export

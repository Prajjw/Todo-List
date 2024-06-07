// Define action types
export const ADD_TASK = 'ADD_TASK'; // Action type for adding a task
export const DELETE_TASK = 'DELETE_TASK'; // Action type for deleting a task
export const EDIT_TASK = 'EDIT_TASK'; // Action type for editing a task

// Action creators
/**
 * Action creator for adding a task
 * @param {string} task - The text of the task to be added
 * @returns {object} - Action object with type ADD_TASK and payload containing the task text
 */
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task
});

/**
 * Action creator for deleting a task
 * @param {number} taskId - The id of the task to be deleted
 * @returns {object} - Action object with type DELETE_TASK and payload containing the task id
 */
export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId
});

/**
 * Action creator for editing a task
 * @param {number} id - The id of the task to be edited
 * @param {string} updatedTask - The updated text of the task
 * @returns {object} - Action object with type EDIT_TASK and payload containing the task id and updated text
 */
export const editTask = (id, updatedTask) => ({
  type: EDIT_TASK,
  payload: { id, updatedTask }
});

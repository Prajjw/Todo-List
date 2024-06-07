import { createStore } from 'redux';
import rootReducer from './reducers';

// Create Redux store with rootReducer and enable Redux DevTools Extension
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

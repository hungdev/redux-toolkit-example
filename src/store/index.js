import { configureStore } from '@reduxjs/toolkit';
import todosReducers from '../features/todo/todosSlice';

export default configureStore({
  reducer: {
    todos: todosReducers,
  },
});
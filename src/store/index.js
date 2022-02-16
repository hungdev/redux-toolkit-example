import { configureStore } from '@reduxjs/toolkit';
import todosReducers from '../features/todo/todosSlice';
import { api } from '../features/todo/rktQueryApi'

export default configureStore({
  reducer: {
    // Tạo thêm slice từ api
    [api.reducerPath]: api.reducer,
    // Slice thông thường
    todos: todosReducers,
  },
  // Thêm cấu hình middleware để dùng được các chức năng của RTK Query như caching, invalidation, polling, ...
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
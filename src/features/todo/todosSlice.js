import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import todoApi from './todoApi';
import instance from '../../configs/axiosConfig';

export const getListTodo = createAsyncThunk('todo/getListTodo', async (params, thunkAPI) => {
  // thunkAPI.dispatch(...)
  const list = await todoApi.getList();
  console.log('list', list);
  return list;
});


export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    value: [
      { name: "learn redux", completed: false },
      { name: "record video", completed: false },
      { name: "post video", completed: false },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      // Redux Toolkit allows us to 'mutate' the state. It doesn't actually
      // mutate the state because it uses the immer library, which detects
      // changes to a "draft state" and produces a brand new immutable state
      // based off those changes
      state.value.push({ name: action.payload.name, completed: false });
    },
    completeTodo: (state, action) => {
      state.value[action.payload.index].completed = true;
    },
    removeTodo: (state, action) => {
      state.value.splice(action.payload, 1);
      // we have another way to do: state.value = filteredData and dont need to return
      // and also we can return like old way
      // const filteredData = state.value.filter((element, index) => index !== action.payload.index)
      // return { ...state, value: filteredData }
    },
  },
  // handle response data from api
  extraReducers: {
    [getListTodo.pending]: (state, action) => {
      state.loading = true;
    },
    [getListTodo.fulfilled]: (state, action) => {
      state.loading = false;
      state.value = action.payload.data;
    },
    [getListTodo.rejected]: (state, action) => {
      state.value = false;
    },
  }

  // another way to handle response data from api
  // extraReducers: (builder) => {
  //   // Start request
  //   builder.addCase(getListTodo.pending, (state) => {
  //     state.loading = true;
  //   });

  //   // Request successful
  //   builder.addCase(getListTodo.fulfilled, (state, action) => {
  //     state.loading = false;
  //     state.value = action.payload.data;
  //   });

  //   // Request error
  //   builder.addCase(getListTodo.rejected, (state, action) => {
  //     state.loading = false;
  //     state.errorMessage = action.payload.message;
  //   });
  // },
});

export const selectTodos = state => state.todos.value;
export const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
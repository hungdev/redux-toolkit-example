import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, selectTodos } from "./todosSlice";
import styles from "./Todos.module.css";
import { getListTodo } from './todosSlice'

import { useLoginMutation } from './rktQueryApi';

export function Todos() {
  const todos = useSelector(selectTodos);
  const loading = useSelector(state => state.todos.loading);
  const [inputValue, setInputValue] = useState();
  const [info, setInfo] = useState({ email: 'admin@gmail.com', password: 'admin' });
  const dispatch = useDispatch();

  const [login, { isLoading, data, error }] = useLoginMutation();

  useEffect(() => {
    // dispatch(getListTodo())
  }, [])

  const onRemoveItem = (index) => () => {
    dispatch(removeTodo({ index }))
  }

  return (
    <div>
      {data && <div>You logged in with user: {data?.firstName}</div>}
      <button className={styles.buttonAdd} onClick={() => login({ email: info.email, password: info.password })}>Login</button>
      <div>
        {loading && <div>Getting data ....</div>}
        <button className={styles.buttonAdd} onClick={() => dispatch(getListTodo())}>Get List Todo from API</button>
      </div>
      <div>
        <input className={styles.input} value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <button className={styles.buttonAdd} onClick={() => dispatch(addTodo({ name: inputValue }))}>Add</button>
      </div>
      {todos?.map((todo, index) => (
        <div key={index} onClick={onRemoveItem(index)} className={styles.todoItem}>{todo.name}</div>
      ))}
    </div>
  );
}
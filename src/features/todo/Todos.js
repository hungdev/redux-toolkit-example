import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, selectTodos } from "./todosSlice";
import styles from "./Todos.module.css";
import { getListTodo } from './todosSlice'

export function Todos() {
  const todos = useSelector(selectTodos);
  const loading = useSelector(state => state.todos.loading);
  const [inputValue, setInputValue] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getListTodo())
  }, [])

  const onRemoveItem = (index) => () => {
    dispatch(removeTodo({ index }))
  }

  console.log('todos', todos)

  return (
    <div>
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
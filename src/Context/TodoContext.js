import axios from 'axios';
import React,{createContext, useState, useEffect} from 'react'


export const TodoContext = createContext();

export default function TodoContextProvider(props) {
    const [Todos, setTodos] = useState([]);
    async function fetchData() {
        for(let i = 1; i < 11; i++) {
            let response = await axios(`https://jsonplaceholder.typicode.com/todos/${i}`);
            let Data = await response.data;
            console.log(Data)
            setTodos(old => [...old , Data])
        }
      }
      useEffect(()=>{
        fetchData();
      },[])

      const updateTodo = (id, title, completed, userId) => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
              id: id,
              title: title,
              completed: completed,
              userId : userId
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
      }
      const createTodo = ( title, completed, userId) => {
        fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify({
              title: title,
              completed: completed,
              userId: userId,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
      }
      const deleteTodo = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE',
          });
      }
    
    return(
        <TodoContext.Provider value={{Todos, updateTodo, createTodo, deleteTodo}}>
            {props.children}
        </TodoContext.Provider>
    )
}
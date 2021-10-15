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

      const updateTodo = (id, newTitle) => {
        const updatedTodo = Todos.map(todo => {
            if(todo.id === id) {
                return {...todo, title : newTitle}
            }else {
                return todo;
            }
            
        })
        setTodos(updatedTodo)
      }
      const toggleTodo = (id) => {
        const updatedTodo = Todos.map(todo => {
            if(todo.id === id) {
                return {...todo, completed : !todo.completed}
            }else {
                return todo;
            }
            
        })
        setTodos(updatedTodo)
      }
      const createTodo = (task) => {
        setTodos(old => [...old , task])
      }
      const deleteTodo = (id) => {
        setTodos(Todos.filter(t => t.id !== id))
      }
    
    return(
        <TodoContext.Provider value={{Todos, updateTodo, createTodo, deleteTodo, toggleTodo}}>
            {props.children}
        </TodoContext.Provider>
    )
}
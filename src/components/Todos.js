import React,{useContext} from 'react'
import { TodoContext } from '../Context/TodoContext'

export default function Todos() {
    const {Todos, createTodo, updateTodo, deleteTodo} = useContext(TodoContext);
    
    return (<div>

    </div>)
}
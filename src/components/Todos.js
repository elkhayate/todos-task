import React,{useContext} from 'react'
import { TodoContext } from '../Context/TodoContext'
import Todo from './Todo';
import styled from "styled-components"

export default function Todos() {
    const {Todos, createTodo, updateTodo, deleteTodo, toggleTodo} = useContext(TodoContext);

    return (
        <Container>
            {Todos.map(todo =>
                <Todo 
                    key = {todo.id}
                    updateTodo = {updateTodo} 
                    toggler = {() => {toggleTodo(todo.id)}}
                    title = {todo.title}
                    id = {todo.id} 
                    checked = {todo.completed}
                    userId = {todo.userId} 
                    deleteTodo = {() => {deleteTodo(todo.id)}}/>
                )}
        </Container>
    )
}

const Container = styled.div`
    padding: 10px;
    display: block;
    justify-content: center;
    width: 100%;
`;
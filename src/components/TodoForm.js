import React,{useContext, useState} from 'react'
import { TodoContext } from '../Context/TodoContext'
import styled from "styled-components";

export default function TodoForm(props){

    const {createTodo, Todos} = useContext(TodoContext);
    const [todo, setTodo] = useState();
    const handleChange = (e) => {
        setTodo(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {id : Todos[-1].id + 1, completed : false, title : todo, userId : Todos[-1].userId + 1 }
        props.createTodo(newTodo);
        setTodo()
    }
    return()
}

const Form = styled.form``;
const Input = styled.input``;
const Button = styled.button``;
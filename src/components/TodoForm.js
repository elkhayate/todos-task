import React,{useContext, useState} from 'react'
import { TodoContext } from '../Context/TodoContext'
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import AddIcon from '@mui/icons-material/Add';
export default function TodoForm(){

    const {createTodo} = useContext(TodoContext);
    const [todo, setTodo] = useState();
    const handleChange = (e) => {
        setTodo(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {id :uuidv4(), completed : false, title : todo}
        createTodo(newTodo);
        setTodo("")
    }
    return(
        <div style={{textAlign : "center", marginTop : "150px"}}>
        <Title>CREATE A NEW TODO</Title>
        <Form onSubmit={handleSubmit}>
            <Input 
            name = "todo"
            id = "todo"
            type = "text"
            value = {todo}
            onChange = {handleChange}
            placeholder = "Write your task here..."
            />
            <Button><AddIcon /></Button>
        </Form>
        <Footer>Made by elkhayate.</Footer>
        </div>
    )
}
const Footer = styled.p`
    color: white;
    margin-top: 300px;
`;
const Title = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 38px;
    color: white;
`;
const Form = styled.form`
    width:70%;
    display: block;
    justify-content: flex-start;
    align-content: space-around;
    height: 100%;
    margin: auto;

`;
const Input = styled.input`
    width: 483px;
    height: 40px;
    background: #F2F2F2;
    border: 1px solid black;
    box-sizing: border-box;
    border-radius: 7px;
    font-size: 20px;
    padding: 6px;
`;
const Button = styled.button`
    margin-top: 40px;
    background-color: transparent;
    border: 1px solid black;
    cursor: pointer;
`;
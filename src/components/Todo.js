import React,{useState} from 'react'
import styled from 'styled-components'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Todo(props) {
    const [todo, setTodo] = useState()
    const [editing, setEditing] = useState(false);
    const handleChange = (e) => {
        setTodo(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.updateTodo(props.id, todo);
        setEditing(false)
    }

    return (

        <Container>
            <div style={{width : "10%", cursor : "pointer"}} onClick={props.toggler}>{props.checked ? <RadioButtonCheckedIcon /> : <RadioButtonUncheckedIcon />}</div>
            {editing ? 
            <Form onSubmit={handleSubmit}>
            <Input 
            name = "todo"
            id = "todo"
            type = "text"
            value = {todo || props.title} // GG me
            onChange = {handleChange}
            />
            <Button><SaveIcon /></Button>
        </Form> : 
                 <Task style={{textDecoration : props.checked ? "line-through" : null}}>{props.title}</Task>
        }
           
            
            {!editing && <div style={{width : "10%", cursor : "pointer", display : "flex", alignItems : "center", justifyContent:"center"}} onClick={() => setEditing(!editing)}><EditIcon /></div>}
            <div style={{width : "10%", cursor : "pointer", display : "flex", alignItems : "center", justifyContent:"center"}} onClick={props.deleteTodo}><DeleteIcon /></div>
        </Container>
    )
}
const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 1px;
    width: 10%;
    cursor: pointer;
`;

const Task = styled.div`
    font-weight: normal;
    font-size: 16px;
    line-height: 48px;
    text-align: start;
    width: 95%;
    color: white;
    text-transform: capitalize;
`;
const Form = styled.form`
    font-weight: normal;
    font-size: 16px;
    line-height: 48px;
    text-align: start;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Input = styled.input`
    width: 70%;
    background-color: transparent;
    border: none;
    outline-width: none;
    flex: 1;
    height: 44px;
    font-size: 16px;
    
`;
const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    margin-bottom: 10px;
`;


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
            <input 
            name = "todo"
            id = "todo"
            type = "text"
            value = {todo || props.title} // GG me
            onChange = {handleChange}
            />
            <button>save</button>
        </Form> : 
                 <Task>{props.title}</Task>
        }
           
            
            <div style={{width : "10%", cursor : "pointer"}} onClick={() => setEditing(!editing)}><EditIcon /></div>
            <div style={{width : "10%", cursor : "pointer"}} onClick={props.deleteTodo}><DeleteIcon /></div>
        </Container>
    )
}

const Task = styled.div`
    font-weight: normal;
    font-size: 16px;
    line-height: 48px;
    text-align: start;
    width: 95%;
`;
const Form = styled.form`
    font-weight: normal;
    font-size: 16px;
    line-height: 48px;
    text-align: start;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
const Input = styled.input`
    width: 70%;
    height: 20px;
    border-radius: 5px;
    border: none;
`;
const Container = styled.div`
    background-color: #273851;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 5px;
    border-radius: 5px;
`;


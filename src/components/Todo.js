import React,{useState} from 'react'
import styled from 'styled-components'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Todo(props) {
    const [todo, setTodo] = useState()
    const handleChange = (e) => {
        setTodo(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.updateTodo(props.id, todo);
    }
    return (

        <Container>
            <div onClick={props.toggler}>{props.checked ? <RadioButtonCheckedIcon /> : <RadioButtonUncheckedIcon />}</div>
            <Task>{props.title}</Task>
            <Form onSubmit={handleSubmit}>
                <input 
                name = "todo"
                id = "todo"
                type = "text"
                value = {todo}
                onChange = {handleChange}
                />
                <button>save</button>
            </Form>
            <div><EditIcon /></div>
            <div onClick={props.deleteTodo}><DeleteIcon /></div>
        </Container>
    )
}
const Number = styled.div`
    width: 10%;
`;
const Task = styled.div`
    font-weight: normal;
    font-size: 12px;
    color: #FFFFFF;
`;
const Form = styled.form``;

const Container = styled.div`
    width: 95%;
    margin: auto;
    background-color: #273851;
    display: flex;
    justify-content: space-around;

`;


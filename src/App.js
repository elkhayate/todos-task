import React,{useState} from 'react'
import styled from 'styled-components';
import Todos from './components/Todos';
import TodoForm from "./components/TodoForm";



function App() {    
  const [show, setShow] = useState(false)

  
  return (
    <div style={{backgroundColor : "#222831", padding : " 10px"}}>
      <Container>
        <Header>
          <Todo style={{color : show ? "#29A19C" : "white"}} onClick={() => {setShow(true)}}>TODOS</Todo>
          <Create style={{color : show ? "white" : "#29A19C"}} onClick={() => {setShow(false)}}> CREATE</Create>
        </Header>
        <Main>
          {show ? <Todos /> : <TodoForm />}
        </Main>
      </Container>
    </div>
  );
}
const Main = styled.div`
  margin: auto;
  width: 90%;
  height: 100%;
  border-radius: 10px;

`;
const Container = styled.div`
  background: #2c3440;
  border-radius: 30px;
  width: 822px;
  height: 788px;
  margin: auto;
  margin-top: 50px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  height: 100px;
  font-weight: 600;
  font-size: 30px;
  line-height: 33px;
  letter-spacing: 0.03em;
`;

const Todo = styled.div`
  width: 30%;
  border-radius: 10px;
  height: 70%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Create = styled.div`
  width: 30%;
  border-radius: 10px;
  height: 70%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export default App;

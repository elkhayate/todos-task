import './App.css';
import React,{useState} from 'react'
import styled from 'styled-components';



function App() {    
  const [show, setShow] = useState(false)

  
  return (
    <div>
      <Container>
        <Header>
          <Todo onClick={() => {setShow(true)}}>Todo List</Todo>
          <Create onClick={() => {setShow(false)}}> Create Todo</Create>
        </Header>
        <Main>
          {show ? <p>hana</p> : <p>hani</p>}
        </Main>
      </Container>
    </div>
  );
}
const Main = styled.div`
  margin: auto;
  margin-top: 100px;
  width: 80%;
  height: 500px;
  background-color: aliceblue;
  border-radius: 10px;
`;
const Container = styled.div`
  background: #1B2B42;
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
`;

const Todo = styled.div`
  width: 30%;
  border-radius: 10px;
  height: 70%;
  background: yellow;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Create = styled.div`
  width: 30%;
  border-radius: 10px;
  height: 70%;
  background: yellow;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export default App;

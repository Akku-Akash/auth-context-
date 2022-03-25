import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'


const Button = styled.button`
font-size: 1.5em;
text-align: center;
color: teal;
background-color : yellow;
height : 50px

border-radius : 10px;
text-align : center;
text-decoration : npne;
border : 1 px solid black;
width : 500px
`;


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button>Click here</Button>
      </header>
    </div>
  );
}

export default App;

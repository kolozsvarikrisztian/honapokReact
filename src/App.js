import './App.css';
import styled from 'styled-components';
import Kartyak from './Kartyak.js';

function App() {
  return (
    <Main>
      <Header>
        <h1>Hónapok</h1>
        <Nav>
          <ul>         
            <li><a href="#osz">Ősz</a></li>
            <li><a href="#tel">Tél</a></li>
            <li><a href="#tavasz">Tavasz</a></li>
            <li><a href="#nyar">Nyár</a></li> 
          </ul>
        </Nav>
      </Header>
      <Kartyak />
      <Footer><p>Hív a természet!</p></Footer>
    </Main>
  );
}

const Nav = styled.nav`
  background-color: rgb(255,255,255,0.5);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  a {
    display: inline-block;
  padding: 10px; 
  color: orange;
  font-size: 24px;
  font-variant: small-caps;  
  font-weight: bold;
  text-decoration: none;
  text-shadow: 1px 0 3px black;
  }
  li {
    list-style-type: none;
    display: inline;
  }
  a:hover {
    background-color: orange;
    color:white;
    }
`

const Main = styled.main`
  width: 90%;
  margin: 0 auto 100px auto;
`
const Header = styled.header`
  background-image: url("img/hatter.png");
  height: 200px;
  position: relative;
  padding: 0;
  margin: auto;
  background-size: cover;
  h1 {
    font-family: 'Courgette', cursive;  
    color: white;
    font-size: 80px;
    margin: 0;
    padding: 0;  
    position: absolute;
    top: 0;
    left: 150px;
  }
`

const Footer = styled.footer`
  font-family: 'Courgette', cursive;    
  margin: 0;
  padding: 0; 
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 48px;
  color: white;
  background-color: rgba(255,165,0,.8); 
  p {
    text-align: center;
    margin:0;
  }
`

export default App;

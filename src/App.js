import Category from "./components/Category"
import Pages from "./pages/Pages"
import { BrowserRouter as Router } from "react-router-dom"
import Search from "./components/Search"
import styled from "styled-components"
import { Link } from "react-router-dom" 
import { GiKnifeFork } from "react-icons/gi"


const App = () => {
  return (
    <Router>
      <div>
      <Nav>
      <GiKnifeFork />
        <Logo to={'/'} >
          deliciouss
        </Logo>
      </Nav>
        <Search />
        <Category />
        <Pages />
    </div>
    </Router>
  )
}

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Lobster Two', cursive;
    color: orangered;
`;

const Nav = styled.div`
    padding: 4rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    svg{
      font-size: 2rem;
    }
`

export default App
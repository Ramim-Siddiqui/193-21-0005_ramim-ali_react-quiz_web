import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from './footer-logo.svg.png';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';

const style1 =
{
    backgroundColor:"rgba(255, 238, 252, 1)",
    fontFamily: "Poppins"
}


const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" style={style1}>
    <Container>
        <img src={Image} alt='logo'/>
      <Navbar.Brand href="#home"style={{color:"rgba(48, 49, 121, 1)", margin:'10px', fontSize:"30px", fontStyle:"bold"}}><span>Writealy</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
        <NavDropdown title="Products" id="basic-nav-dropdown"></NavDropdown>
        <NavDropdown title="Use cases" id="basic-nav-dropdown"></NavDropdown>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#pricing">Customer</Nav.Link>
          <NavDropdown title="Resources" id="basic-nav-dropdown"></NavDropdown>
          <Nav.Link href="#pricing"><Button variant="outline-dark" className='rounded-pill'>Sign in</Button></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header;

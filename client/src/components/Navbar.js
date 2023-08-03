import { LinkContainer } from 'react-router-bootstrap'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

import logoImage from '../assets/images/logo-black.png'

export default function NavBarWithScroll() {
  return (
    <Navbar expand="lg">
      <Container>
        <NavbarBrand />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <NavbarItens />
          <NavbarSearch />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const NavbarBrand = () => {
  return(
    <LinkContainer to="/">
      <Navbar.Brand>
        <Image src={logoImage} />
      </Navbar.Brand>
    </LinkContainer>
  )
}

const NavbarItens = () => {
  return(
    <Nav
      className="me-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <LinkContainer to="/">
        <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/detalhes-sobre/arroz">
        <Nav.Link>TEMP como</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/calendario-de-plantio">
        <Nav.Link>Calendário</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/sobre-nos">
        <Nav.Link>Sobre nós</Nav.Link>
      </LinkContainer>
    </Nav>
  )
}

const NavbarSearch = () => {
  return(
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Pesquisar planta"
        className="me-2"
        aria-label="Pesquisar planta"
      />
      <Button variant="outline-secondary">Pesquisar</Button>
    </Form>
  )
}

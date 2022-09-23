import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const TodoNavbar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand href="#home">My Todos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#home">Priority</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TodoNavbar;

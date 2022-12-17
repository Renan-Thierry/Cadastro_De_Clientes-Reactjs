import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="##home">Home</Nav.Link>
          <Nav.Link href="#produtos">Produtos</Nav.Link>
          <Nav.Link href="##home">Cliente</Nav.Link>
          <Nav.Link href="#produtos">Fornecedores</Nav.Link>
          <Nav.Link href="#entregadores">Entregadores</Nav.Link>
          <Nav.Link href="#sobre">Sobre</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

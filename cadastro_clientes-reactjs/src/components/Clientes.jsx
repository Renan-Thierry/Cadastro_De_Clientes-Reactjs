import React, { useEffect, useState } from 'react';
import {Button, Table, Form, Modal} from 'react-bootstrap';

const Clientes = () => {
  const [nome, setNome] = useState('');
  const [clientes, setClientes] = useState([]);
  const [nomes, setNomes] = useState('');
  const [email, setEmail] = useState('');
  const [nascimento, setNascimento ] = useState('');
  const [cep, setCep] = useState('');
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlesubmit = (event) => {
  const adCliente={nomes, email, nascimento, cep}
  
  fetch('http://localhost:3000/clientes', {method: 'POST',
  headers: {
  'Content-Type': 'application/json',
  },
  body: JSON.stringify(adCliente),})
  .then((response) => {
    window.location.reload();
    window.alert("cliente salvo com sucesso");
  })
  .catch((error) => {
    window.alert("Erro ao salvar o cliente");
  })
}

const handleReset = () => {
  Array.from(document.querySelectorAll("input")).forEach(
    input => (input.value = "")
  );
  this.setState({
    itemvalues: [{}]
  });
};

  useEffect(() => {
    fetch('http://localhost:3000/clientes', { method: 'GET' })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setClientes(data);
      })
      .catch((error) => {});
  }, []);

  const handleChange = (event) => {
    setNome(event.target.value);
  };

  const handleClick = (event) => {
    fetch(`http://localhost:3000/clientes?q=${nome}`, { method: 'GET' })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setClientes(data);
      })
      .catch((error) => {
        console.log('Resposta com insucesso!');
      })
      .finally();
  };

  return (
    <div>
    <br/>
      <h1 style={{ textAlign: "center" }}>Adicionar Clientes</h1>
      <br/>
      <Form>
      <label>Clientes:</label>
      <Button variant="primary" className="float-end" onClick={handleShow}>
        Adicionar
      </Button>
      <br/>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Clientes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Nome:</Form.Label>
        <Form.Control type="text" placeholder="Digite seu nome" value={nomes} onChange={e=> setNomes(e.target.value)} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" placeholder="Digite seu Email" value={email} onChange={e=> setEmail(e.target.value)} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Data de Nascimento:</Form.Label>
        <Form.Control type="date" placeholder="Digite sua data de nascimento" value={nascimento} onChange={e=> setNascimento(e.target.value)} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>CEP:</Form.Label>
        <Form.Control type="number" placeholder="Digite seu cep" value={cep} onChange={e=> setCep(e.target.value)} required />
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleReset}>
            Limpar
          </Button>
          <Button variant="primary" type="submit" onClick={handlesubmit}>Adicionar</Button>
        </Modal.Footer>
      </Modal>
      </Form>
      <h1 style={{ textAlign: "center" }}>Buscar Clientes</h1>
      <br/>
      <form>
      <label>Buscar Clientes: 
        <input type="text" id="" value={nome} onChange={handleChange} />
        <Button variant="primary" onClick={handleClick}>
          Buscar
        </Button>
        </label>
      </form>
      <br/>
      <h4 style={{ textAlign: "center" }}>Tabela de Clientes</h4>
      <br/>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Nascimento</th>
            <th>CEP</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => {
            return (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nomes}</td>
                <td>{cliente.email}</td>
                <td>{cliente.nascimento}</td>
                <td>{cliente.cep}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <br/>
    </div>
  );
};

export default Clientes;

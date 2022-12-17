import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Footer = () => {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>☕ A melhor cafeteria da Região ☕</Card.Title>
        <Card.Text>Tome nosso café e tenha um dia bem produtivo!!!</Card.Text>
        <Button variant="primary">Venha conhecer</Button>
      </Card.Body>
      <Card.Footer className="text-muted">&copy;RenanThierry</Card.Footer>
    </Card>
  );
};

export default Footer;

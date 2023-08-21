import React from 'react';
import '../Extra-uslugi/Extra-services.css';
import { Container , Row , Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const Extraservices = () => {
  return (
   <Container className='mt-5'>
     {/* Top4 cards */}
     <Row className='extra-content-area'>
        <Col md={6}>
        <Card className='extra-services-card'>
            <Card.Body>
              <Card.Title className='uslugi-text-extra'>Услуги по оформлению при отправке</Card.Title>
              <ul>
                <li className='oformlenie-text-list'>Оформление TIR-Carnet и транспортной накладной (CMR)</li>
                <li className='oformlenie-text-list'>Отправка импортной и экспортной документации</li>
                <li className='oformlenie-text-list'>Контроль правильного заполнения документации</li>
                <li className='oformlenie-text-list'>Нейтрализация</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
        <Card className='extra-services-card'>
            <Card.Body>
              <Card.Title className='uslugi-text-extra'>Услуги по оформлению при отправке</Card.Title>
              <ul>
                <li className='oformlenie-text-list'>Оформление TIR-Carnet и транспортной накладной (CMR)</li>
                <li className='oformlenie-text-list'>Отправка импортной и экспортной документации</li>
                <li className='oformlenie-text-list'>Контроль правильного заполнения документации</li>
                <li className='oformlenie-text-list'>Нейтрализация</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
        <Card className='extra-services-card'>
            <Card.Body>
              <Card.Title className='uslugi-text-extra'>Услуги по оформлению при отправке</Card.Title>
              <ul>
                <li className='oformlenie-text-list'>Оформление TIR-Carnet и транспортной накладной (CMR)</li>
                <li className='oformlenie-text-list'>Отправка импортной и экспортной документации</li>
                <li className='oformlenie-text-list'>Контроль правильного заполнения документации</li>
                <li className='oformlenie-text-list'>Нейтрализация</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
        <Card className='extra-services-card'>
            <Card.Body>
              <Card.Title className='uslugi-text-extra'>Услуги по оформлению при отправке</Card.Title>
              <ul>
                <li className='oformlenie-text-list'>Оформление TIR-Carnet и транспортной накладной (CMR)</li>
                <li className='oformlenie-text-list'>Отправка импортной и экспортной документации</li>
                <li className='oformlenie-text-list'>Контроль правильного заполнения документации</li>
                <li className='oformlenie-text-list'>Нейтрализация</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
       </Row>

   </Container>
  )
}

export default Extraservices
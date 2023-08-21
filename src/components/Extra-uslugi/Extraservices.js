import React from "react";
import "../Extra-uslugi/Extra-services.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Extraservices = () => {
  return (
    <Container className="mt-5">
      {/* Top4 cards */}
      <Row className="extra-content-area">
        <Col md={6}>
          <Card className="extra-services-card">
            <Card.Body className="d-flex flex-column gap-4">
              <Card.Title className="uslugi-text-extra">
                Услуги по оформлению при отправке
              </Card.Title>
              <ul className="d-flex flex-column" id="ul-list">
                <li className="oformlenie-text-list">
                  Оформление TIR-Carnet и транспортной накладной (CMR)
                </li>
                <li className="oformlenie-text-list">
                  Отправка импортной и экспортной документации
                </li>
                <li className="oformlenie-text-list">
                  Контроль правильного заполнения документации
                </li>
                <li className="oformlenie-text-list">Нейтрализация</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="extra-services-card">
            <Card.Body className="d-flex flex-column gap-4">
              <Card.Title className="uslugi-text-extra">
                Таможенные услуги
              </Card.Title>
              <ul className="d-flex flex-column" id="ul-list">
                <li className="oformlenie-text-list">
                  Экспортная и импортная очистка товара со склада
                </li>
                <li className="oformlenie-text-list">
                  В качестве лицензированного получателя мы можем сопроводить
                  опечатанный таможней груз через все необходимые таможенные
                  процедуры
                </li>
                
                <li className="oformlenie-text-list">
                  Содействие в ускоренном получении печатей машинами
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="extra-services-card-2">
            <Card.Body className="d-flex flex-column gap-4">
              <Card.Title className="uslugi-text-extra">
              Оформления документации
              </Card.Title>
              <ul className="d-flex flex-column" id="ul-list">
                <li className="oformlenie-text-list">
                Оформление TIR-Carnet €
                </li>
                <li className="oformlenie-text-list">
                Оформление транспортной накладной CMR
                </li>
                <li className="oformlenie-text-list">Изменения, дополнения к CMR</li>
                <li className="oformlenie-text-list">Оформление экспортной декларации ЕХ1 (1 позиция)</li>
                <li className="oformlenie-text-list">Каждая дополнительная позиция</li>
                <li className="oformlenie-text-list">Нейтрализация / замена документов</li>
                <li className="oformlenie-text-list">Копии документов – до 10 копий по одной отгрузке</li>
                <li className="oformlenie-text-list">Каждое дополнение</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="extra-services-card-2">
            <Card.Body className="d-flex flex-column gap-4">
              <Card.Title className="uslugi-text-extra">
              Таможенное сопровождение
              </Card.Title>
              <ul className="d-flex flex-column" id="ul-list">
                <li className="oformlenie-text-list">
                Мы предоставляем таможенное сопровождение в Хофе, Дрездене и Стамбуле
                </li>
                <li className="oformlenie-text-list">
                Возврат вашей экспортной документации
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Extraservices;

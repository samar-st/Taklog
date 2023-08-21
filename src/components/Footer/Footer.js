import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../Footer/Footer.css";
import TasklogLogo from "../../images/50.svg";
import { Nav } from "react-bootstrap";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-scroll";


const Telegram = <FontAwesomeIcon icon={faTelegram} style={{color: "#ffffff",}} />
const Instagram = <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} />
const Linkedin = <FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} />
const Facebook = <FontAwesomeIcon icon={faFacebookF} style={{color: "#ffffff",}} />

const Footer = () => {
  return (
    <div className="content-area-of-footer">
      <Container>
        <Row>
          <h1 className="head-text-footer">
            Нужно <span>доставить</span> товар? <br /> Довертесь{" "}
            <span>нам!</span>
          </h1>
        </Row>

        <Row>
          <div className="line-of-footer"></div>
        </Row>

        <Row className="common-footer-container">
          <Col md={4} className="block-logo-footer">
            <img src={TasklogLogo} alt="lOGO Taklog img" />
            <p className="pre-text-after-logo">
              Более 30 лет компания Taklog является надежным партнером в области
              логистики и экспедирования грузов.
            </p>
          </Col>
          <Col md={2} className="block-menu-footer">
            <span className="menu-text-footer">Меню</span>
            <Nav className="d-flex flex-column p-0" id="menu-links-of-footer">
            <Nav.Link className='url-link-footer'>
            <Link
                activeClass="active"
                to="mainPage"
                spy={true}
                smooth={false}
                offset={-170} // Adjust this offset according to your design
                >
                Главная
              </Link>
              </Nav.Link>
              <Nav.Link className="url-link-footer">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={false}
                offset={-100} // Adjust this offset according to your design
                >
                О компании
              </Link>
            </Nav.Link>
            <Nav.Link className="url-link-footer">
            <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={false}
                offset={-80} // Adjust this offset according to your design
                >
                Услуги
              </Link>
            </Nav.Link>
            <Nav.Link className="url-link-footer">
            <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={false}
                offset={-100} // Adjust this offset according to your design
                >
                Наши работы
              </Link> 
            </Nav.Link>
            <Nav.Link className="url-link-footer">
            <Link
                activeClass="active"
                to="offices"
                spy={true}
                smooth={false}
                offset={-100} // Adjust this offset according to your design
                >
                Офисы
              </Link> 
            </Nav.Link>
            </Nav>
          </Col>
          <Col md={3} className="only-for-contacts-footer">
            <span className="menu-text-footer">Контакты</span>
            <p className="unmutted-text">Телефон</p>
            <Nav className="d-flex flex-column p-0">
              <Nav.Link className="phone-number-footer" href="tel: +998 33 338 11 18">+998 33 338 11 18</Nav.Link>
              <Nav.Link className="phone-number-footer" href="tel: +998 71 255 05 08">+998 71 255 05 08</Nav.Link>
            </Nav>
            <p className="unmutted-text">Почта</p>
            <Nav className="d-flex flex-column p-0">
              <Nav.Link className="email-footer">murad@taklog.com</Nav.Link>
              <Nav.Link className="email-footer">tashkent@taklog.com</Nav.Link>
            </Nav>
            <p className="unmutted-text">Адрес</p>
            <h3 className="adress-location-text">
              Узбекистан, г. Ташкент, <br />
              улица Амира Темура, 45
            </h3>
          </Col>
          <div id="mob-resp-block-footer">
          <Col md={2} className="block-menu-footer-clone">
            <span className="menu-text-footer">Меню</span>
            <Nav className="d-flex flex-column p-0" id="menu-links-of-footer">
            <Nav.Link className='url-link-footer'>
            <Link
                activeClass="active"
                to="mainPage"
                spy={true}
                smooth={false}
                offset={-170} // Adjust this offset according to your design
                >
                Главная
              </Link>
              </Nav.Link>
              <Nav.Link className="url-link-footer">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={false}
                offset={-100} // Adjust this offset according to your design
                >
                О компании
              </Link>
            </Nav.Link>
            <Nav.Link className="url-link-footer">
            <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={false}
                offset={-80} // Adjust this offset according to your design
                >
                Услуги
              </Link>
            </Nav.Link>
            <Nav.Link className="url-link-footer">
            <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={false}
                offset={-100} // Adjust this offset according to your design
                >
                Наши работы
              </Link> 
            </Nav.Link>
            <Nav.Link className="url-link-footer">
            <Link
                activeClass="active"
                to="offices"
                spy={true}
                smooth={false}
                offset={-100} // Adjust this offset according to your design
                >
                Офисы
              </Link> 
            </Nav.Link>
            </Nav>
          </Col>
          <Col md={3} className="only-for-contacts-footer-clone">
            <span className="menu-text-footer">Контакты</span>
            <p className="unmutted-text">Телефон</p>
            <Nav className="d-flex flex-column p-0 gap-2">
              <Nav.Link className="phone-number-footer" href="tel: +998 33 338 11 18">+998 33 338 11 18</Nav.Link>
              <Nav.Link className="phone-number-footer" href="tel: +998 71 255 05 08">+998 71 255 05 08</Nav.Link>
            </Nav>
            <p className="unmutted-text">Почта</p>
            <Nav className="d-flex flex-column p-0 gap-2">
              <Nav.Link className="email-footer" href="mailto: murad@taklog.com">murad@taklog.com</Nav.Link>
              <Nav.Link className="email-footer" href="mailto: tashkent@taklog.com">tashkent@taklog.com</Nav.Link>
            </Nav>
            <p className="unmutted-text">Адрес</p>
            <h3 className="adress-location-text">
              Узбекистан, г. Ташкент, <br />
              улица Амира Темура, 45
            </h3>
          </Col>
          </div>
        
          <Col md={3} className="consultation-footer">
          <span className="menu-text-footer">Консультация</span>
            <p className="have-a-questions-text">
              Есть вопросы? Позвоните нам, будем рады оказать консультационную
              поддержку по всем вопросам логистики.
            </p>
            <button className="call-us-footer">Позвонить</button>
            <div className="block-for-socials">
             <a className="links-for-social-media" href="https://m.facebook.com/taklog.uz/">{Facebook}</a>
             <a className="links-for-social-media" href="https://de.linkedin.com/company/taklog-int-trans-gmbh?trk=organization_guest_main-feed-card_feed-actor-name">{Linkedin}</a>
             <a className="links-for-social-media" href="t.me/taklog">{Telegram}</a>
             <a className="links-for-social-media" href="https://instagram.com/taklog.uz?igshid=NTc4MTIwNjQ2YQ==">{Instagram}</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

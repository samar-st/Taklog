import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import TaklogLogo from "../../images/50.svg";
import "../Navbar/Navbar.css";
import { Link } from "react-scroll";

const NavbarTop = () => {
  return (
    <Navbar collapseOnSelect expand="xl" className="content-of-navbar">
      <Container>
        <Navbar.Brand href="/">
          <img src={TaklogLogo} alt="Taklog Logotip" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-center flex-grow-1 pe-3">
            <Nav.Link className='link-navbar-top'>
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

            <Nav.Link className="link-navbar-top">
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

            <Nav.Link className="link-navbar-top">
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

            <Nav.Link className="link-navbar-top">
            <Link
                activeClass="active"
                to="partners"
                spy={true}
                smooth={false}
                offset={-100} // Adjust this offset according to your design
                >
                Партнеры
              </Link>
            </Nav.Link>
            <Nav.Link className="link-navbar-top">
            <Link
                activeClass="active"
                to="advantages"
                spy={true}
                smooth={false}
                offset={-100} // Adjust this offset according to your design
                >
                Преимущества
              </Link>
            </Nav.Link>
            <Nav.Link className="link-navbar-top">
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
            <Nav.Link className="link-navbar-top">
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
          <Nav>
            <Nav.Link className="link-navbar-top" href="/ru">
              Ru
            </Nav.Link>
            <button className="connect-button-navbar">Связаться</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarTop;

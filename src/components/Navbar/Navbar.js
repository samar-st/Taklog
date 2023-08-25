import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import TaklogLogo from "../../images/50.svg";
import "../Navbar/Navbar.css";
import { Link } from "react-scroll";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HamburgerIconImg from '../../images/div.hamburger-inner.svg'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { OffcanvasBody } from "react-bootstrap";

const Telegram = <FontAwesomeIcon icon={faTelegram} style={{color: "#0063a4",}} />
const Instagram = <FontAwesomeIcon icon={faInstagram} style={{color: "#0063a4",}} />
const Linkedin = <FontAwesomeIcon icon={faLinkedin} style={{color: "#0063a4",}} />
const Facebook = <FontAwesomeIcon icon={faFacebookF} style={{color: "#0063a4",}} />


const NavbarTop = () => {



  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      // document.body.style.overflow = "hidden";
      document.body.style.background = "rgba(17, 17, 17, 0.80)";
      document.body.style.backdropFilter = "blur(5px)";
    } else {
      // document.body.style.overflow = "";
      document.body.style.background = "";
      document.body.style.backdropFilter = "";
    }
  }, [isMenuOpen]);

  return (
    <Navbar expand="xl" className="content-of-navbar">
      <Container>
        <Navbar.Brand href="/">
          <img src={TaklogLogo} alt="Taklog Logotip" />
        </Navbar.Brand>
       
        <Navbar.Toggle
          onClick={toggleMenu}
          aria-controls="responsive-navbar-nav"
        >
          <img src={HamburgerIconImg} alt="Hamburger Icon" />
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-center flex-grow-1 pe-3">
            <Nav.Link className="link-navbar-top">
              <Link
                activeClass="active"
                to="mainPage"
                spy={true}
                smooth={true}
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
            <a href="https://t.me/taklog" className="connect-button-navbar">Связаться</a>
          </Nav>
        </Navbar.Collapse>

        <div className={`offcanvas-menu ${isMenuOpen ? "active" : ""}`} data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
          <div className="offcanvas-content">
            <Nav
              className="justify-content-center flex-grow-1"
              id="mobile-off-canvas-links"
            >
              <Nav.Link className="link-navbar-top">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={false}
                  onClick={closeMenu}
                  offset={-70} // Adjust this offset according to your design
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
                  onClick={closeMenu}
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
                  onClick={closeMenu}
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
                  onClick={closeMenu}
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
                  onClick={closeMenu}
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
                  onClick={closeMenu}
                  offset={-100} // Adjust this offset according to your design
                >
                  Офисы
                </Link>
              </Nav.Link>

              <div className="bottom-side-of-canvas">
                <div className="d-flex gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="21"
                    viewBox="0 0 18 21"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_205_2144)">
                      <path
                        d="M10 6.74902V11.749C10 11.8532 9.96652 11.9388 9.89955 12.0057C9.83259 12.0727 9.74702 12.1062 9.64286 12.1062H6.07143C5.96726 12.1062 5.8817 12.0727 5.81473 12.0057C5.74777 11.9388 5.71429 11.8532 5.71429 11.749V11.0347C5.71429 10.9306 5.74777 10.845 5.81473 10.778C5.8817 10.7111 5.96726 10.6776 6.07143 10.6776H8.57143V6.74902C8.57143 6.64486 8.60491 6.55929 8.67187 6.49233C8.73884 6.42536 8.8244 6.39188 8.92857 6.39188H9.64286C9.74702 6.39188 9.83259 6.42536 9.89955 6.49233C9.96652 6.55929 10 6.64486 10 6.74902ZM13.8281 13.7245C13.8281 13.7245 13.9639 13.492 14.2355 13.0269C14.5071 12.5619 14.6429 11.7788 14.6429 10.6776C14.6429 9.5764 14.3713 8.56078 13.8281 7.63072C13.285 6.70066 12.5484 5.96405 11.6183 5.4209C10.6882 4.87774 9.67262 4.60617 8.57143 4.60617C7.47024 4.60617 6.45461 4.87774 5.52455 5.4209C4.59449 5.96405 3.85789 6.70066 3.31473 7.63072C2.77158 8.56078 2.5 9.5764 2.5 10.6776C2.5 11.7788 2.77158 12.7944 3.31473 13.7245C3.85789 14.6545 4.59449 15.3911 5.52455 15.9343C6.45461 16.4774 7.47024 16.749 8.57143 16.749C9.67262 16.749 10.6882 16.4774 11.6183 15.9343C12.5484 15.3911 13.285 14.6545 13.8281 13.7245ZM15.9933 6.37514C15.9933 6.37514 16.1849 6.70345 16.5681 7.36007C16.9513 8.0167 17.1429 9.12254 17.1429 10.6776C17.1429 12.2327 16.7597 13.6668 15.9933 14.9801C15.2269 16.2933 14.1871 17.3331 12.8739 18.0995C11.5606 18.8658 10.1265 19.249 8.57143 19.249C7.01637 19.249 5.58222 18.8658 4.26897 18.0995C2.95573 17.3331 1.91592 16.2933 1.14955 14.9801C0.383185 13.6668 0 12.2327 0 10.6776C0 9.12254 0.383185 7.68838 1.14955 6.37514C1.91592 5.0619 2.95573 4.02209 4.26897 3.25572C5.58222 2.48935 7.01637 2.10617 8.57143 2.10617C10.1265 2.10617 11.5606 2.48935 12.8739 3.25572C14.1871 4.02209 15.2269 5.0619 15.9933 6.37514Z"
                        fill="#D9D9D9"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_205_2144">
                        <rect
                          width="17.1429"
                          height="20"
                          fill="white"
                          transform="matrix(1 0 0 -1 0 20.6777)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-of-clock">Пон-Пт 9:00-18:00</span>
                </div>
                {/*  */}
                <div className="d-flex gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="21"
                    viewBox="0 0 17 21"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_205_2148)">
                      <path
                        d="M16.142 14.5167C16.142 14.7176 16.1048 14.9799 16.0304 15.3036C15.956 15.6272 15.8779 15.8821 15.796 16.0681C15.6398 16.4401 15.1859 16.8344 14.4344 17.2511C13.735 17.6306 13.0431 17.8203 12.3585 17.8203C12.1576 17.8203 11.9605 17.8073 11.767 17.7812C11.5736 17.7552 11.3597 17.7087 11.1253 17.6417C10.8909 17.5748 10.7161 17.5208 10.6007 17.4799C10.4854 17.439 10.2789 17.3627 9.98131 17.2511C9.68369 17.1395 9.5014 17.0725 9.43443 17.0502C8.70526 16.7898 8.05422 16.481 7.48131 16.1239C6.53637 15.5361 5.55422 14.7325 4.53488 13.7132C3.51553 12.6938 2.71196 11.7117 2.12416 10.7667C1.76702 10.1938 1.45824 9.54278 1.19782 8.81362C1.1755 8.74665 1.10854 8.56436 0.996931 8.26674C0.885324 7.96912 0.809059 7.76265 0.768136 7.64732C0.727214 7.53199 0.67327 7.35714 0.606306 7.12277C0.539342 6.88839 0.492839 6.67448 0.466797 6.48103C0.440755 6.28757 0.427734 6.0904 0.427734 5.88951C0.427734 5.20498 0.617467 4.51302 0.996931 3.81362C1.4136 3.06213 1.80794 2.60826 2.17997 2.45201C2.36598 2.37016 2.62081 2.29204 2.94448 2.21763C3.26814 2.14323 3.53041 2.10603 3.73131 2.10603C3.83547 2.10603 3.9136 2.11719 3.96568 2.13951C4.09961 2.18415 4.29678 2.46689 4.5572 2.98772C4.63904 3.12909 4.75065 3.32998 4.89202 3.5904C5.03339 3.85082 5.1636 4.08705 5.28265 4.29911C5.40169 4.51116 5.51702 4.71019 5.62863 4.8962C5.65095 4.92597 5.71605 5.01897 5.82394 5.17522C5.93183 5.33147 6.01181 5.46354 6.0639 5.57143C6.11598 5.67932 6.14202 5.78534 6.14202 5.88951C6.14202 6.03832 6.03599 6.22433 5.82394 6.44754C5.61189 6.67076 5.38123 6.87537 5.13198 7.06138C4.88272 7.2474 4.65206 7.44457 4.44001 7.6529C4.22796 7.86123 4.12193 8.03237 4.12193 8.16629C4.12193 8.23326 4.14053 8.31696 4.17773 8.41741C4.21494 8.51786 4.24656 8.59412 4.2726 8.6462C4.29864 8.69829 4.35073 8.78757 4.42885 8.91406C4.50698 9.04055 4.54976 9.11123 4.5572 9.12612C5.12267 10.1455 5.77 11.0197 6.49916 11.7489C7.22833 12.4781 8.10259 13.1254 9.12193 13.6908C9.13681 13.6983 9.2075 13.7411 9.33398 13.8192C9.46047 13.8973 9.54976 13.9494 9.60184 13.9754C9.65392 14.0015 9.73019 14.0331 9.83064 14.0703C9.93108 14.1075 10.0148 14.1261 10.0818 14.1261C10.2157 14.1261 10.3868 14.0201 10.5951 13.808C10.8035 13.596 11.0007 13.3653 11.1867 13.1161C11.3727 12.8668 11.5773 12.6362 11.8005 12.4241C12.0237 12.2121 12.2097 12.106 12.3585 12.106C12.4627 12.106 12.5687 12.1321 12.6766 12.1842C12.7845 12.2362 12.9166 12.3162 13.0728 12.4241C13.2291 12.532 13.3221 12.5971 13.3518 12.6194C13.5379 12.731 13.7369 12.8464 13.9489 12.9654C14.161 13.0844 14.3972 13.2147 14.6576 13.356C14.9181 13.4974 15.119 13.609 15.2603 13.6908C15.7812 13.9513 16.0639 14.1484 16.1085 14.2824C16.1309 14.3344 16.142 14.4126 16.142 14.5167Z"
                        fill="#D9D9D9"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_205_2148">
                        <rect
                          width="15.7143"
                          height="20"
                          fill="white"
                          transform="matrix(1 0 0 -1 0.427734 20.6777)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-of-clock">+998 33 338 11 88</span>
                </div>
                {/*  */}
                <div className="d-flex gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_205_2152)">
                      <path
                        d="M18.714 17.4633V8.89188C18.4759 9.15974 18.2192 9.40527 17.9439 9.62849C15.9499 11.1612 14.365 12.4187 13.1895 13.4008C12.81 13.7207 12.5012 13.97 12.2631 14.1486C12.025 14.3271 11.7032 14.5076 11.2977 14.6899C10.8922 14.8722 10.5109 14.9633 10.1537 14.9633H10.1426H10.1314C9.77427 14.9633 9.39295 14.8722 8.98744 14.6899C8.58194 14.5076 8.26014 14.3271 8.02204 14.1486C7.78395 13.97 7.47517 13.7207 7.0957 13.4008C5.92011 12.4187 4.33529 11.1612 2.34124 9.62849C2.06594 9.40527 1.80924 9.15974 1.57115 8.89188V17.4633C1.57115 17.56 1.60649 17.6437 1.67718 17.7144C1.74786 17.7851 1.83157 17.8205 1.92829 17.8205H18.3569C18.4536 17.8205 18.5373 17.7851 18.608 17.7144C18.6787 17.6437 18.714 17.56 18.714 17.4633ZM18.714 5.7334C18.714 5.71852 18.714 5.67759 18.714 5.61063C18.714 5.54367 18.714 5.49344 18.714 5.45996C18.714 5.42648 18.7121 5.37812 18.7084 5.31487C18.7047 5.25163 18.6935 5.20512 18.6749 5.17536C18.6563 5.1456 18.6359 5.11212 18.6136 5.07492C18.5912 5.03771 18.5578 5.00981 18.5131 4.99121C18.4685 4.97261 18.4164 4.96331 18.3569 4.96331H1.92829C1.83157 4.96331 1.74786 4.99865 1.67718 5.06934C1.60649 5.14002 1.57115 5.22373 1.57115 5.32045C1.57115 6.57045 2.11802 7.627 3.21177 8.49009C4.64779 9.62105 6.1396 10.8004 7.68722 12.028C7.73186 12.0652 7.86207 12.175 8.07785 12.3573C8.29362 12.5396 8.46475 12.6791 8.59124 12.7758C8.71773 12.8725 8.88328 12.9897 9.08789 13.1274C9.2925 13.265 9.48038 13.3673 9.65151 13.4343C9.82264 13.5013 9.98261 13.5347 10.1314 13.5347H10.1426H10.1537C10.3025 13.5347 10.4625 13.5013 10.6336 13.4343C10.8048 13.3673 10.9927 13.265 11.1973 13.1274C11.4019 12.9897 11.5674 12.8725 11.6939 12.7758C11.8204 12.6791 11.9915 12.5396 12.2073 12.3573C12.4231 12.175 12.5533 12.0652 12.5979 12.028C14.1456 10.8004 15.6374 9.62105 17.0734 8.49009C17.4752 8.17015 17.8491 7.74047 18.195 7.20103C18.541 6.6616 18.714 6.17239 18.714 5.7334ZM20.1426 5.32045V17.4633C20.1426 17.9544 19.9677 18.3748 19.618 18.7245C19.2683 19.0742 18.8479 19.249 18.3569 19.249H1.92829C1.43722 19.249 1.01683 19.0742 0.667132 18.7245C0.317429 18.3748 0.142578 17.9544 0.142578 17.4633V5.32045C0.142578 4.82938 0.317429 4.40899 0.667132 4.05929C1.01683 3.70959 1.43722 3.53474 1.92829 3.53474H18.3569C18.8479 3.53474 19.2683 3.70959 19.618 4.05929C19.9677 4.40899 20.1426 4.82938 20.1426 5.32045Z"
                        fill="#D9D9D9"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_205_2152">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="matrix(1 0 0 -1 0.142578 20.6777)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-of-clock">murod@taklog.com</span>
                </div>
              </div>

              <div className="block-for-socials-bg-offcanvas">
             <a className="links-for-social-media-bg-offcanvas" href="https://m.facebook.com/taklog.uz/">{Facebook}</a>
             <a className="links-for-social-media-bg-offcanvas" href="https://de.linkedin.com/company/taklog-int-trans-gmbh?trk=organization_guest_main-feed-card_feed-actor-name">{Linkedin}</a>
             <a className="links-for-social-media-bg-offcanvas" href="t.me/taklog">{Telegram}</a>
             <a className="links-for-social-media-bg-offcanvas" href="https://instagram.com/taklog.uz?igshid=NTc4MTIwNjQ2YQ==">{Instagram}</a>
            </div>

            </Nav>
          </div>
          <button className="close-button" onClick={closeMenu}>
            &times;
          </button>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarTop;

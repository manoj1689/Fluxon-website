
"use client"
// YourHeaderComponent.js
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './page.module.css';
import Image from 'next/image';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseMove = () => {

    setVisible(true);
  };



  const handleScroll = () => {

    const currentScrollPos = window.scrollY || document.documentElement.scrollTop;
    const shouldShowNavbar = currentScrollPos <= prevScrollPos || currentScrollPos < 100;
    if (!menuOpen) {
      setVisible(shouldShowNavbar);
      setPrevScrollPos(currentScrollPos);
    }
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [prevScrollPos]);

  return (
    <>
      <div
        className={`${styles.NavBar} ${visible ? '' : styles.HiddenNavbar}`} style={{ backgroundColor: visible ? '#18181C' : 'transparent' }}
        onMouseMove={handleMouseMove}
      >
        <Container >
          <Row className={styles.DesktopBar} >
            <Col sm={2} md={2} lg={2}  >
              <div >
                <Link href="/">
                  <Image
                    src="/webLogo.svg"
                    width={110}
                    height={20}
                    alt="Website logo"
                  />
                </Link>
              </div>
            </Col>
            <Col sm={8} md={8} lg={8}>
              <div className={styles.HeaderLists}>
                <div >
                  <Link className={styles.HeaderLink} href="/pages/Who">Who we are</Link>
                </div>
                <div  >
                  <Link className={styles.HeaderLink} href="/pages/What">What we do</Link>
                </div>
                <div >
                  <Link className={styles.HeaderLink} href="/pages/CaseStudies">Case studies</Link>
                </div>
                <div >
                  <Link className={styles.HeaderLink} href="/pages/Career">Careers</Link>
                </div>
              </div>
            </Col>
            <Col sm={2} md={2} lg={2} >
               <Link href="/pages/GetTouch"><div className={styles.getTouch}>Get in touch</div></Link>
            </Col>
          </Row>


        </Container>
      </div>

      <Container fluid
        className={`${styles.NavBarSmall} ${menuOpen ? '' : (visible ? '' : styles.HiddenNavbarSmall)}`} style={{ backgroundColor: menuOpen || visible ? '#18181C' : 'transparent' }}
        onMouseMove={handleMouseMove} >

        <Row className={styles.smallScreenBar}  >

          <Col xs={10} >
            <Link href="/">
              <Image
                src="/webLogo.svg"
                width={110}
                height={20}
                alt="Website logo"
              />
            </Link>

          </Col >

          <Col xs={2} onClick={toggleMenu} className={styles.MenuIcon}>
            {menuOpen ? <IoClose size={25} onClick={() => setMenuOpen(false)} /> : <GiHamburgerMenu size={25} />}
          </Col>
        </Row>



        {menuOpen && (
          <div className={styles.DropdownMenuList}>
            <Row className={styles.DropdownMenus}>
              <div>
                <div className={styles.DropdownMenuDiv} >
                  <Link className={styles.MobileLink} href="/pages/Who" onClick={() => setMenuOpen(!menuOpen)}>Who We Are</Link>
                </div>
                <div className={styles.DropdownMenuDiv}  >
                  <Link className={styles.MobileLink} href="/pages/What" onClick={() => setMenuOpen(!menuOpen)} >What We Are</Link>
                </div>
                <div className={styles.DropdownMenuDiv}  >
                  <Link className={styles.MobileLink} href="/pages/CaseStudies" onClick={() => setMenuOpen(!menuOpen)}>Case Studies</Link>
                </div>
                <div className={styles.DropdownMenuDiv} >
                  <Link className={styles.MobileLink} href="/pages/Career" onClick={() => setMenuOpen(!menuOpen)}>Career</Link>
                </div>

              </div>


            </Row>
            <Row>
             <Link href="/pages/GetInTouch" onClick={() => setMenuOpen(!menuOpen)}> <div className={styles.getTouch}> Get in touch</div></Link>
            </Row>
          </div>
        )}


      </Container>


    </>
  );
}

export default Header;


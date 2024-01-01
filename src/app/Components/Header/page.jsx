
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
  const [whoActive,setWhoActive]=useState(false);
  const [whatActive,setWhatActive]=useState(false);
  const [caseActive,setCaseActive]=useState(false);
  const [careerActive,setCareerActive]=useState(false)
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
                  <Link className={styles.HeaderLink} href="/pages/Who">
                  <span className={whoActive&& styles.activeLink} onClick={()=>{setCareerActive(false);setCaseActive(false),setWhoActive(true),setWhatActive(false)}}>
                  Who we are
                    </span>
                    </Link>
                </div>
                <div  >
                  <Link className={styles.HeaderLink} href="/pages/What">
                  <span className={whatActive&& styles.activeLink} onClick={()=>{setCareerActive(false);setCaseActive(false),setWhoActive(false),setWhatActive(true)}}>
                  What we do
                    </span>
                    </Link>
                </div>
                <div >
                  <Link className={styles.HeaderLink} href="/pages/CaseStudies">
                  <span className={caseActive&& styles.activeLink} onClick={()=>{setCareerActive(false);setCaseActive(true),setWhoActive(false),setWhatActive(false)}}>
                  Case studies
                    </span>
                    </Link>
                </div>
                <div  >
                  <Link className={styles.HeaderLink} href="/pages/Career">
                    <span className={careerActive && styles.activeLink} onClick={()=>{setCareerActive(true);setCaseActive(false),setWhoActive(false),setWhatActive(false)}}>
                    Careers
                    </span>
                    </Link>
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
                  <Link className={styles.MobileLink} href="/pages/Who" onClick={() => setMenuOpen(!menuOpen)}>
                  <span className={whoActive&& styles.MobileActiveLink} onClick={()=>{setCareerActive(false);setCaseActive(false),setWhoActive(true),setWhatActive(false)}}>
                  Who we are
                    </span> </Link>
                </div>
                <div className={styles.DropdownMenuDiv}  >
                  <Link className={styles.MobileLink} href="/pages/What" onClick={() => setMenuOpen(!menuOpen)} >
                  <span className={whatActive&& styles.MobileActiveLink} onClick={()=>{setCareerActive(false);setCaseActive(false),setWhoActive(false),setWhatActive(true)}}>
                  What we do
                    </span></Link>
                </div>
                <div className={styles.DropdownMenuDiv}  >
                  <Link className={styles.MobileLink} href="/pages/CaseStudies" onClick={() => setMenuOpen(!menuOpen)}>
                  <span className={caseActive&& styles.MobileActiveLink} onClick={()=>{setCareerActive(false);setCaseActive(true),setWhoActive(false),setWhatActive(false)}}>
                  Case studies
                    </span></Link>
                </div>
                <div className={styles.DropdownMenuDiv} >
                  <Link className={styles.MobileLink} href="/pages/Career" onClick={() => setMenuOpen(!menuOpen)}>
                  <span className={careerActive && styles.MobileActiveLink} onClick={()=>{setCareerActive(true);setCaseActive(false),setWhoActive(false),setWhatActive(false)}}>
                    Career
                    </span></Link>
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


"use client"
import React, { useState } from 'react'
import styles from './page.module.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap'

import Image from 'next/image'
import Link from 'next/link';
function Footer() {
  const [company, setCompany] = useState(false);
  const [apps, setApps] = useState(false);
  const [connect, setConnect] = useState(false);
  const appList = () => {
    setApps(!apps);
  };
  const companyList = () => {
    setCompany(!company);
  };
  const connectList = () => {
    setConnect(!connect);
  };
  return (
    <div className={styles.Footer}>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6}>
            <div className={styles.FooterCol1}>
              <Image
                src="/webLogo.svg"
                width={120}
                height={22}
                alt="Website logo"
              />
              <p className={styles.FooterText1}>Stay on top of the latest tech trends and Fluxon news.</p>
              <Row>
                <Col xs={12} sm={12} md={12} lg={8} ><Form.Control className={styles.FormInput} type="text" placeholder="Email" required /></Col>
                <Col xs={12} sm={12} md={12} lg={4}>
                  <div className={styles.buttonDiv}>
                    <Button size="lg" className={styles.SubsButton}> Subscribe</Button>
                  </div></Col>
              </Row>
              <p className={styles.subscribeTag}>By subscribing, you consent to Fluxon processing your information in
                accordance with our <Link className={styles.PrivacyLink} target="_blank" href="/privacy-policy" >Privacy Policy</Link>.
              </p>
            </div>
            <p><Link className={styles.Customize} href="/Cookies">Customize cookies </Link></p>
          </Col>


          <Col xs={12} sm={12} md={12} lg={6} className={styles.FooterColumn2}>
            <Row>
              <Col>
                <Row className={styles.FooterRowTop}>Company</Row>
                <Row className={styles.FooterRowBottom}>Who we are</Row>
                <Row className={styles.FooterRowBottom}>What we do</Row>
                <Row className={styles.FooterRowBottom}>Careers</Row>
                <Row className={styles.FooterRowBottom}>Contact</Row>
              </Col>
              <Col  >
                <Row className={styles.FooterRowTop}>Fluxon Apps</Row>
                <Row className={styles.FooterRowBottom}>Dory</Row>
                <Row className={styles.FooterRowBottom}>Pluto</Row>
                <Row className={styles.FooterRowBottom}>OpenBracket</Row>
              </Col>

              <Col >
                <Row className={styles.FooterRowTop}>Connect</Row>
                <Row className={styles.FooterRowBottom}>Glassdoor</Row>
                <Row className={styles.FooterRowBottom}>LinkedIn</Row>
              </Col>
            </Row>
            <Row className={styles.rightReserved}>
            <p className={styles.subscribeTag}> <Link className={styles.PrivacyLink} target="_blank" href="/privacy-policy" >Privacy Policy</Link> © 2023 Fluxon Apps LLC. All rights reserved.</p> 
            </Row>
          </Col>

          <Col xs={12} sm={12} md={12} lg={6} className={styles.FooterCol3}>
            <Row>
              <Row>
              
                <div className={styles.FooterRowTop} onClick={companyList}>
                    <div className={styles.dropDown}>
                      <div > Company</div>
                      <div><Image style={{ transform: company ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    src="/dropArrow.svg"
                    width={13}
                    height={9}
                    alt="Website logo"
                  /></div>
                  </div>
                    </div>

                <div style={{ display: company ? 'block' : 'none' }}>
                  <Row className={styles.FooterRowBottom}>Who we are</Row>
                  <Row className={styles.FooterRowBottom}>What we do</Row>
                  <Row className={styles.FooterRowBottom}>Careers</Row>
                  <Row className={styles.FooterRowBottom}>Contact</Row>

                </div>

              </Row>
              <Row  >
              <div className={styles.FooterRowTop} onClick={appList}>
                    <div className={styles.dropDown}>
                      <div > Fluxon Apps</div>
                      <div><Image style={{ transform: apps ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    src="/dropArrow.svg"
                    width={13}
                    height={9}
                    alt="Website logo"
                  /></div>
                  </div>
                    </div>
                   
                <div style={{ display: apps ? 'block' : 'none' }}>
                  <Row className={styles.FooterRowBottom}>Dory</Row>
                  <Row className={styles.FooterRowBottom}>Pluto</Row>
                  <Row className={styles.FooterRowBottom}>OpenBracket</Row>

                </div>

              </Row>

              <Row >
                
                <div className={styles.FooterRowTop} onClick={connectList}>
                    <div className={styles.dropDown}>
                      <div > Connect</div>
                      <div><Image style={{ transform: connect ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    src="/dropArrow.svg"
                    width={13}
                    height={9}
                    alt="Website logo"
                  /></div>
                  </div>
                    </div>
                <div style={{ display: connect ? 'block' : 'none' }}>
                  <Row className={styles.FooterRowBottom}>Glassdoor</Row>
                  <Row className={styles.FooterRowBottom}>LinkedIn</Row>
                </div>

              </Row>
            </Row>
            <Row className={styles.rightReserved}>
            <p className={styles.subscribeTag}> <Link className={styles.PrivacyLink} target="_blank" href="/privacy-policy" >Privacy Policy</Link> © 2023 Fluxon Apps LLC. All rights reserved.</p>  
            </Row>
          </Col>
        </Row>
         
      </Container>

    </div>
  )
}

export default Footer
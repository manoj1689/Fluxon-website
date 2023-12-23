"use client"
import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import styles from './page.module.css';

import { GoArrowRight } from "react-icons/go";
import Image from 'next/image'
import Link from 'next/link'
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from "react";
import { items } from "/public/Items.json";
import Form from 'react-bootstrap/Form';
function GetTouch() {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <div className={styles.getTouchDiv}>
     
        <Container >
        
        <Row className={styles.GetTouchContainer}>
          <Col sm={12} md={12} lg={6} className={styles.contactBackground}>
            
            <div className={styles.contactText}>
              <div  className={styles.contactTextHeading}>
              <div className={styles.Text}> Let’s build </div>
              <div className={styles.Text}>together<span className={styles.TextFullStop}>.</span></div>

              </div>
           
              <div className={styles.contactTextDetails}>
                We look forward to hearing about your project and how we can help.
              </div>
            </div>
          </Col>
          <Col sm={12} md={12} lg={6} className={styles.contactBackgroundForm}>
            <div className={styles.contactForm}>
              <Row>
                <Col xs={12} md={12} lg={6} className={styles.FormBox}><Form.Control className={styles.FormInput} size="lg" type="text" placeholder="First Name*" required /></Col>
                <Col xs={12} md={12} lg={6} className={styles.FormBox}><Form.Control className={styles.FormInput} size="lg" type="text" placeholder="Last Name*" required /></Col>
              </Row>
              <Row>
                <Col xs={12} md={12} lg={6} className={styles.FormBox}><Form.Control className={styles.FormInput} size="lg" type="email" placeholder="Email*" required /></Col>
                <Col xs={12} md={12} lg={6} className={styles.FormBox}><Form.Control className={styles.FormInput} size="lg" type="text" placeholder="Company*" required /></Col>
              </Row>
              <Row className={styles.FormBox}>

                <Form.Control className={styles.FormInput} as="textarea" rows={3} placeholder="Project Detail (Optional)" />

              </Row>
              <Row>
                <Col xs={12} md={6} lg={7} >
                  {isClient ?
                    <div className={styles.Verify}>
                      <div className={styles.randomBox}>{Math.floor(Math.random() * 10)} + {Math.floor(Math.random() * 10)} =

                      </div>
                      <div>
                        <span> <Form.Control className={styles.FormInput} required /> </span>
                      </div>
                    </div>
                  : ""}
                </Col>
                <Col xs={12} md={6} lg={5}  >
                  <Button className={styles.FormButton}>
                  Get in Touch  
                <span className={styles.ButtonGoArrow}><GoArrowRight /></span>
                </Button>
                </Col>
              </Row>
            </div>

          </Col>
        </Row>
      </Container>
      
        
    </div>
  )
}

export default GetTouch

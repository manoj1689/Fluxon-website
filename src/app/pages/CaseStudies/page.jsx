import React from 'react'
import styles from './page.module.css';
import { Container, Row, Col, Button } from 'react-bootstrap'
function CaseStudies() {
  return (
    <div className={styles.WhatPage} >
    <div className={styles.WhatTopBackground}>
      <div className={styles.MotionImage1}></div>
      <div className={styles.MotionImage2}></div>
      <Container className={styles.Top}>
        <div className={styles.TextDiv}>
          <div className={styles.Text}> The dreams </div>
          <div className={styles.Text}>we’ve built<span className={styles.TextFullStop}>.</span></div>
        
        </div>


      </Container>
    </div>
</div>
  )
}

export default CaseStudies
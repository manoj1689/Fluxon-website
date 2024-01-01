import React from 'react'
import styles from './page.module.css';
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image';
import Link from 'next/link';
function CaseStudies() {
  return (
    <div className={styles.CasePage} >
    <div className={styles.CaseTopBackground}>
      <div className={styles.MotionImage1}></div>
      <div className={styles.MotionImage2}></div>
      <Container className={styles.Top}>
        <div className={styles.TextDiv}>
          <div className={styles.Text}> The dreams </div>
          <div className={styles.Text}>we’ve built<span className={styles.TextFullStop}>.</span></div>
        
        </div>


      </Container>
    </div>
    <div className={styles.CaseStudiesTryDiv} >
      <Container>
        <Row>
          <Col md={6} lg={5} className={styles.CaseImageCol}>
          <div className={styles.CaseImage}>
                <Image
                      className="img-fluid"
                      src="/FluxonProductsTable.png"
                      width={500}
                      height={500}
                      alt="image"
                    />
                </div>
             
          
          </Col>
          <Col md={6} lg={7}>
          <div  className={styles.CaseStudiesTryCol}>
              <div className={styles.CaseTryText}>
                <h4 className={styles.CaseTryTittle}>Fluxon Apps</h4>
                <p className={styles.CaseTryDetail}>We build and incubate our own products, focused on solutions to help teams work faster and easier.</p>
                <Link href="/Products">
                  <div className={styles.TryCase}>Try our Products <span>
                    <Image
                      src="/LeadershipArrow.svg"
                      width={16}
                      height={17}
                      alt="Go Arrow"
                    />
                  </span> </div>

                </Link>

              </div>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
</div>
  )
}

export default CaseStudies
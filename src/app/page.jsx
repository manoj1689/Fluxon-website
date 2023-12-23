"use client"
import React from 'react'
import styles from './page.module.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { GoArrowRight } from "react-icons/go";
import Image from 'next/image'
import Link from 'next/link'
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from "react";
import { items } from "/public/Items.json";
import Form from 'react-bootstrap/Form';

function Home() {
  const { bootstrap } = items;
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <div className={styles.HomePage} >
      <div className={styles.HomeTopBackground}>
        <div className={styles.MotionImage1}></div>
        <div className={styles.MotionImage2}></div>
        <Container className={styles.Top}>
          <div className={styles.Text}> Let’s build </div>
          <div className={styles.Text}>the future together<span className={styles.TextFullStop}>.</span></div>
          <div className={styles.TextDetails}>
            Fluxon is a team of Google engineers & tech leaders trusted by
            the most innovative companies to design, build and ship world-class software products.
          </div>
          <div className={styles.TopCompanies}>
            The go-to partner for world-leading brands and high-growth startups.<span className={styles.TopCompaniesLink}><Link href="/seework">See our work <GoArrowRight /></Link></span>
          </div>
          <Row className={styles.TopCompaniesList}>
            <Col className={styles.TopCompaniesName}>
              <Image
                src="/google.svg"
                width={73}
                height={26}
                alt="google"
              />
            </Col>
            <Col className={styles.TopCompaniesName}>
              <Image
                src="/zapier.svg"
                width={88}
                height={24}
                alt="Zapier"
              />
            </Col>
            <Col className={styles.TopCompaniesName}>
              <Image
                src="/stripe.svg"
                width={60}
                height={25}
                alt="stripe"
              />
            </Col>
            <Col className={styles.TopCompaniesName}>
              <Image
                src="/commure.svg"
                width={126}
                height={30}
                alt="Commure"
              />
            </Col>
            <Col className={styles.TopCompaniesName}>
              <Image
                src="/aws.svg"
                width={43}
                height={26}
                alt="aws"
              />
            </Col>
            <Col className={styles.TopCompaniesName}>
              <Image
                src="/health.svg"
                width={141}
                height={23}
                alt="health"
              />
            </Col>
          </Row>
        </Container>


      </div>
      <div className={styles.Middle}>
        <Container>
          <div className={styles.MiddleBox}>
            <div className={styles.WhatText}>
              What we do
            </div>
            <div className={styles.WhatTextDetail}>
              Across product strategy, UI/UX design, and end-to-end development, we craft the team and project to your needs.
            </div>
          </div>
          <div>
            <Row>
              <Col xs={6} sm={6} lg={3} className={styles.WhatTextDoBox}>
                <div>
                  <Image
                    src="/product.svg"
                    width={55}
                    height={55}
                    alt="Product strategy"
                  />
                </div>
                <div className={styles.WhatTextDoHeading}>
                  Product strategy
                </div>
                <div className={styles.WhatTextDoDescription}>
                  A strategic vision to define your product’s unique value and successfully bring it to market.
                </div>
              </Col>
              <Col xs={6} sm={6} lg={3} className={styles.WhatTextDoBox}>
                <div>
                  <Image
                    src="/build.svg"
                    width={55}
                    height={55}
                    alt="Full product builds"
                  />
                </div>
                <div className={styles.WhatTextDoHeading}>
                  Full product builds
                </div>
                <div className={styles.WhatTextDoDescription}>
                  End-to-end custom software development and ongoing maintenance.
                </div>

              </Col>
              <Col xs={6} sm={6} lg={3} className={styles.WhatTextDoBox}>
                <div>
                  <Image
                    src="/staff.svg"
                    width={55}
                    height={55}
                    alt="Staff augmentation "
                  />
                </div>
                <div className={styles.WhatTextDoHeading}>
                  Staff augmentation
                </div>
                <div className={styles.WhatTextDoDescription}>
                  World-class experts to accelerate development alongside your existing team.
                </div>

              </Col>
              <Col xs={6} sm={6} lg={3} className={styles.WhatTextDoBox}>
                <div>
                  <Image
                    src="/ux.svg"
                    width={55}
                    height={55}
                    alt="ux & interface design"
                  />
                </div>
                <div className={styles.WhatTextDoHeading}>
                  UX & interface design
                </div>
                <div className={styles.WhatTextDoDescription}>
                  Delightful, user-centric interfaces and experiences designed with best practices.
                </div>

              </Col>
            </Row>
            <div className={styles.LearnMoreDiv}>
              <div className={styles.LearnMore}>
                Learn More
              </div>
            </div>
          </div>
        </Container>

      </div>
      <Container>
        <h3 className={styles.DiscoverBox}>
          Discover Our Work
        </h3>

        <Row>
          <Col className={styles.googleBox}>
            <div className={styles.googleBoxTop}>
              <Image
                src="/googleColor.svg"
                width={133}
                height={45}
                alt="Google "
              />
              <div>
                <p className={styles.DiscoverGoogleTittle}>
                  Tablet
                </p>

              </div>
              <div className={styles.DiscoverGoogleDisc} >
                A custom kiosk and tablet experience to streamline user feedback from Google’s micro-kitchens.
              </div>

            </div>
            <div className={styles.DiscoverImageBox}>
              <Image className={styles.googleDiscoverImage}
                src="/GoogleDiscover.webp"
                width={400}
                height={200}

                alt="Google Image"
              />

            </div>


          </Col>

          <Col className={styles.googleBox}>
            <div className={styles.googleBoxTop}>
              <Image
                src="/omnivoreColor.svg"
                width={133}
                height={45}
                alt="omnivore "
              />
              <div>
                <p className={styles.DiscoverGoogleTittle}>
                  Web Reader
                </p>

              </div>
              <div className={styles.DiscoverGoogleDisc} >
                Save, organize, and share anything online, with just one click. Effortlessly curate your digital world.
              </div>

            </div>
            <div className={styles.DiscoverImageBox}>
              <Image className={styles.googleDiscoverImage}
                src="/OmnivoreDiscover.webp"
                width={400}
                height={200}

                alt="Omnivore Image"
              />

            </div>


          </Col>
          <Col className={styles.HealthBox}>
            <div className={styles.googleBoxTop}>
              <Image
                src="/healthColor.svg"
                width={133}
                height={45}
                alt="Google "
              />
              <div>
                <p className={styles.DiscoverGoogleTittle}>
                  Data System
                </p>

              </div>
              <div className={styles.DiscoverGoogleDisc} >
                A robust healthcare intelligence system that uses data to deliver an exceptional patient experience.
              </div>

            </div>
            <div className={styles.DiscoverImageBox}>

              <Image className={styles.googleDiscoverImage}
                src="/AgilonDiscover.webp"
                width={400}
                height={200}

                alt="Agilon Image"
              />
            </div>

          </Col>
        </Row>
        <div className={styles.DiscoverBoxSeeAll}>
          <div className={styles.DiscoverBoxSeeAllText}>
            See All Case Studies
          </div>

        </div>

      </Container>
      <div className={styles.CompanyReview}>
        <Container fluid>
          <Carousel data-bs-theme="dark" controls={true}  >
            {bootstrap.map((item) => (
              <Carousel.Item key={item.id} interval={4000} className={styles.caption}>

                <Carousel.Caption className={styles.captionText}>
                  <div className={styles.Dash}>“</div>
                  <h3 >{item.title}</h3>
                  <p className={styles.captionName}>{item.name}</p>
                  <div>
                    <Image
                      src={item.companyLogo}
                      width={150}
                      height={50}

                      alt="Agilon Image"
                    />
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>

      </div>
      <Container>
        <Row>
          <Col lg={5} className={styles.contactBackground}>
            <div className={styles.contactBackgroundImage}>
              <Image
                src="/ContactBg.png"
                layout='fill'
                alt="Contact Background"
              />
            </div>
            <div className={styles.contactText}>
              <div className={styles.Text}> Let’s build </div>
              <div className={styles.Text}>together<span className={styles.TextFullStop}>.</span></div>
              <div className={styles.contactTextDetails}>
                We look forward to hearing about your project and how we can help.
              </div>
            </div>
          </Col>
          <Col lg={7} className={styles.contactFormCol}>
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
      <div className={styles.insightBox}>
      <Container>
        <div className={styles.insightHeading}>Insights</div>
      <Row>
        <Col xs={12} md={12} lg={3} className={styles.insightCol}>
        <Image className={styles.insightImage}
                src="/insight1.png"
                width={300}
                height={206}
                alt="insight1"
              />
              <div className={styles.insightText}>
              <p className={styles.insightTittle}>
                    Fast Company
              </p>
              <h4 className={styles.insightTextH4}>How to choose the right external development team</h4>
              <p className={styles.insightTextP}>Considering an external development team, but not sure what to look for? 
              Fluxon CEO Erad Fridman shares five tips for choosing 
              the best partner to bring your idea to market. </p> 
              <p>Read More <span>
              <Image 
                src="/insightArrow.svg"
                width={16}
                height={17}
                alt="Read More Arrow"
              />
                </span></p>
              </div>
             
        </Col>
        <Col xs={12} md={12} lg={3} className={styles.insightCol}>
        <Image className={styles.insightImage}
                src="/insight2.png"
                width={300}
                height={206}
                alt="insight2"
              />
              <div className={styles.insightText}>
              <p className={styles.insightTittle}> TIMES OF INDIA</p>
              <h4 className={styles.insightTextH4} >How to build mobile apps in today’s dynamic environment</h4>
              <p className={styles.insightTextP}>
              From feature flags to app sizes in developing markets, mobile engineers face some unique challenges. 
              Praveen Telugu, Director of Engineering, shares his top six tips to avoid mobile development pitfalls.
              </p>
              <p>Read More <span>
              <Image 
                src="/insightArrow.svg"
                width={16}
                height={17}
                alt="Read More Arrow"
              />
                </span></p>
              </div>
           
        </Col>
        <Col xs={12} md={12} lg={3} className={styles.insightCol}>
        <Image className={styles.insightImage}
                src="/insight3.png"
                width={300}
                height={206}
                alt="insight3"
              />
              <div className={styles.insightText}>
              <p className={styles.insightTittle}>Forbes</p>
              <h4 className={styles.insightTextH4}>How to launch a product with minimal resources</h4>
              <p className={styles.insightTextP}>Let’s say you have a brilliant idea for a software product but one big constraint: a tight budget.
                 How do you build your product when you have limited funds? 
                A scrappy approach may not be the obstacle you think it is. 
                Today’s high-growth startups are</p>
              <p>Read More <span>
              <Image 
                src="/insightArrow.svg"
                width={16}
                height={17}
                alt="Read More Arrow"
              />
                </span></p>
              </div>
              
        </Col>
        <Col xs={12} md={12} lg={3} className={styles.insightCol}>
        <Image className={styles.insightImage}
                src="/insight4.png"
                width={300}
                height={206}
                alt="insight4"
              />
              <div className={styles.insightText}>
              <p className={styles.insightTittle}>Forbes</p>
              <h4 className={styles.insightTextH4}>Five ways to make sure you hire the right product manager for the job</h4>
              <p className={styles.insightTextP}>
                Product management plays a critical role in any organization and can make or break a product. As CEOs of the product, 
              product managers are broadly tasked with setting the product vision
              </p>
              <p>Read More <span>
              <Image 
                src="/insightArrow.svg"
                width={16}
                height={17}
                alt="Read More Arrow"
              />
                </span></p>
              </div>
              
        </Col>
      </Row>
      </Container>
      <Container>
      <div className={styles.Feature}>
            Feature In
            </div>
      <div className={styles.FeatureLogos}>
      <Row>
          
          <Col>
          <Image 
                src="/fastCompany.svg"
                width={126}
                height={37}
                alt="fast company"
              />
          </Col>
          <Col>
         
          <Image 
                src="/yourCompany.svg"
                width={97}
                height={38}
                alt="fast company"
              /></Col>
          <Col>
          <Image 
                src="/forbes.svg"
                width={103}
                height={28}
                alt="fast company"
              /></Col>
          <Col>
          <Image 
                src="/nasdaq.svg"
                width={103}
                height={28}
                alt="fast company"
              /></Col>
          <Col>
          <Image 
                src="/business.svg"
                width={102}
                height={32}
                alt="fast company"
              /></Col>
        
        </Row>
        
        </div>   
       
       
      </Container>
      
      </div>
      
    </div>
  )
}

export default Home
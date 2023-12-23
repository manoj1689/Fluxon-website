import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
function What() {
  return (
    <div className={styles.WhatPage} >
      <div className={styles.WhatTopBackground}>
        <div className={styles.MotionImage1}></div>
        <div className={styles.MotionImage2}></div>
        <Container className={styles.Top}>
          <div className={styles.TextDiv}>
            <div className={styles.Text}> You dream it<span className={styles.TextFullStop}>.</span> </div>
            <div className={styles.Text}>We build it<span className={styles.TextFullStop}>.</span></div>
          </div>


        </Container>



      </div>
      <div>
        <Container >
          <Row className={styles.InfoRow}>
            <Col sm={12} md={6} lg={6}>
              <div className={styles.InfoImage}>
                <Image
                  src="/InfoSectionImage.webp"
                  width={500}
                  height={400}
                  alt="image"
                  className="img-fluid"
                />

              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className={styles.InfoColDiv}>
                <div >
                  <div className={styles.InfoColText}><h2 className={styles.TextHeading}>We take products from ideas to launch – fast</h2>
                    <p className={styles.TextDetails}>Speed and quality are the core of great product development.
                      And we deliver both. From strategy and ideation to full-cycle development, we build an expert
                      team around your needs so you can launch faster and with peace of mind.</p></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.whatAcross}>

        <Container>
          <div className={styles.WhatWeDoDiv}>
            <h3 className={styles.whatTittle}>What we do</h3>
            <p className={styles.whatDesc}>Across product strategy, UI/UX design, and end-to-end development, we craft the team and project to your needs.</p>
          </div>
          <Row>

            <Col sm={6} xs={6} md={6} lg={3}>
              <div>
                <Image
                  src="/WhatProduct.svg"
                  width={55}
                  height={55}
                  alt="image"

                />
              </div>

              <h4 className={styles.whatAcrossHeading}>Product strategy</h4>
              <p className={styles.whatAcrossDetail}>A strategic vision to define your product’s unique value and
                successfully bring it to market.</p>
            </Col>
            <Col sm={6} xs={6} md={6} lg={3}>
              <div>
                <Image
                  src="/WhatBuild.svg"
                  width={55}
                  height={55}
                  alt="image"

                />
              </div>
              <h4 className={styles.whatAcrossHeading}>Full product builds</h4>
              <p className={styles.whatAcrossDetail}>End-to-end custom software development and ongoing maintenance.</p>
            </Col>
            <Col sm={6} xs={6} md={6} lg={3}>
              <div>
                <Image
                  src="/WhatStaff.svg"
                  width={55}
                  height={55}
                  alt="image"

                />
              </div>
              <h4 className={styles.whatAcrossHeading}>Staff augmentation</h4>
              <p className={styles.whatAcrossDetail}>World-className experts to accelerate development alongside your existing team.</p>
            </Col>
            <Col sm={6} xs={6} md={6} lg={3}>
              <div>
                <Image
                  src="/WhatUx.svg"
                  width={55}
                  height={55}
                  alt="image"

                />
              </div>
              <h4 className={styles.whatAcrossHeading}>UX & interface design</h4>
              <p className={styles.whatAcrossDetail}>Delightful, user-centric interfaces and experiences designed with best practices.</p>
            </Col>
            <Col sm={6} xs={6} md={6} lg={3}>
              <div>
                <Image
                  src="/WhatMvp.svg"
                  width={55}
                  height={55}
                  alt="image"

                />
              </div>
              <h4 className={styles.whatAcrossHeading}>MVP development</h4>
              <p className={styles.whatAcrossDetail}>Zero-to-one development from idea stage through to launch, iteration, and product-market-fit.</p>
            </Col>
            <Col sm={6} xs={6} md={6} lg={3}>
              <div>
                <Image
                  src="/WhatCpo.svg"
                  width={55}
                  height={55}
                  alt="image"

                />
              </div>
              <h4 className={styles.whatAcrossHeading}>Interim CPO/CTO</h4>
              <p className={styles.whatAcrossDetail}>Seasoned product and technical leadership to amplify your team and achieve ambitious goals.</p>
            </Col>
            <Col sm={6} xs={6} md={6} lg={3}>
              <div>
                <Image
                  src="/What3D.svg"
                  width={55}
                  height={55}
                  alt="image"

                />
              </div>
              <h4 className={styles.whatAcrossHeading}>3D expertise</h4>
              <p className={styles.whatAcrossDetail}>Custom 3D assets and polished implementation for Metaverse, AR/VR, and AI products.</p>
            </Col>
            <Col sm={6} xs={6} md={6} lg={3}>
              <div>
                <Image
                  src="/WhatGo.svg"
                  width={55}
                  height={55}
                  alt="image"

                />
              </div>
              <h4 className={styles.whatAcrossHeading}>Go to market</h4>
              <p className={styles.whatAcrossDetail}>Tailored product launches including betas, user acquisition, and sustainable scaling.</p>
            </Col>

          </Row>


        </Container>

      </div>
      <Container>
        <Row className={styles.ourApproachRow}>
          <Col sm={12} md={6} lg={6}>
            <div className={styles.InfoImage}>
              <Image
                src="/OurApproach.webp"
                width={500}
                height={400}
                alt="image"
                className="img-fluid"
              />

            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className={styles.ourApproachDiv}>
              <h3 className={styles.ourApproachHeading}>How we do it</h3>
              <h4 className={styles.ourApproachTittle}>We’re laser-focused on results</h4
              ><p className={styles.ourApproachDetail}>We share daily updates and weekly demos to keep your project on track.</p>
              <h4 className={styles.ourApproachTittle}>We build the team that’s right for you</h4>
              <p className={styles.ourApproachDetail}>We can work independently, or alongside your team to co-create your product.</p>
              <h4 className={styles.ourApproachTittle}>We give you full visibility of our work</h4>
              <p className={styles.ourApproachDetail}>We use open communication channels so you can speak directly to anyone on the project when you need to.</p>
              </div>
          </Col>
        </Row>
      </Container>
      <div className={styles.discoverDiv}>

        <Container>
          <div>
            <h3 className={styles.discoverHeading}>Discover our work</h3>
          </div>
          <div className={styles.discoverRow}>
            <div className={styles.discoverCol}>
              <div className={styles.discoverText}>
                <h4 className={styles.discoverTittle}>Client Products</h4>
                <p className={styles.discoverDetail}>From global brands to pre-seed startups, we work with businesses at every stage of their journey.</p>
                <Link href="/Products">
                  <div className={styles.seeCase}>See case studies  <span>
                    <Image
                      src="/LeadershipArrow.svg"
                      width={16}
                      height={17}
                      alt="Go Arrow"
                    />

                  </span> </div>

                </Link>

              </div>

              <div className={styles.discoverImageDiv}>
                <div className={styles.discoverImage}>
                <Image
                      className="img-fluid"
                      src="/ClientProductsTablet.png"
                      width={400}
                      height={400}
                      alt="image"
                    />
                </div>
             

              </div>
            </div>
            <div  className={styles.discoverCol}>
              <div className={styles.discoverText}>
                <h4 className={styles.discoverTittle}>Fluxon Apps</h4>
                <p className={styles.discoverDetail}>We build and incubate our own products, focused on solutions to help teams work faster and easier.</p>
                <Link href="/Products">
                  <div className={styles.seeCase}>Try our Products <span>
                    <Image
                      src="/LeadershipArrow.svg"
                      width={16}
                      height={17}
                      alt="Go Arrow"
                    />
                  </span> </div>

                </Link>

              </div>
              <div className={styles.discoverImageDiv}>
                <div className={styles.discoverImage}>
                <Image
                      className="img-fluid"
                      src="/FluxonProductsTable.png"
                      width={400}
                      height={400}
                      alt="image"
                    />
                </div>
             

              </div>
            </div>
          </div>
        </Container>

      </div>
    </div>

  )
}

export default What

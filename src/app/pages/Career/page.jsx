"use client"
import React, { useState } from 'react'
import styles from './page.module.css';
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image';
import Link from 'next/link';
function Career() {
  const [edrard, setEdrard] = useState(true)
  const [veronika, setVeronika] = useState(false)
  const [queenie, setQueenie] = useState(false)
  const [rishi, setRishi] = useState(false)
  const [ana, setAna] = useState(false)
  return (
    <div className={styles.CareerPage} >
      <div className={styles.CareerTopBackground}>
        <div className={styles.MotionImage1}></div>
        <div className={styles.MotionImage2}></div>
        <Container className={styles.Top}>
          <div className={styles.TextDiv}>
            <div className={styles.Text}> Let’s build </div>
            <div className={styles.Text}>the future together<span className={styles.TextFullStop}>.</span></div>
          </div>
        </Container>
      </div>
      <div className={styles.CareerFluxonDiv} >
        <Container>
          <Row>
            <Col sm={12} md={6} lg={5} className={styles.CareerImageCol}>
              <div className={styles.CareerImage}>
                <Image
                  className="img-fluid"
                  src="/Career_WhoWeAre.webp"
                  width={500}
                  height={500}
                  alt="image"
                />
              </div>


            </Col>
            <Col sm={12} md={6} lg={7}>

              <div className={styles.CareerTextDiv}>
                <div className={styles.CareerText}>
                  <div className={styles.CareerTextHead}>
                    <div className={styles.CareerTextTittle}>Fluxonian</div>
                    <div className={styles.CareerTextDesc}>/an agent for change/.</div>
                  </div>
                  <p className={styles.CareerTextDetail}>What sets us apart isn’t just the innovative products we build. It’s also the commitment to put people first, no matter what. With our flexible remote work and vacation benefits, pioneering profit sharing plan and other approaches to well-being — you can say our key metric of success is Gross Fluxonian Happiness. So get ready for some radical ideas about how your life and career can exist together, harmoniously.</p></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container >
        <Row className={styles.CareerRow}>
          <Col md={{ span: 6, order: 'first' }} xs={{ span: 12, order: 'last' }} lg={{ span: 7, order: 'first' }} className={styles.CareerProfilesTextCol} >
            <div className={styles.ProfileRow}>
              <div >
                <div className={`${styles.CareerProfiles} ${edrard && styles.SelectedProfile}`} onClick={() => { setEdrard(true); setVeronika(false); setQueenie(false); setRishi(false); setAna(false); }}>
                  <Image
                    className={styles.ProfileImage}
                    src="/Edrard.jpg"
                    width={54}
                    height={54}
                    alt="image"
                  />
                </div>
              </div>
              <div>
                <div className={`${styles.CareerProfiles} ${veronika && styles.SelectedProfile}`} onClick={() => { setEdrard(false); setVeronika(true); setQueenie(false); setRishi(false); setAna(false); }}>
                  <Image
                    className={styles.ProfileImage}
                    src="/Veronika.webp"
                    width={54}
                    height={54}
                    alt="image"
                  />
                </div>
              </div>
              <div>
                <div className={`${styles.CareerProfiles} ${queenie && styles.SelectedProfile}`} onClick={() => { setEdrard(false); setVeronika(false); setQueenie(true); setRishi(false); setAna(false); }}>
                  <Image
                    className={styles.ProfileImage}
                    src="/Queenie.webp"
                    width={54}
                    height={54}
                    alt="image"
                  />
                </div>
              </div>
              <div>
                <div className={`${styles.CareerProfiles} ${rishi && styles.SelectedProfile}`} onClick={() => { setEdrard(false); setVeronika(false); setQueenie(false); setRishi(true); setAna(false); }}>
                  <Image
                    className={styles.ProfileImage}
                    src="/Rishi.webp"
                    width={54}
                    height={54}
                    alt="image"
                  />
                </div>
              </div>
              <div>
                <div className={`${styles.CareerProfiles} ${ana && styles.SelectedProfile}`} onClick={() => { setEdrard(false); setVeronika(false); setQueenie(false); setRishi(false); setAna(true); }}>
                  <Image
                    className={styles.ProfileImage}
                    src="/Ana.webp"
                    width={54}
                    height={54}
                    alt="image"
                  />
                </div>
              </div>
            </div>
            <div className={styles.CareerProfileText}>
              {edrard &&
                (
                  <div>
                    <p className={styles.About}>“I learned to program when the web was still in its early days.
                      Since the browser was really limited, I always got a kick out of trying to get it to do what it wasn’t supposed to.
                      Throughout my career, and especially at Fluxon, my favorite projects have always been some form of that:
                      finding the possibilities beyond what people say you can do.”</p>
                    <h3 className={styles.Name}>Edgard Lindner</h3>
                    <h3 className={styles.Post}>Director of Engineering in Erie, CO</h3>
                  </div>
                )}
              {veronika && (
                <div>
                  <p>
                    <p className={styles.About}>“Fluxon does its best to unleash my potential, giving me the opportunity
                      to showcase my creative ideas, refine my skills and constantly grow. I’m trusted and given the freedom to make
                      decisions, so I can have more of a positive impact — both on the company and on my own career development.”</p>
                  </p>
                  <h3 className={styles.Name}>Veronika Bass</h3>
                  <h3 className={styles.Post}>Senior UX Designer in Warsaw, Poland</h3>
                </div>
              )}
              {queenie && (
                <div>
                  <p className={styles.About}>“A part of me used to think it wasn’t really possible
                    to have empathy at the heart of a company. Fluxon has taught me that not only can you have leaders
                    who genuinely care about people, you can even grow a company where that’s just as important as
                    the business itself.”</p>
                  <h3 className={styles.Name}>Queenie Tran</h3>
                  <h3 className={styles.Post}>Operations Lead in San Francisco, CA</h3>
                </div>
              )}
              {rishi && (
                <div>
                  <p className={styles.About}>“I’ve realized after years in the industry that the best way to lead is through empathy.
                    It’s a shift in mindset — not to demand a set of expectations, but to instead go around and help your team.
                    Being right there next to them, understanding their day-to-day work, the challenges that they’re going through,
                    offering support, or, many times, working alongside them.”</p>
                  <h3 className={styles.Name}>Rishi Srivatsavai</h3>
                  <h3 className={styles.Post}>Director of Engineering in Hyderabad, India</h3>
                </div>
              )}
              {ana && (
                <div>
                  <p className={styles.About}>“Frankly, it’s been awesome to work with all A-players.
                    At Fluxon, I’ve learned faster in the past year than in the past decade about the frontiers of product development
                    because people here are super brilliant, talented and willing to share their knowledge. It feels like having your
                    finger on the pulse of the latest and greatest, constantly.”</p>
                  <h3 className={styles.Name}>Ana Gubin</h3>
                  <h3 className={styles.Post}>Senior Product Manager  in Cambridge, MA</h3>
                </div>
              )}
            </div>


          </Col>
          <Col md={{ span: 6, order: 'last' }} lg={{ span: 5, order: 'last' }} xs={{ span: 12, order: 'first' }} className={styles.CareerProfileImageCol} >

            {edrard && (
              <Image
                className="img-fluid"
                src="/Edrard.jpg"
                width={700}
                height={700}
                alt="image"
              />
            )}



            {veronika &&
              <Image
                className="img-fluid"
                src="/Veronika.webp"
                width={700}
                height={700}
                alt="image"
              />}



            {queenie && <Image
              className="img-fluid"
              src="/Queenie.webp"
              width={700}
              height={700}
              alt="image"
            />}

            {rishi && <Image
              className="img-fluid"
              src="/Rishi.webp"
              width={700}
              height={700}
              alt="image"
            />}


            {ana && <Image
              className="img-fluid"
              src="/Ana.webp"
              width={700}
              height={700}
              alt="image"
            />}



          </Col>
        </Row>
      </Container>
      <div className={styles.BenefitDiv}>
        <Container>
          <div>
            <h3 className={styles.BenefitHead}>Our benefits</h3>
          </div>
          <Row>
            <Col xs={6} sm={6} md={6} lg={4} className={styles.benefitCol} >
              <div className={styles.BenefitImage}>
                <Image

                  src="/Benefitwork.svg"
                  width={55}
                  height={55}
                  alt="image"
                />
              </div>

              <h4 className={styles.BenefitTittle}>Work from home</h4>
              <p className={styles.BenefitDetails}>We set you up with the latest tech and let you work
                how you want, when you want. We care about results, not keeping you at a desk.</p>

            </Col>
            <Col xs={6} sm={6} md={6} lg={4} className={styles.benefitCol} >
              <div className={styles.BenefitImage}>
                <Image

                  src="/Flexible.svg"
                  width={55}
                  height={55}
                  alt="image"
                />
              </div>
              <h4 className={styles.BenefitTittle}>Flexible time off</h4>
              <p className={styles.BenefitDetails}>Caring for yourself comes first.
                Take the time you need whenever you need it. You don’t even need to ask permission. Really.</p>
            </Col>
            <Col xs={6} sm={6} md={6} lg={4} className={styles.benefitCol}>
              <div className={styles.BenefitImage}>
                <Image

                  src="/Parental.svg"
                  width={55}
                  height={55}
                  alt="image"
                />
              </div>
              <h4 className={styles.BenefitTittle}>Parental leave</h4>
              <p className={styles.BenefitDetails}>Becoming a parent can be the best, most exhausting time of your life.
                We offer competitive paid leave to support you through birth, adoption and fostering.</p>
            </Col>
            <Col xs={6} sm={6} md={6} lg={4} className={styles.benefitCol}>
              <div className={styles.BenefitImage}>
                <Image

                  src="/className.svg"
                  width={55}
                  height={55}
                  alt="image"
                />
              </div>
              <h4 className={styles.BenefitTittle}>Class reimbursement</h4>
              <p className={styles.BenefitDetails}>Helping you be your best self is paramount.
                We reimburse for tuition and gym memberships to help you gain new skills and thrive on every level.</p>
            </Col>
            <Col xs={6} sm={6} md={6} lg={4} className={styles.benefitCol}>
              <div className={styles.BenefitImage}>
                <Image

                  src="/HealthCare.svg"
                  width={55}
                  height={55}
                  alt="image"
                />
              </div>
              <h4 className={styles.BenefitTittle}>Healthcare</h4>
              <p className={styles.BenefitDetails}>No matter where you’re located in the world, we make sure
                you have the right tools to look after your health. We’ve got you covered.</p>
            </Col>
            <Col xs={6} sm={6} md={6} lg={4} className={styles.benefitCol}>
              <div className={styles.BenefitImage}>
                <Image

                  src="/Travel.svg"
                  width={55}
                  height={55}
                  alt="image"
                />
              </div>
              <h4 className={styles.BenefitTittle}>Travel</h4>
              <p className={styles.BenefitDetails}>With 100% remote work, face-to-face time is key. We plan yearly trips
                to fun locales around the world to keep us engaged and in sync.</p>
            </Col>

          </Row>
        </Container>
      </div>
      <div className={styles.ProfitShareDiv}>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} className={styles.ProfitShareImageCol}>
              <Image
                className="img-fluid"
                src="/ProfitSharing.webp"
                width={500}
                height={500}
                alt="image" /></Col>
            <Col xs={12} sm={12} md={6} lg={6}>
            <div className={styles.ProfitShareTextCol}>
              <h3 className={styles.ProfitShareTextHeading}>Profit-sharing program</h3>
              <h4 className={styles.ProfitShareTextTittle}>Paid out every year</h4>
              <p className={styles.ProfitShareDesc}>We’re truly a team, so we share the profits. Paid out every year after your first year at Fluxon.</p>
              <h4 className={styles.ProfitShareTextTittle}>All full-time employees eligible</h4>
              <p className={styles.ProfitShareDesc}>Everyone’s work is equally valuable to our success, and everyone deserves to take part in the prosperity.</p>
              <h4 className={styles.ProfitShareTextTittle}>No limit to distributions</h4>
              <p className={styles.ProfitShareDesc}>It’s simple. The more we grow, the more Fluxonians get — there’s no cap. We all benefit together.</p>
              </div>
            
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.ourValueDiv}>
        <Container>
          <div><h3 className={styles.ourValueHeading}>Our values</h3></div>
          <Row>
            <Col xs={6} sm={6} md={4} lg={4}>
            <div className={styles.ourValueText}>
              <div className={styles.valueTittle}>Integrity</div>
              <div className={styles.valueDetail}>Do the right thing and be honest.</div>
              </div>
            </Col>
            <Col xs={6} sm={6} md={4} lg={4}>
            <div className={styles.ourValueText}>
              <div className={styles.valueTittle}>Ownership</div>
              <div className={styles.valueDetail}>Take on the problem and solve it.</div>
              </div>
            </Col>
            <Col xs={6} sm={6} md={4} lg={4}>
            <div className={styles.ourValueText}>
              <div className={styles.valueTittle}>Continuous learning</div>
              <div className={styles.valueDetail}>Practice curiosity and never stop learning.</div>
              </div>
            </Col>
            <Col xs={6} sm={6} md={4} lg={4}>
            <div className={styles.ourValueText}>
              <div className={styles.valueTittle}>Efficiency</div>
              <div className={styles.valueDetail}>Do great work, pragmatically.</div>
              </div>
            </Col>
            <Col xs={6} sm={6} md={4} lg={4}>
            <div className={styles.ourValueText}>
              <div className={styles.valueTittle}>Collaboration</div>
              <div className={styles.valueDetail}>Be open and help others.</div>
              </div>
            </Col>
            <Col xs={6} sm={6} md={4} lg={4}>
            <div className={styles.ourValueText}>
              <div className={styles.valueTittle}>Results</div>
              <div className={styles.valueDetail}>Measure outcome, not hours.</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Career
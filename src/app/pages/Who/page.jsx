"use client"
import React, { useState, useEffect } from 'react'
import styles from './page.module.css';
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image'
import { GrClose } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { profile } from "../Who/profile.json"
import Link from 'next/link';
function Who() {
  const [isFirst, setFirst] = useState(false);
  const [isSecond, setSecond] = useState(false);
  const [isThird, setThird] = useState(false);
  const [isLast, setLast] = useState(false);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [post, setPost] = useState('');
  const [country, setCountry] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0);

  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    centerMode: true,
    dots: false,
    useCSS: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024, // breakpoint for medium screens
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // breakpoint for small screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,

        },
      },
    ],
  };
  const handleFirstColClick = () => {
    setFirst(!isFirst);
  };
  const handleSecondColClick = () => {
    setSecond(!isSecond);
  };
  const handleThirdColClick = () => {
    setThird(!isThird);
  };
  const handleLastColClick = () => {
    setLast(!isLast);
  };

  useEffect(() => {
    // Set the content based on the current index
    setTeamName(profile[currentIndex].name);
    setPost(profile[currentIndex].post);
    setCountry(profile[currentIndex].country);

    // Display for 1 second, then move to the next index
    const timeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % profile.length);
    }, 2800);

    return () => clearTimeout(timeout);
  }, [currentIndex, profile]);


  useEffect(() => {
    // Function to toggle states in a loop
    const toggleStatesInLoop = () => {
      handleClick1();
      setTimeout(() => {
        handleClick2();
        setTimeout(() => {
          handleClick3();
        }, 3000);
      }, 3000);
    };

    // Start the loop initially
    const interval = setInterval(toggleStatesInLoop, 9000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs only once after mount

  const handleClick1 = () => {
    // Handle click to show specific col detail
    setActive1(!active1);
    setActive2(false)
    setActive3(false)
  };
  const handleClick2 = () => {
    // Handle click to show specific col detail
    setActive2(!active2);
    setActive1(false)
    setActive3(false)
  };
  const handleClick3 = () => {
    // Handle click to show specific col detail
    setActive3(!active3);
    setActive1(false)
    setActive2(false)
  };


  return (
    <div className={styles.WhoPage} >
      <div className={styles.WhoTopBackground}>
        <div className={styles.MotionImage1}></div>
        <div className={styles.MotionImage2}></div>
        <Container className={styles.Top}>
          <div className={styles.TextDiv}>
            <div className={styles.Text}> Passionate, </div>
            <div className={styles.Text}>Focused, Pragmatic<span className={styles.TextFullStop}>.</span></div>
          </div>


        </Container>



      </div>
      <div className={styles.Static}>
        <Container>
          <Row className={styles.StaticMedia}>
            <Col xs={{ span: 12, order: 'last' }} lg={{ span: 6, order: 'first' }} className={styles.StaticContent}>
              <div className={styles.StaticHeading}>
                <div className={styles.Tittle}>Fluxon</div>
                <div className={styles.Tag}>/a unit of change/.</div>
              </div>
              <p className={styles.Disc}>
                We believe that digital products have the power to change the world, and indeed they have. Fluxon works with fast-growing startups and tech leaders like Google, Stripe, and Zapier to deliver the world’s most innovative products. We bring together strong expertise across disciplines and industries to offer full-cycle product development, from ideation and design to build and go-to-market.
              </p>
              <Row className={styles.StaticBottomRow}>
                <Col className={styles.BottomCol}>
                  <p className={styles.number}>80+</p>
                  <p className={styles.AboutNumber}>Products built</p>
                </Col>
                <Col className={styles.BottomCol}>
                  <p className={styles.number}>12</p>
                  <p className={styles.AboutNumber}>Countries</p>
                </Col>
                <Col className={styles.BottomCol}>
                  <p className={styles.number}>150+</p>
                  <p className={styles.AboutNumber}>Employees</p>
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 6, order: 'last' }} xs={{ span: 12, order: 'first' }}>

              <div className={styles.StaticImage}>
                <Image
                  src="/WhoWeAre.webp"
                  width={400}
                  height={300}
                  alt="Who we are"
                  className="img-fluid"
                />

              </div>
            </Col>
          </Row>

        </Container>

      </div>
      <div className={styles.LeaderShipContainer}>
        <Container >
          <div className={styles.LeaderDiv}>Leadership Team</div>
          <Row className={styles.LeaderRow} >
            <Col className={styles.LeaderCol} xs={6} sm={6} md={6} lg={3} onClick={handleFirstColClick}>
              <Image
                src="/ERAD.jpg"
                width={300}
                height={234}
                alt="Who we are"
                className={`${styles.ZoomableImage} img-fluid`}

              />
              <h4 className={styles.Name}>Erad Fridman</h4>
              <p className={styles.Post}>Co-Founder, CEO</p>
              <p className={styles.Detail}>Erad is an entrepreneurial product leader with 15+ years of leadership experience in
                developing platforms, UX and design. Before co-founding Fluxon, he recruited and led top performing teams of engineers,
                senior product managers, and UX designers at Google and was responsible for systems used by millions of advertisers
                and partners. His prior expertise likewise includes being a VP of Product in the aerospace industry and a diverse
                background in product, software development, finance and operations. Erad started coding at the age of six and by 19 had earned
                both his computer science and mathematics degrees, followed by dual masters in finance and business administration.</p>
              <p className={styles.ReadMore}>Read More <span>
                <Image
                  src="/LeadershipArrow.svg"
                  width={16}
                  height={17}
                  alt="Go Arrow"
                />
              </span></p>
            </Col>
            {isFirst && (
              <Row className={styles.LeaderColAbout}>
                <Col sm={12} md={5}  >
                  <Image
                    src="/ERAD.jpg"

                    width={500}
                    height={500}
                    alt="Ena Zheng"
                    className={`${styles.ResponsiveImage} img-fluid`}

                  />
                </Col>
                <Col sm={12} md={7}>
                  <div  >
                    <div className={styles.AboutText}>
                      <h4 className={styles.AboutName}>Erad Fridman</h4>
                      <p className={styles.Post}>Co-Founder, CEO</p>
                      <p className={styles.AboutDetail}>Erad is an entrepreneurial product leader with 15+ years of leadership experience in
                        developing platforms, UX and design. Before co-founding Fluxon, he recruited and led top performing teams of engineers,
                        senior product managers, and UX designers at Google and was responsible for systems used by millions of advertisers
                        and partners. His prior expertise likewise includes being a VP of Product in the aerospace industry and a diverse
                        background in product, software development, finance and operations. Erad started coding at the age of six and by 19 had earned
                        both his computer science and mathematics degrees, followed by dual masters in finance and business administration.</p>
                    </div>
                    <div className={styles.closeButton}>
                      <GrClose onClick={() => setFirst(false)} style={{ color: '#125ef6' }} />
                    </div>
                  </div>

                </Col>

              </Row>
            )}
            <Col className={styles.LeaderCol} xs={6} sm={6} md={6} lg={3} onClick={handleSecondColClick}>
              <Image
                src="/JEN.jpg"
                width={300}
                height={234}
                alt="Jen Gil"
                className={`${styles.ZoomableImage} img-fluid`}

              />
              <h4 className={styles.Name}>Jen Gil</h4>
              <p className={styles.Post}>Co-Founder, CPO</p>
              <p className={styles.Detail}>Jen Gil is a seasoned product and design leader with expertise across
                UX design, payments processing, search ads targeting, data analytics and machine learning. Before
                joining Fluxon, Jen was a product lead at both Stripe and Google. At Stripe, Jen joined as one of the
                company's first product managers and led the development of both Radar and Connect, respectively preventing payment
                fraud and enabling faster payouts to recipients under evolving financial regulations. At Google, Jen was the head
                product manager for search ads targeting and machine learning products. She led a team of over 100+ engineers to launch
                new products with multi-billion dollar revenue impact, owning Google’s official revenue forecast for the AdSense
                business and overseeing major launches including new Dynamic Search Ads,
                smarter keyword matching, accurate and transparent Advertising Quality Score metrics and more.</p>
              <p className={styles.ReadMore}>Read More <span>
                <Image
                  src="/LeadershipArrow.svg"
                  width={16}
                  height={17}
                  alt="Go Arrow"
                />
              </span> </p>
            </Col>
            {isSecond && (
              <Row className={styles.LeaderColAbout}>
                <Col sm={12} md={5}  >
                  <Image
                    src="/JEN.jpg"

                    width={500}
                    height={500}
                    alt="Ena Zheng"
                    className={`${styles.ResponsiveImage} img-fluid`}

                  />
                </Col>
                <Col sm={12} md={7}>
                  <div  >
                    <div className={styles.AboutText}>
                      <h4 className={styles.AboutName}>Jen Gil</h4>
                      <p className={styles.Post}>Co-Founder, CPO</p>
                      <p className={styles.AboutDetail}>Jen Gil is a seasoned product and design leader with expertise across
                        UX design, payments processing, search ads targeting, data analytics and machine learning. Before
                        joining Fluxon, Jen was a product lead at both Stripe and Google. At Stripe, Jen joined as one of the
                        company's first product managers and led the development of both Radar and Connect, respectively preventing payment
                        fraud and enabling faster payouts to recipients under evolving financial regulations. At Google, Jen was the head
                        product manager for search ads targeting and machine learning products. She led a team of over 100+ engineers to launch
                        new products with multi-billion dollar revenue impact, owning Google’s official revenue forecast for the AdSense
                        business and overseeing major launches including new Dynamic Search Ads,
                        smarter keyword matching, accurate and transparent Advertising Quality Score metrics and more.</p>
                    </div>
                    <div className={styles.closeButton}>
                      <GrClose onClick={() => setSecond(false)} style={{ color: '#125ef6' }} />
                    </div>
                  </div>

                </Col>

              </Row>
            )}
            <Col className={styles.LeaderCol} xs={6} sm={6} md={6} lg={3} onClick={handleThirdColClick}>
              <Image
                src="/ENA.jpg"

                width={300}
                height={234}
                alt="Ena Zheng"
                className={`${styles.ZoomableImage} img-fluid`}

              />
              <h4 className={styles.Name}>Ena Zheng</h4>
              <p className={styles.Post}>Co-Founder, COO</p>
              <p className={styles.Detail}>Ena Zheng is an experienced executive who is responsible for the global operations of
                the company. She co-founded Indigo, a mobile banking platform designed for teens, where she led product
                strategy, design and operations. Previously, Ena worked in the cloud computing industry at Citrix before
                becoming the COO of PandaDoc, a fast-growing SaaS company where she oversaw all areas of business operations.
                She joined PandaDoc during its earliest days and was pivotal in scaling the business toward its recent $1B valuation.
                Outside of Fluxon, Ena mentors startup founders and is a builder obsessed with efficiency and execution.</p>
              <p className={styles.ReadMore}>Read More <span>
                <Image
                  src="/LeadershipArrow.svg"
                  width={16}
                  height={17}
                  alt="Go Arrow"
                />
              </span></p>
            </Col>
            {isThird && (
              <Row className={styles.LeaderColAbout}>
                <Col sm={12} md={5}  >
                  <Image
                    src="/ENA.jpg"

                    width={500}
                    height={500}
                    alt="Ena Zheng"
                    className={`${styles.ResponsiveImage} img-fluid`}

                  />
                </Col>
                <Col sm={12} md={7}>
                  <div  >
                    <div className={styles.AboutText}>
                      <h4 className={styles.AboutName}>Ena Zheng</h4>
                      <p className={styles.Post}>Co-Founder, COO</p>
                      <p className={styles.AboutDetail}>Ena Zheng is an experienced executive who is responsible for the global operations of
                        the company. She co-founded Indigo, a mobile banking platform designed for teens, where she led product
                        strategy, design and operations. Previously, Ena worked in the cloud computing industry at Citrix before
                        becoming the COO of PandaDoc, a fast-growing SaaS company where she oversaw all areas of business operations.
                        She joined PandaDoc during its earliest days and was pivotal in scaling the business toward its recent $1B valuation.
                        Outside of Fluxon, Ena mentors startup founders and is a builder obsessed with efficiency and execution.</p>
                    </div>
                    <div className={styles.closeButton}>
                      <GrClose onClick={() => setThird(false)} style={{ color: '#125ef6' }} />
                    </div>
                  </div>

                </Col>

              </Row>
            )}
            <Col className={styles.LeaderCol} xs={6} sm={6} md={6} lg={3} onClick={handleLastColClick}>
              <Image
                src="/AJ.jpg"

                width={300}
                height={234}
                alt="AJ Ross"
                className={`${styles.ZoomableImage} img-fluid`}

              />
              <h4 className={styles.Name}>AJ Ross</h4>
              <p className={styles.Post}>Co-Founder, CTO</p>
              <p className={styles.Detail}>AJ Ross comes to his full-stack engineering leadership role with a
                pragmatism and passion for solving complex business challenges. Before Fluxon, he spent seven years at Google
                leading engineering for retail operations and co-founding the Customer Reliability Engineering team, ensuring
                reliability of the Google Cloud Platform. His expertise spans more than a dozen programming systems — including
                C, C++, Python, Ruby, JavaScript, TypeScript, Java, Object-C, Lisp, HTML, CSS and more — as well as leading technology
                platforms across GCP, Azure, AWS, AI/ML, and web and mobile development. He’s built and launched dozens of products
                within SaaS, healthcare, retail, social, bridal, marketing automation, finance sectors and more. An avid surfer,
                AJ has a ceaseless curiosity that pulls him to ride the waves at both the forefront of tech and on the California coast.</p>
              <p className={styles.ReadMore}>Read More <span>
                <Image
                  src="/LeadershipArrow.svg"
                  width={16}
                  height={17}
                  alt="Go Arrow"
                />
              </span></p>
            </Col>
            {isLast && (
              <Row className={styles.LeaderColAbout}>
                <Col sm={12} md={5}  >
                  <Image
                    src="/AJ.jpg"

                    width={500}
                    height={500}
                    alt="Ena Zheng"
                    className={`${styles.ResponsiveImage} img-fluid`}

                  />
                </Col>
                <Col sm={12} md={7}>
                  <div  >
                    <div className={styles.AboutText}>
                      <h4 className={styles.AboutName}>AJ Ross</h4>
                      <p className={styles.Post}>Co-Founder, CTO</p>
                      <p className={styles.AboutDetail}>AJ Ross comes to his full-stack engineering leadership role with a
                        pragmatism and passion for solving complex business challenges. Before Fluxon, he spent seven years at Google
                        leading engineering for retail operations and co-founding the Customer Reliability Engineering team, ensuring
                        reliability of the Google Cloud Platform. His expertise spans more than a dozen programming systems — including
                        C, C++, Python, Ruby, JavaScript, TypeScript, Java, Object-C, Lisp, HTML, CSS and more — as well as leading technology
                        platforms across GCP, Azure, AWS, AI/ML, and web and mobile development. He’s built and launched dozens of products
                        within SaaS, healthcare, retail, social, bridal, marketing automation, finance sectors and more. An avid surfer,
                        AJ has a ceaseless curiosity that pulls him to ride the waves at both the forefront of tech and on the California coast.</p>
                    </div>
                    <div className={styles.closeButton}>
                      <GrClose onClick={() => setLast(false)} style={{ color: '#125ef6' }} />
                    </div>
                  </div>

                </Col>

              </Row>
            )}
          </Row>
        </Container>
      </div>
      <div className={styles.ExpertsDiv}>
        <Container>
          <Row>
            <Col sm={12} md={12} lg={6}>
              <Row>
                <div className={styles.Image1Div}>
                  <Image
                    src="/Medium.png"
                    width={250}
                    height={200}
                    alt="Ena Zheng"
                    className={`${styles.ResponsiveImage1} img-fluid`}
                  />

                </div>

              </Row>
              <Row>
                <Col className={styles.ExpertImage2}>
                  <Image
                    src="/Large.png"

                    width={200}
                    height={150}
                    alt="Ena Zheng"
                    className={`${styles.ResponsiveImage2} img-fluid`}

                  />
                </Col>
                <Col className={styles.ExpertImage3}>
                  <div className={styles.Image3Div}>
                    <Image
                      src="/Small.png"

                      width={250}
                      height={250}
                      alt="Ena Zheng"
                      className={`${styles.ResponsiveImage3} img-fluid`}

                    />

                  </div>

                </Col>
              </Row></Col>
            <Col sm={12} md={12} lg={6} className={styles.ExpertTextCol}>
              <Row>
                <div className={styles.ExpertTextRow}>
                  <h4 className={`${styles.ExpertTextHeading} ${active1 ? styles.Black : ''}`} onClick={handleClick1}>Top caliber talent</h4>
                  {active1 &&
                    <p className={styles.ExpertTextDetail}>We hire seasoned founders and technology leaders across product, design and engineering.</p>
                  }</div>
              </Row>
              <Row>
                <div className={styles.ExpertTextRow}>
                  <h4 className={`${styles.ExpertTextHeading} ${active2 ? styles.Black : ''}`} onClick={handleClick2}>Trusted partnership</h4>
                  {active2 && <p className={styles.ExpertTextDetail}>Our industry-leading Engineers will help you accelerate your development timeline and modernize operations.</p>}</div>
              </Row>
              <Row>
                <div className={styles.ExpertTextRow}>
                  <h4 className={`${styles.ExpertTextHeading} ${active3 ? styles.Black : ''}`} onClick={handleClick3}>Industry experts</h4>
                  {active3 && <p className={styles.ExpertTextDetail}>Our Design teams will create simple, beautiful user interfaces that delight your customers.</p>}</div>
              </Row>
            </Col>

          </Row>
        </Container>

      </div>
      <div className={styles.OurTeam}>

        <div className={styles.work}>
          <Image
            src="/waves.png"
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="image"
          />
        </div>

        <Container>
          <h3 className={styles.OurTeamHeading}>Our team</h3>
          <p className={styles.OurTeamDetailTop}>Our global team of Fluxonians have built, designed and shipped apps that millions of people use every day. We’re pragmatic, goal-oriented and passionate about our work.</p>
          <div className={styles.ImageDiv}>
            <Slider {...settings} className={styles.Slider}>

              <div >
                <Image
                  src="/Alla.webp"
                  width={50}
                  height={50}
                  alt="Alla"
                  className={styles.TeamImage}
                />
              </div>
              <div >
                <Image
                  src="/Mariya.webp"
                  width={50}
                  height={50}
                  alt="Ena Zheng"
                  className={styles.TeamImage}
                />
              </div>
              <div >
                <Image
                  src="/Tanya.png"
                  width={50}
                  height={50}
                  alt="Ena Zheng"
                  className={styles.TeamImage}
                />
              </div>
              <div >
                <Image
                  src="/Anton.png"
                  width={50}
                  height={50}
                  alt="Ena Zheng"
                  className={styles.TeamImage}
                />
              </div>
              <div >
                <Image
                  src="/Yevhen.jpeg"
                  width={50}
                  height={50}
                  alt="Ena Zheng"
                  className={styles.TeamImage}
                />

              </div>
              <div >
                <Image
                  src="/Marin.jpg"
                  width={50}
                  height={50}
                  alt="Ena Zheng"
                  className={styles.TeamImage}
                />
              </div>
              <div >
                <Image
                  src="/Edrard.jpg"
                  width={50}
                  height={50}
                  alt="Ena Zheng"
                  className={styles.TeamImage}
                />
              </div>
              <div >
                <Image
                  src="/Queenie.webp"
                  width={50}
                  height={50}
                  alt="Ena Zheng"
                  className={styles.TeamImage}
                />
              </div>
              <div >
                <Image
                  src="/Oksana.jpg"
                  width={50}
                  height={50}
                  alt="Ena Zheng"
                  className={styles.TeamImage}
                />
              </div>
              <div >
                <Image
                  src="/ENA.jpg"
                  width={50}
                  height={50}
                  alt="Ena Zheng"
                  className={styles.TeamImage}
                />
              </div>
            </Slider>

          </div>

          <div className={styles.TeamImageDetail}>
            <div className={styles.triangle}></div>

            <div className={styles.teamName}>{teamName}</div>
            <p className={styles.teamPost}>{post}</p>
            <span className={styles.country}>{country}</span>
          </div>




        </Container>
        <div className={styles.TeamTag}>Building amazing products requires amazing talent.</div>
        <Link href="/pages/GetInTouch"><div className={styles.MeetTeam}>Meet Our Team</div></Link>
      </div>

      <div className={styles.HowWeDo}>
        <Container>
          <h3 className={styles.HowHeading}>How we do it</h3>
          <Row className={styles.HowRow}>
            <Col lg={4} md={6} sm={6} xs={6} >
              <div>
                <Image
                  src="/founder.svg"
                  width={56}
                  height={56}
                  alt="image"
                />
              </div>
              <div>
                <h4 className={styles.HowTittle}>Act like a founder</h4>
                <p className={styles.HowDetail}>We treat our clients’ companies as our own.</p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={6} xs={6}  >
              <div>
                <Image
                  src="/mile.svg"
                  width={56}
                  height={56}
                  alt="image"
                />
              </div>
              <div>
                <h4 className={styles.HowTittle}>Go the extra mile</h4>
                <p className={styles.HowDetail}>We do everything we can to help you succeed.</p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={6} xs={6}  >
              <div>
                <Image
                  src="/thing.svg"
                  width={56}
                  height={56}
                  alt="image"
                />
              </div>
              <div>
                <h4 className={styles.HowTittle}>Do the right thing</h4>
                <p className={styles.HowDetail}>We do what’s right for our clients above all else.</p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={6} xs={6}  >
              <div>
                <Image
                  src="/transparent.svg"
                  width={56}
                  height={56}
                  alt="image"
                />
              </div>
              <div>
                <h4 className={styles.HowTittle}>Be transparent</h4>
                <p className={styles.HowDetail}>We’re open, honest and communicative.</p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={6} xs={6}  >
              <div>
                <Image
                  src="/great.svg"
                  width={56}
                  height={56}
                  alt="image"
                />
              </div>
              <div>
                <h4 className={styles.HowTittle}>Make it great</h4>
                <p className={styles.HowDetail}>We love building innovative products that change the world.</p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={6} xs={6}  >
              <div>
                <Image
                  src="/focus.svg"
                  width={56}
                  height={56}
                  alt="image"
                />
              </div>
              <div>
                <h4 className={styles.HowTittle}>Focus on the outcome</h4>
                <p className={styles.HowDetail}>We’re goal-orientated and we deliver results.</p>
              </div>
            </Col>

          </Row>
        </Container></div>
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

export default Who
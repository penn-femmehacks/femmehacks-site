import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Emoji from "../common/emoji"
import { Section, Container } from '@components/global';
import { Row, Col } from 'react-bootstrap';

// image gallery
import "../../styles/image-gallery.css";
import ImageGallery from 'react-image-gallery';

// images
import Img1 from '../../images/events/2019-2.jpg'
import Img2 from '../../images/events/2019-event-1.jpg'
import Img3 from '../../images/events/2020-event-4.jpg'
import Img4 from '../../images/events/event-2018.jpg'
import Img5 from '../../images/events/2020-event.jpg'

const images = [
    {
      original: Img5,
      thumbnail: Img5,
    },
    {
      original: Img4,
      thumbnail: Img4,
    },
    {
      original: Img3,
      thumbnail: Img3,
    },
    {
      original: Img1,
      thumbnail: Img1,
    },
    {
      original: Img2,
      thumbnail: Img2,
    },
];


const About = () => (
  <Section id="about">
    <Container>
      <h1>About FemmeHacks <Emoji symbol="🎉"/></h1>
      <br/><br/>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <h3>What is FemmeHacks?</h3>
          <p>Now running on our 7th year, FemmeHacks is a two-day collegiate hackathon 
          hosted at the University of Pennsylvania by the university’s Women in Computer 
          Science chapter. FemmeHacks aims to <b>empower</b>, <b>educate</b>, and <b>inspire </b> 
          women and non-binary folks across the nation. After forming teams, 
          attendees build a variety of web, mobile, and hardware applications, learn from 
          workshops, and attend various speaker events. This year, FemmeHacks will be held 
          virtually. </p>
        </Col>

        <Col xs={12} md={6} lg={4}>
          <h3>Who can attend?</h3>
          <p>FemmeHacks welcomes trans and cis women, non-binary, and gender non-conforming 
          people of all levels of experience – equality for all! Participants range from students 
          from a variety of schools such as University of Pennsylvania, Princeton, Drexel, 
          Rutgers, Bryn Mawr, Villanova, Temple, Haverford, as well as young talents from 
          Philadelphia high schools looking to break into the tech field. Last year, we had <b>over 
          200 attendees</b>!</p>
        </Col>

        <Col xs={12} md={6} lg={4}>
        <h3>Why attend FemmeHacks?</h3>
          {/* Can change workshop topics to this year's once we know them */}
          <p>FemmeHacks is committed to education — we’ve hosted workshops on all sorts of topics, 
          including GitHub, web development, iOS development and computer graphics. FemmeHacks also 
          gives attendees the opportunity to connect with other women and non-binary people in the 
          general tech community. Last year, over <b>87% of our attendees</b> said they made at least one valuable 
          connection with a fellow student or mentor! We also have free swag for all attendees and
          company-sponsored prizes for hackathon winners. </p>
        </Col>

      </Row>
      <Row>
        <div class="image-gallery-center">
          <ImageGallery 
            items={images}
            showNav={false}
          />
        </div>
      </Row>
    </Container>
  </Section>
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;

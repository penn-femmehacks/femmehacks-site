import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';
import { Row, Col } from 'react-bootstrap';
import Emoji from "../common/emoji"

const Schedule = () => (
  <Section id="schedule" accent>
    <Container>
      <h1>2021 Schedule <Emoji symbol="🕒" /></h1>
      <br />
      <p> All the <b>meeting links</b> are available on our Airtable -- please check the <b>Event Location</b> section in the acceptance email to find the <b>Airtable link</b>! All times are in Eastern Standard Time (EST).</p>
      <br />
      <Row>
        <Col xs={12} md={6}>
          <h3>February 5 (Friday)</h3>
          <p>
            <br /><b>3:00pm - 6:00pm</b>: <b>Check-in</b>
            <br /><b>3:00pm - 4:30pm</b>: Introductions &amp; Team Formation on Discord
            <br /><b>4:30pm - 5:00pm</b>: <b>Opening Ceremony</b>
            <br /><b>5:00pm - 6:00pm</b>: Sponsors Meet n' Greet!
            <br /><b>6:00pm - 6:45pm</b>: [Beginner] Intro to Git with Andrea Baric
            <br /><b>6:00pm - 6:45pm</b>: [Intermediate] Intro to UI/UX with Sanjana
            <br /><b>7:00pm - 7:45pm</b>: [Beginner] Intro to Web Dev with Hack4Impact
            <br /><b>7:00pm - 8:00pm</b>: Google Cloud Workshop [pre-recorded]
            <br /><b>8:00pm - 8:45pm</b>: [Beginner] Intro to iOS with Steph Tang
            <br /><b>8:00pm - 8:45pm</b>: [Intermediate] Intermediate Web Dev with Hack4Impact
            <br /><b>9:00pm - 9:30pm</b>: Speed Dating &amp; Team Formation
            <br /><b>9:30pm - 10:30pm</b>: Discord Game Night (Among Us, Code Names, &amp; more!)
          </p>
        </Col>

        <Col xs={12} md={6}>
          <h3>February 6 (Saturday)</h3>
          <p>
            <br /><b>8:00am</b>: <b>Hacking Starts</b>
            <br /><b>8:00am - 9:30am</b>: Office Hours – Ideation
            <br /><b>10:00am - 11:00am</b>: Facebook Panel and Q &amp; A
            <br /><b>11:00am - 12:00pm</b>: Add SMS and Voice to your Apps with Twilio
            <br /><b>11:00am - 12:00pm</b>: Start-up Workshop with Krish
            <br /><b>11:30am - 12:00pm</b>: Soulsmile Club: Tech for Social Good
            <br /><b>12:00pm - 1:00pm</b>: Women in Tech Panel!
            <br /><b>1:00pm - 2:00pm</b>: How to Ace Tech Interviews with Vanguard
            <br /><b>2:00pm - 4:00pm</b>: Skribbl on Discord
            <br /><b>2:00pm - 3:00pm</b>: Workout session with Urban Outfitters
            <br /><b>2:00pm - 2:30pm</b>: The Percentage Project: Data-Driven Advocacy
            <br /><b>3:00pm - 4:00pm</b>: Product Management 101 with Microsoft PM Andrea Baric
            <br /><b>4:30pm - 5:00pm</b>: Venture Capital Workshop with Wiress
            <br /><b>6:00pm</b>: <b>Draft Submission to Devpost</b>
            <br /><b>8:40pm</b>: <b>Final Submission Deadline</b>
            <br /><b>8:50pm - 10:00pm</b>: Judging Time
            <br /><b>8:50pm - 9:30pm</b>: Demo Fair
            <br /><b>9:30pm - 10:00pm</b>: Trivia Night!
            <br /><b>10:30pm - 10:45pm</b>: <b>Closing Ceremony</b>
          </p>
        </Col>
      </Row>
    </Container>
  </Section>
);


// const StyledContainer = styled(Container)`
//   display: flex;
//   // justify-content: flex-end;
//   position: relative;

//   @media (max-width: ${props => props.theme.screen.md}) {
//     justify-content: center;
//   }
// `;

export default Schedule;


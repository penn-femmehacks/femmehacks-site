import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';
import { Row, Col } from 'react-bootstrap';
import Emoji from "../common/emoji"

const Schedule = () => (
  <Section id="schedule" accent>
    <Container>
      <h1>2023 Schedule Coming Soon!<Emoji symbol="🕒" /></h1>
      {/* <br />
      <p> All the <b>meeting links</b> are available on our Airtable -- please check the <b>Event Location</b> section in the acceptance email to find the <b>Airtable link</b>! All times are in Eastern Standard Time (EST).</p>
      <br />
      { <Row>
        <Col xs={12} md={6}>
          <h3>February 10 (Friday)</h3>
          <p>
            <br /><b>3:00pm - 6:00pm</b>: <b>Check-in</b>
            <br /><b>3:00pm - 4:30pm</b>: Self-intro &amp; Team Formation on Discord
            <br /><b>4:30pm - 5:00pm</b>: <b>Opening Ceremony</b>
            <br /><b>5:00pm - 6:00pm</b>: Sponsors Meet n' Greet!
            <br /><b>6:00pm - 6:45pm</b>: <b>Workshop 1</b>
            <br />  [Beginner] Intro to Git with PennLabs
            <br />  [Intermediate] Intro to UI/UX with PennLabs
            <br /><b>7:00pm - 7:45pm</b>: <b>Workshop 2</b>
            <br />  [Beginner] Intro to Web Dev with Hack4Impact
            <br /><b>7:00pm - 8:00pm</b>: Sponsor Workshop with Google
            <br /><b>8:00pm - 8:45pm</b>: <b>Workshop 3</b>
            <br />  [Beginner] Intro to iOS with Steph
            <br />  [Beginner] Intro to Web Dev Part 2 with Hack4Impact
            <br /><b>8:00pm - 9:00pm</b>: Sponsor Workshop with Google
            <br /><b>9:00pm - 9:30pm</b>: Team Formation &amp; Speed Dating
            <br /><b>9:30pm - 10:30pm</b>: Discord Game Night (Among Us, Code Names, Skribbl &amp; more!)
          </p>
        </Col>

        <Col xs={12} md={6}>
          <h3>February 11 (Saturday)</h3>
          <p>
            <br /><b>7:00am - 8:00am</b>: Breakfast
            <br /><b>8:00am</b>: <b>Hacking Starts</b>
            <br /><b>8:00am - 9:30am</b>: <b>Office Hours – Ideation</b>
            <br /><b>10:00am - 11:00am</b>: sponsor workshop
            <br /><b>11:00am - 12:00pm</b>: sponsor workshop
            <br /><b>11:00am - 12:00pm</b>: sponsor workshop
            <br /><b>11:30am - 12:00pm</b>: sponsor workshop
            <br /><b>12:00pm - 1:00pm</b>: Women in Tech Panel! (sponsorship and hackerX update)
            <br /><b>1:00pm - 2:00pm</b>: sponsor workshop
            <br /><b>2:00pm - 4:00pm</b>: Skribbl on Discord
            <br /><b>2:00pm - 3:00pm</b>: sponsor workshop
            <br /><b>2:00pm - 2:30pm</b>: sponsor workshop
            <br /><b>3:00pm - 4:00pm</b>: sponsor workshop
            <br /><b>4:30pm - 5:00pm</b>: sponsor workshop
            <br /><b>5:30pm - 6:00pm</b>: Dinner
            <br /><b>6:00pm - 8:00pm</b>: <b>Office Hours</b>
            <br /><b>8:00pm</b>: <b>Hacking Stops</b>
            <br /><b>8:00pm - 8:30pm</b>: Submission Time
            <br /><b>8:30pm</b>: <b>Devpost Submission Deadline</b>
            <br /><b>8:30pm - 9:10pm</b>: Demo Fair
            <br /><b>9:10pm - 9:40pm</b>: Trivia Night!
            <br /><b>8:45pm - 9:30pm</b>: Judging Time
            <br /><b>9:40pm</b>: <b>Closing Ceremony</b>
          </p>
        </Col>
      </Row> } */}
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


import React from 'react';

import { Section, Container } from '@components/global';
import { Row, Col } from 'react-bootstrap';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';
import Emoji from "../common/emoji"

const GeneralFAQS = [
  // GENERAL
  {
    title: 'What is FemmeHacks?',
    content: () => (
      <p>
        FemmeHacks is a 2-day long event for women, non-binary folks, and historically
        underrepresented groups to form teams, brainstorm an idea, and build it into execution.
      </p>
    ),
  },
  {
    title: 'When and where will FemmeHacks be?',
    content: () => (
      <p>
        This year, FemmeHacks will take place on February 5th-6th, 2021. Because of
        COVID-19, FemmeHacks will be held entirely virtually, so you can hack from the
        comfort of your home!
      </p>
    ),
  },
  {
    title: 'How will FemmeHacks work virtually?',
    content: () => (
      <p>
        We will be using Discord
        for communication purposes and Zoom for workshops! All meeting links will be compiled into an Airtable that only registered participants have access to.
      </p>
    ),
  },
  {
    title: 'What kinds of projects have past attendees made?',
    content: () => (
      <p>
        Past attendees have made all sorts of web, mobile, and hardware
        applications. <a href="https://femmehacks-2020.devpost.com/project-gallery" target="_blank">View
        projects that our attendees built last year here</a>!
      </p>
    ),
  },
  {
    title: 'Will there be swag or prizes?',
    content: () => (
      <p>
        Yes! We'll be shipping all domestic
        attendees FemmeHacks stickers, and hackers who submit project to Devpost will receive free t-shirts and face masks :)
      </p>
    ),
  },
  {
    title: 'Who should I contact if I have more questions?',
    content: () => (
      <p>
        Please write to us at <a href="mailto:pennfemmehacks@gmail.com">pennfemmehacks@gmail.com</a>.
        We’re happy to help.
      </p>
    ),
  },

];


const RegistrationFAQS = [
  //REGISTRATION
  {
    title: 'Who can attend FemmeHacks?',
    content: () => (
      <p>
        Any women-identifying or non-binary folk can attend FemmeHacks, regardless of
        physical location. Because this year is virtual, we especially encourage people
        from outside of Philly to apply as well!
      </p>
    ),
  },
  {
    title: 'How can I register?',
    content: () => (
      <p>
        Register through <a href="https://forms.gle/bfuQYtBepZurW7Pj9" target="_blank">this link</a>!
      </p>
    ),
  },
  {
    title: 'When do I need to register by?',
    content: () => (
      <p>
        Registrations will be considered on a rolling basis until <b>January 29, 2021</b>.
        After then, we will only consider applications if we have the capacity for more hackers.
      </p>
    ),
  },
  {
    title: 'Does FemmeHacks cost money to attend?',
    content: () => (
      <p>
        Nope — attending FemmeHacks is completely free.
      </p>
    ),
  },
  {
    title: 'I don\'t have that much/any coding experience. Should I still register?',
    content: () => (
      <p>
        Absolutely. FemmeHacks is specificlaly made to be beginner-friendly – plenty of
        our previous hackers have come in without any coding knowledge. We host plenty of
        beginner-friendly workshops, such as Introduction to Web Development (HTML/CSS) and
        Introduction to Python, to teach our hackers coding from scratch.
        We also have plenty of mentors to help you during the hackathon itself.
      </p>
    ),
  },
  {
    title: 'I don’t have a team/idea. Should I still register?',
    content: () => (
      <p>
        Yes! We’ll have team formation and ideation workshops to help you find
        great people to work with on an idea that excites you. Many past attendees
        have formed teams or brainstormed ideas during the hackathon – we encourage you to
        register regardless!
      </p>
    ),
  },

];


const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: '40px' }}>Frequently Asked Questions <Emoji symbol="📚" /></h1>
      <p>If you have any other questions, please don't hesitate to email <a href="mailto=pennfemmehacks@gmail.com"> pennfemmehacks@gmail.com</a>!</p>
      <br />
      <Row>
        <Col xs={12} lg={6}>
          <h3>General</h3>
          {GeneralFAQS.map(({ title, content }) => (
            <FaqItem title={title} key={title}>
              {content()}
            </FaqItem>
          ))}
        </Col>
        <Col xs={12} lg={6}>
          <h3>Registration</h3>
          {RegistrationFAQS.map(({ title, content }) => (
            <FaqItem title={title} key={title}>
              {content()}
            </FaqItem>
          ))}
        </Col>
      </Row>
    </Container>
  </Section>
);

export default Faq;

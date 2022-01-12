import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import Emoji from "../common/emoji"

import BackgroundImage from "../../images/art/header-bg.png"

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_build: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "header-pic" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper id="home" style={{
        paddingLeft: "10%",
        paddingRight: "10%",
        paddingTop: "16%",
        paddingBottom: "12%",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}>
        <Container>
          <Grid>
            <Art>
              <Img fluid={data.art_build.childImageSharp.fluid}
                style={{ width: "95%" }}
              />
            </Art>
            <Text>
              <h1 style={{ fontSize: "40px" }}>
                An inclusive all-women &amp; non-binary hackathon. <Emoji symbol="👩‍💻" />
              </h1>
              <br />
              <h3>February 5-6, 2021</h3>
              <br />
              <p>Thank you for attending FemmeHacks 2021! <br /> We'd love to see you at FemmeHacks 2022 <Emoji symbol="😊" /> </p>
              <p>
                <div style={{ height: "24px" }}></div>
                <StyledExternalLink className="header-register-btn" href="https://femmehacks-2021.devpost.com/project-gallery">
                  View Projects &nbsp;&#x2794;
                </StyledExternalLink>

                {/* <br/><br/>

                <StyledExternalLink className="header-register-btn" href="https://www.facebook.com/events/1141515579595946">
                  View Facebook Event &nbsp;&#x2794;
                </StyledExternalLink> */}
              </p>
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  font-family: Comfortaa, 'Alata', sans-serif;
  color: white;
  text-decoration: none;
  background-color: #526EF4;
  padding: 16px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 10px;

  &:hover {
    background-color: #6982fa;
  }
`;

export default Header;

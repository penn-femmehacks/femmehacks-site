import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import FacebookIcon from '@static/icons/facebook.svg';
import InstagramIcon from '@static/icons/instagram.svg';
import MailIcon from '@static/icons/mail.svg';
import TwitterIcon from '@static/icons/twitter.svg';

const SOCIAL = [
  {
    icon: MailIcon,
    link: 'mailto:pennfemmehacks@gmail.com',
  },
  {
    icon: InstagramIcon,
    link: 'https://www.instagram.com/femmehacks/',
  },
  {
    icon: FacebookIcon,
    link: 'http://facebook.com/femmehacks/',
  },
  {
    icon: TwitterIcon,
    link: 'https://twitter.com/femmehacks/',
  },
];

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        art_pot: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "customers_pot" }
        ) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        {/* <Art>
          <Img
            fluid={data.art_pot.childImageSharp.fluid}
            style={{ width: 480, maxWidth: '100%', marginBottom: -16 }}
          />
        </Art> */}
        <FooterWrapper>
          <StyledContainer>
            <Copyright>
              <h5>© FemmeHacks 2021</h5>
              <span>
                Made with &#9829; by FemmeHacks and Penn WiCS
                {` `}
                {/* <ExternalLink href="">
                  @linkName
                </ExternalLink> */}
              </span>
            </Copyright>
            <SocialIcons>
              {SOCIAL.map(({ icon, link }) => (
                <ExternalLink key={link} href={link}>
                  <img src={icon} alt="link" />
                </ExternalLink>
              ))}
            </SocialIcons>
          </StyledContainer>
        </FooterWrapper>
      </React.Fragment>
    )}
  />
);

const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 8px;
    width: 27px;
    height: 27px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`;

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 0px 0px 32px 0px;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Art = styled.figure`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 48px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;

import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';
import Emoji from "../common/emoji"
import GCPLogo from '@images/logos/gcp.png';
// import FacebookLogo from '@images/logos/facebook.png';
import MackLogo from '@images/logos/mack.png';

import OnePLogo from '@images/logos/1p.png';
import BloombergLogo from '@images/logos/bloomberg.png';
import MsftLogo from '@images/logos/msft.png';
import VanguardLogo from '@images/logos/vanguard1.png';
import MetaLogo from '@images/logos/meta.png';
import NWLogo from '@images/logos/ndwallet.svg';
import TCPWLogo from '@images/logos/tcpw.png';
// import MckLogo from '@images/logos/mckinsey.png';
// import TwilioLogo from '@images/logos/twilio.gif';

// import { ReactComponent as FacebookLogo } from '@images/logos/facebook.svg';
import LinodeLogo from '@images/logos/linode.svg';

import JaneStreetLogo from '@images/logos/jane-street.png';
import BlueOriginLogo from '@images/logos/blue-origin.png';

// const LOGOS = [
//   {
//     logo: FacebookLogo,
//     link: 'https://facebook.com/',
//   },
// ];

const Sponsors = () => (
  <StaticQuery
    query={graphql`
      query {
        art_story: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "tell_story" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="sponsors" accent>
        <StyledContainer>
          <div>
            <h1>Our 2023 Sponsors <Emoji symbol="💕" /></h1>
            <LogoGrid>
              
              {/*<a href="https://about.facebook.com/meta/"> <img className="sponsor-logo-class" src={MetaLogo} /> </a>
              <a href="https://careers.microsoft.com/"> <img className="sponsor-logo-class" src={MsftLogo} /> </a> 
              <a href="https://www.vanguardjobs.com/"> <img className="sponsor-logo-class" src={VanguardLogo} /> </a>
              <a href="https://www.bloomberg.com/company/engineering/"><img width="250px" src={BloombergLogo} /></a>
    <a href="https://www.nerdwallet.com/?bucket_id=dt-hp&ds_rl=1246084&gclid=Cj0KCQiAgP6PBhDmARIsAPWMq6kU2lzF2hxIw7n67CEmqEmVPSZo0XmFuUD7hH8AlVhmSiV_zAweWEcaAoMBEALw_wcB&gclsrc=aw.ds&mktg_body=1678&mktg_hline=19498&mktg_img=3598&mktg_place=kwd-40958987563%7D&model_execution_id=DB0B89FD-876C-4011-83E1-4177EB33C3EC&nw_campaign_id=150238270218585900&utm_campaign=cc_mktg_paid_060716_brand_exact&utm_content=ta&utm_medium=cpc&utm_source=goog&utm_term=nerdwallet"> <img width="260px" src={NWLogo} /> </a> */}
              <a href="https://www.alumni.upenn.edu/s/1587/gid2/16/interior_1col.aspx?sid=1587&gid=2&pgid=420" target="_blank" rel="noopener noreferrer"> <img className="sponsor-logo-class" src={TCPWLogo} /> </a>
              <a href = "https://www.blueorigin.com/" target="_blank" rel="noopener noreferrer"><img width="230px" src = {BlueOriginLogo} /></a>
              <a href="https://www.janestreet.com/" target="_blank" rel="noopener noreferrer"><img width="230px" src={JaneStreetLogo} /></a>
              <a href="https://www.linode.com/" target="_blank" rel="noopener noreferrer"><img width="230px" src={LinodeLogo} /></a>
              <a href="https://mackinstitute.wharton.upenn.edu" target="_blank" rel="noopener noreferrer"><img width="230px" src={MackLogo} /></a>
              <a href="https://cloud.google.com" target="_blank" rel="noopener noreferrer"> <img width="350px" src={GCPLogo} /> </a>
              {/* <a href="https://www.mckinsey.com/careers/home"><img width="230px" src={MckLogo} /></a> */}
              {/* <a href="https://www.twilio.com/company/jobs"><img width="230px" src={TwilioLogo} /></a> */}
              {/*<a href="https://1password.com/jobs/"><img width="230px" src={OnePLogo} /></a>*/}
              {/* {LOGOS.map(({ logo, link }) => (
                <ExternalLink key={link} href={link}>
                  {logo()}
                </ExternalLink>
              ))} */}
            </LogoGrid>
            <p> Interested in sponsoring FemmeHacks 2024? Feel free to reach out to <a href="mailto:sponsor@femmehacks.io">sponsor@femmehacks.io</a>, we'd love to hear from you!</p>
          </div>
          {/* <Art>
            <Img fluid={data.art_story.childImageSharp.fluid} />
          </Art> */}
        </StyledContainer>
      </Section>
    )}
  />
);

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px 45px;
  justify-items: center;
  align-items: center;
  margin-top: 90px;
  margin-bottom: 50px;
  a {
    svg {
      width: 100%;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  // justify-content: flex-end;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const Art = styled.figure`
  width: 600px;
  position: absolute;
  top: -12%;
  right: 50%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 0;
    right: 65%;
    width: 500px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

export default Sponsors;

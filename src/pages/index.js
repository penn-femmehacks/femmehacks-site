import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Schedule from '@sections/Schedule';
import Faq from '@sections/Faq';
import Sponsors from '@sections/Sponsors';
import Footer from '@sections/Footer';

import "../styles/bootstrap.css" // from react-bootstrap
import "../styles/index.css" // page theme


const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Schedule />
    <Faq />
    <Sponsors />
    <Footer />
  </Layout>
);

export default IndexPage;

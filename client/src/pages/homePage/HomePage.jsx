import React, { Fragment } from 'react'
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function HomePage() {
  return (
    <Fragment>
      <NavBar></NavBar>
      <Banner></Banner>
      <About></About>
      <Footer></Footer>
    </Fragment>
  )
}

export default HomePage
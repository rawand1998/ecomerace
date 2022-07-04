import React from 'react'

import About from './About';
import Product from './Product';
import Testimonal from './Testimonal';
import NewsLetter from './NewsLetter';
import Footer from './Footer';
import Header from './Header';

function Home() {
  return (
    <div>
       
   <Header />
    <About />
    <Product />
    <Testimonal />
    <NewsLetter />
    <Footer />
    </div>
  )
}

export default Home
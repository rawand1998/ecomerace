import React from 'react'

import About from './About/About';
import Product from './Product';
import Testimonal from './Testimonal';
import NewsLetter from './NewsLetter';
import Footer from './Footer/Footer';
import Header from './Header';
import TrendingProduct from './TrendingProduct';
import MayLike from './MayLike';

function Home() {
  return (
    <div>
       
   <Header />
    <About />
    <TrendingProduct />
    <Product />
    {/* <Testimonal /> */}
    <MayLike />
    <NewsLetter />
    <Footer />
    </div>
  )
}

export default Home
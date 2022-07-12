import React from 'react'

import About from './About/About';
import Product from './Testimonal/Testimonal';
import Testimonal from './Testimonal/Testimonal';
import NewsLetter from './NewLetter/NewsLetter';
import Footer from './Footer/Footer';
import Header from './Header';
import TrendingProduct from './TrendingProduct';
import MayLike from './MayLike/MayLike';

function Home() {
  return (
    <div>
       
   <Header />
    <About />
    <TrendingProduct />
    <Testimonal />
   
    <MayLike />
    <NewsLetter />
    <Footer />
    </div>
  )
}

export default Home
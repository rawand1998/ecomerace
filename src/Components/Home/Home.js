import React from 'react'

import About from '../About/About';

import Testimonal from '../Testimonal/Testimonal';
import NewsLetter from '../NewLetter/NewsLetter';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import TrendingProduct from '../TrendingProduct/TrendingProduct';
import MayLike from '../MayLike/MayLike';

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
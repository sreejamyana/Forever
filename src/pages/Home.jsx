import React from 'react'
import Hero from '../components/Hero'
import LatestCollections from '../components/LatestCollections'
import BestSellers from '../components/BestSellers'
import Advantages from '../components/Advantages'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Hero/>
        <LatestCollections/>
        <BestSellers/>
        <Advantages/>
        <Subscribe/>
        <Footer/>
    </>
  )
}

export default Home
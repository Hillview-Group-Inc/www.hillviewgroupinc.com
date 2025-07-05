import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Elevate from '../Elevate'
import Industries from '../Industries'
import ExpertAdvise from '../ExpertAdvise'
import Empower from './Empower'
import SoftwareDevelopmentComponent from './SoftwareDevelopment'
import WhyUs from './WhyUs'

function Hero() {
  return (
    <div className='w-full pt-12 md:px-25'>
      <Navbar/>
      <Empower/>
      <SoftwareDevelopmentComponent/>
      <WhyUs/>
      <ExpertAdvise/>
      <Industries/>
      <Elevate/>
      <Footer/>
    </div>
  )
}

export default Hero

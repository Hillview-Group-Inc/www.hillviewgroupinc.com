import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Elevate from '../Components/Elevate'
import Industries from '../Components/Industries'
import ExpertAdvise from '../Components/ExpertAdvise'
import CoreValues from '../Components/AboutUs/COreValues'
import Building from '../Components/AboutUs/Building'
import WhoWeAre from '../Components/AboutUs/WhoWeAre'

function AboutUs() {
  return (
    <div className='w-full pt-12'>
      <Navbar />
      <Building/>
      <WhoWeAre/>
      <CoreValues/>
      <ExpertAdvise/>
      <Industries/>
      <Elevate/>
      <Footer/> 
    </div>
  )
}

export default AboutUs

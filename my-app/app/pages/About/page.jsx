import Section1 from '@/app/components/About/Section1'
import Section2 from '@/app/components/About/Section2'
import React from 'react'
import Header from '@/app/components/mainPage/Header'
import Scroll from '@/app/components/scroll/Scroll'
import Section3 from '@/app/components/About/Section3'
import Footer from '@/app/components/mainPage/Footer'
import Section4 from '@/app/components/About/Section4'
import Section5 from '@/app/components/About/Section5'
import History from '@/app/components/About/histore'

export default function page() {
  return (
    <div>
      <Header />
      <Section1/>
      <Section2/>
      <Scroll/>
      <History/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Footer/>
    </div>
  )
}

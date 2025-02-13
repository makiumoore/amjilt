import React from 'react'
import Header from '@/app/components/mainPage/Header'
import Footer from '@/app/components/mainPage/Footer'
import Syshero from '@/app/components/system/Syshero'
import Syscomp from '@/app/components/system/Syscomp'

export default function page() {
  return (
    <div>
      <Header />
      <Syshero />
      <Syscomp />
      <Footer/>
    </div>
  )
}

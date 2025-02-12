import Section1 from '@/app/components/About/Section1'
import Section2 from '@/app/components/About/Section2'
import React from 'react'
import Header from '@/app/components/mainPage/Header'

export default function page() {
  return (
    <div>
      <Header />
      <Section1/>
      <Section2/>
    </div>
  )
}

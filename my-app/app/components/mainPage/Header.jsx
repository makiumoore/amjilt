import Link from 'next/link'
import React from 'react'


export default function Header() {
  return (
    <div>
        <Link href={'/pages/About'}>About</Link>
    </div>
  )
}

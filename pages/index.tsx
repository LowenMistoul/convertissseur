import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div className="container">
        <h1>  page 1 </h1>
        <h1>
          <Link href="page2"> 
            <a>Aller a la page 2</a>
          </Link>
        </h1>
    </div>
  )
}

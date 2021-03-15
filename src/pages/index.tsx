import Head from 'next/head'
import "antd/dist/antd.css";
import Link from 'next/link'
import React from 'react'
import Convertisseur from '../components/convert'
import Presentation from '../components/presentation';

export default function Home() {
  return (
    <div>
        <Presentation />
        <Convertisseur />
    </div>
  )
}

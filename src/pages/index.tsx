import Head from 'next/head'
import "antd/dist/antd.css";
import Link from 'next/link'
import React from 'react'
import Convertisseur from '../components/convert'
import Presentation from '../components/presentation';
import MenuFlottant from '../components/Menu';

export default function Home() {
  return (
    <div>
        <MenuFlottant />
        <Presentation title={'Bienvenue'} />
    </div>
  )
}

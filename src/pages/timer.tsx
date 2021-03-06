import Head from 'next/head'
import "antd/dist/antd.css";
import Link from 'next/link'
import React from 'react'
import MenuFlottant from '../components/Menu';
import Presentation from '../components/presentation';
import Timer from '../components/Timer';

export default function Home() {
    return (
      <div>
          <MenuFlottant />
          <Presentation 
            title={'MINUTEUR'}
            subtitle={' Veuillez entrer le temps alloue'}
          />
          <Timer />
      </div>
    )
  }
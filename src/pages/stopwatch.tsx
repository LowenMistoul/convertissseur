import Head from 'next/head'
import "antd/dist/antd.css";
import Link from 'next/link'
import React from 'react'
import StopWatch from '../components/stopwatch'
import MenuFlottant from '../components/Menu';
import Presentation from '../components/presentation';

export default function Home() {
    return (
      <div>
          <MenuFlottant />
          <Presentation 
            title={'Chronometre'}
            subtitle={'Enclenchez le Chronometre en pressant start :'}
          />
          <StopWatch />
      </div>
    )
  }
import Head from 'next/head'
import "antd/dist/antd.css";
import Link from 'next/link'
import React from 'react'
import Convertisseur from '../components/convert'
import MenuFlottant from '../components/Menu';
import Presentation from '../components/presentation';

export default function Home() {
    return (
      <div>
          <MenuFlottant />
          <Presentation 
            title={'CONVERTISSEUR DE BASES ARITHMETIQUES'}
            subtitle={'Vous pouvez Selectionner la conversion :'}
          />
          <Convertisseur />
      </div>
    )
  }
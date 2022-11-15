import React, { useState } from 'react';
import DrawerAppBar from '../components/appbar-mui';
import MeuHead from '../components/head-html';
import MeuHeader from '../components/MeuHeader';
import Page1 from './singlepage/page1';


export default function Home() {

  return (
    <>
      <MeuHead />
      <MeuHeader/>
      
      {/* <DrawerAppBar /> */}
      <Page1 />
    </>
  )
}

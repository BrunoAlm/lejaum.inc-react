import React, { useState } from 'react';
import MeuHead from '../components/head-html';
import MeuHeader from '../components/MeuHeader';
import Page1 from './singlepage/page1';
import Page2 from './singlepage/page2';

export default function Home() {
  return (
    <>
      <MeuHead />
      <MeuHeader/>
      <Page1 />
      <Page2 />
    </>
  )
}

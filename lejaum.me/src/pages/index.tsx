import React, { useState } from 'react';
import HeadHTML from '../components/head-html';
import HeaderSection from '../components/MeuHeader';
import HomeSection from './singlepage/page1';
import Section2 from './singlepage/page2';

export default function Home() {
  return (
    <>
      <HeadHTML />
      <HeaderSection />
      <HomeSection />
      <Section2 />
    </>
  )
}

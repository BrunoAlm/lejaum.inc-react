import React, { useState } from 'react';
import HeadHTML from '../components/head-html';
import HeaderSection from '../components/top_bar';
import HomeSection from './singlepage/section1';
import Section2 from './singlepage/section2';

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

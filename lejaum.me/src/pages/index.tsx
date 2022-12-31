import React, { useState } from 'react';
import HeadHTML from '../components/head_html';
import HeaderSection from '../components/top_bar';
import HomeSection from './singlepage/section1';
import Section2 from './singlepage/section2';
import Section3 from './singlepage/section3';
import Section4 from './singlepage/section4';

export default function Home() {
  return (
    <>
      <HeadHTML />
      <HeaderSection />
      <HomeSection />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  )
}

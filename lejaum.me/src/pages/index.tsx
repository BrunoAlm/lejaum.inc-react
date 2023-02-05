import React from 'react';
import HeadHTML from '../components/head_html';
import TopBar from '../components/top_bar';
import Section1 from './singlepage/section1';
import Section2 from './singlepage/section2';
import Section3 from './singlepage/section3';
import Section4 from './singlepage/section4';
import Section5 from './singlepage/section5';
import { useEffect } from "react";



export default function Home() {


  useEffect(() => {
    var userTheme = localStorage.getItem("theme");
    var systemThemeDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var systemThemeLight = window.matchMedia("(prefers-color-scheme: light)").matches;

    if ((userTheme === "dark") || (!userTheme && systemThemeDark)) {
      document.documentElement.classList.add("dark");
      return;
    }
    if ((userTheme === "light") || (!userTheme && systemThemeLight)) {
      document.documentElement.classList.add("light");
      return;
    }
    console.log("teste");
  }, [])

  return (
    <>
      <HeadHTML />
      <TopBar />
      <Section1 id='#' />
      <Section2 id='portfolio-sm' />
      <Section3 id='portfolio-id' />
      {/* <Section4 id='solucoes' /> */}
      <Section5 id='avaliacoes' />
    </>
  )
}

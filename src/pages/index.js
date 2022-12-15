import * as React from 'react';
//Layout import
import  Layout   from "../layout/layout";
//Component Imports
import { Hero } from "../components/HomePage/Hero";
import { ServiceTimes } from '../components/HomePage/Service-Times';
import { DiversitySection } from '../components/HomePage/Diversity-Section';
//Seo
import  Seo  from '../components/seo';

const HomePage = () => {
  return(
   <Layout>
      <Hero/>
      <ServiceTimes/>
      <DiversitySection/>
   </Layout>
  )
  }
  export const Head = () => <Seo/>
export default HomePage

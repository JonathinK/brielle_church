import * as React from 'react';
//Layout import
import  Layout   from "../layout/layout";
//Seo
import Seo from "../components/seo";

//Component Imports
import { Hero } from "../components/HomePage/Hero";
import { ServiceTimes } from '../components/HomePage/Service-Times';
import { DiversitySection } from '../components/HomePage/Diversity-Section';

const HomePage = () => {
  return(
   <Layout>
   <Seo/>
      <Hero/>
      <ServiceTimes/>
      <DiversitySection/>
   </Layout>
  )
}
export default HomePage
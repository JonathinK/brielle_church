import React from 'react';
//Layout
import Layout from '../../layout/layout';
//components
import GlobalInformation from '../../components/Covid/Global-Information';
import Hero from '../../components/Covid/Hero';

import StateInformation from '../../components/Covid/State-Information';
import Help from "../../components/Covid/Help";

import Seo from '../../components/seo';



const CovidInfo = () => {
  return(
    <Layout>
      <Hero/>
      
      <StateInformation/>
      <GlobalInformation/>
      <Help/>
    </Layout>
  )
}
export default CovidInfo
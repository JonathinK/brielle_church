import React from 'react';
//Layout
import Layout from '../../layout/layout';
//components
import GlobalInformation from '../../components/Covid/Global-Information';
import Hero from '../../components/Covid/Hero';
import SafetyConcerns from '../../components/Covid/Safety-Concerns';
import StateInformation from '../../components/Covid/State-Information';
import StaySafe from "../../components/Covid/Stay-Safe";
import Help from "../../components/Covid/Help";

import Seo from '../../components/seo';



const CovidInfo = () => {
  return(
    <Layout>
      <Hero/>
      <SafetyConcerns/>
      <StateInformation/>
      <GlobalInformation/>
      <Help/>
      <StaySafe/>
    </Layout>
  )
}
export default CovidInfo
import React from 'react';
//Layout
import Layout from '../../layout/layout';
//components
import GlobalInformation from '../../components/Covid/Global-Information';
import Hero from '../../components/Covid/Hero';

import StateInformation from '../../components/Covid/State-Information';
import Help from "../../components/Covid/Help";
import { SafetyConcerns } from "../../components/Covid/Safety-Concerns";

//seo
import Seo from "../../components/seo"

const CovidInfo = () => {
  return(
    <Layout>
      <Hero/>
      <SafetyConcerns/>
      <StateInformation/>
      <GlobalInformation/>
      <Help/>
    </Layout>
  )
}
export const Head = () => <Seo title="Church Covid Info"/>
export default CovidInfo
import React from 'react';

import Layout from '../../layout/layout';

import { Hero } from '../../components/Preschool/Hero';
import { OpeningSection } from '../../components/Preschool/OpeningSection';
import { DirectorSection } from '../../components/Preschool/DirectorSection';
import { ExpectationSection } from '../../components/Preschool/ExpectationSection';
import { LastSection } from '../../components/Preschool/ContactSection';

//Seo
import Seo from "../../components/seo"

const PreSchool = () => {
  return(
   <Layout>
    <Hero/>
    <OpeningSection/>
    <DirectorSection/>
    <ExpectationSection/>
    <LastSection/>
   </Layout>
  )
}
export const Head = () => <Seo title="Preschool"/>
export default PreSchool
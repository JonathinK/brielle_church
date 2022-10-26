import * as React from 'react';
//Layout Import
import Layout from '../../layout/layout';
//Component Imports
import { Hero } from '../../components/Worship-Service/Hero';
import { ServiceTimes } from '../../components/Worship-Service/ServiceTimes';
import { TypicalService } from '../../components/Worship-Service/TypicalService';
import { Faq } from '../../components/Worship-Service/Faq';
import { ConnectionSection } from '../../components/Worship-Service/Connection-Section';

const WorshipService = () => {
  return(
    <Layout>
      <Hero/>
      <ServiceTimes/>
      <TypicalService/>
      <Faq/>
      <ConnectionSection/>
    </Layout>
  )
}
export default WorshipService
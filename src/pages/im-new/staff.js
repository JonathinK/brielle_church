import * as React from 'react';
//Layout
import Layout from '../../layout/layout';
//Components
import { Hero } from "../../components/OurStaff/Hero"; 
import { PastorLou } from "../../components/OurStaff/PastorLou";
import { Dawne } from "../../components/OurStaff/Dawne";
import { Deacons } from "../../components/OurStaff/Deacons";
import { Administration } from '../../components/OurStaff/Administration';
import { Elders } from '../../components/OurStaff/Elders';
import { OtherStaff } from '../../components/OurStaff/Other';

//Styles
import {
  Section,
  LargeHeadline,
  TextWrapper 
} from "../../styles"




const Staff = () => {
  return(
    <Layout>
    <Hero/>
    <Section SectionPadding className='top-padding-only'>
      <TextWrapper
        R="1/2"
        C="1/15"
        TC="2/10"
        MC="2/6"
        JS="center"
        AS="center"
      >
        <LargeHeadline
        TextCenter
        AltColor
        >
        Meet the wonderful people behind the scenes</LargeHeadline>
      </TextWrapper>
    </Section>
    <PastorLou/>
    <Dawne/>
    <Administration/>
    <Deacons/>
    <Elders/>
    <OtherStaff/>
    </Layout>
  )
}
export default Staff
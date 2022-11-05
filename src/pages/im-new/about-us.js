import * as React from "react";
import Layout from "../../layout/layout";
//Section Imports
import { Hero } from "../../components/AboutUs/Hero";
import { ComeFromSection } from "../../components/AboutUs/Come-From-Section";
import { WeBelieveSection } from "../../components/AboutUs/We-Believe-Section";
import { WeBelongSection } from "../../components/AboutUs/We-Belong-Section";
import { SacramentsSection } from "../../components/AboutUs/Sacraments-Section";
import { EndingSection } from "../../components/AboutUs/Ending-Section";

//Seo
import Seo from "../../components/seo";

const AboutUs = () => {
  return(
    <Layout>
      <Hero/>
      <ComeFromSection/>
      <WeBelieveSection/>
      <WeBelongSection/>
      <SacramentsSection/>
      <EndingSection/>
    </Layout>
  )
}
export default AboutUs 

export const Head = () => {
  <Seo
    title="About Us"
  />
}
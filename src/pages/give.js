import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
//Layout
import Layout from '../layout/layout';
//Components
import { PartnerSection } from '../components/Give/Partner';
import { VancoBannerSection } from '../components/Give/VancoBanner';
import { MobileSection } from '../components/Give/MobileDevice';
import { DesktopSection } from '../components/Give/DesktopGive';
import { Hero } from '../components/Give/Hero';
//Seo
import Seo from "../components/seo";

//Styles
import { 
  LargeHeadline, 
  Section, 
  SubHeadline, 
  TextWrapper } from '../styles';

const Give = () => {
 const data = useStaticQuery(graphql`
    query {
      givePhotosJson {
        Partner {
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP]
              layout: FULL_WIDTH
              placeholder: BLURRED
              quality: 50
              webpOptions: {quality: 70}
            )
          }
        }
        Vanco {
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP]
              layout: FULL_WIDTH
              placeholder: BLURRED
              quality: 50
              webpOptions: {quality: 70}
            )
          }
        }
        Mobile {
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP]
              layout: FULL_WIDTH
              placeholder: BLURRED
              quality: 50
              webpOptions: {quality: 70}
            )
          }
        }
        Labtop {
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP]
              layout: FULL_WIDTH
              placeholder: BLURRED
              quality: 50
              webpOptions: {quality: 70}
            )
          }
        }
      }
    }
  `)
  const dataString = data.givePhotosJson;
  const Partner = getImage(dataString.Partner);
  const Mobile = getImage(dataString.Mobile);
  const Vanco = getImage(dataString.Vanco);
  const Labtop = getImage(dataString.Labtop);

  return(
    <Layout>
      <Hero/>  
      <PartnerSection imagedata={Partner}/> 
      <VancoBannerSection imagedata={Vanco}/>
      <Section>
        <TextWrapper
          R="1/2"
          C="5/11"
          TC="2/10"
          MC="2/6"
          JS="center"
          AS="center"
          CenteredWrapper
        >
          <LargeHeadline AltColor>Vanco Give</LargeHeadline>
          <SubHeadline>The safest way to give to your church</SubHeadline>
        </TextWrapper>
      </Section>
      <MobileSection 
      imagedata={Mobile}
      applelink="https://apps.apple.com/us/app/vanco-mobile-faith-engagement/id1504961674"
      androidlink="https://play.google.com/store/apps/details?id=com.vancopayments.vancomobile"
      />
      <DesktopSection 
      imagedata={Labtop}
      vancolink="/"
      />
    </Layout>
  )
}
export const Head = () => <Seo title="Give to the Church In Brielle"/>
export default Give

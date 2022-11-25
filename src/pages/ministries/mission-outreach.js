import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
//Layout
import Layout from '../../layout/layout';
//Components
import { FullfillmentSection } from '../../components/Mission-Outreach/Fullfillment';
import { Hero } from '../../components/Mission-Outreach/Hero';
import { MissionOpportunitiesSection } from '../../components/Mission-Outreach/Mission-Opportunities';
import { AssistanceFeedingSection } from "../../components/Mission-Outreach/Assistance-Feeding";
import { TopTextSection } from '../../components/Mission-Outreach/Top-Text';
import { ChangingLivesSection } from '../../components/Mission-Outreach/ChangingLives';
//Seo 
import Seo from "../../components/seo"



const MissionsOutreach = () => {
  const data = useStaticQuery(graphql`
    query {
      missionsJson {
        image1 {
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
        image2 {
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
        image3 {
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
        image4 {
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
        image5 {
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
        image6 {
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
  const dataVar = data.missionsJson;
  const Fullfillment = getImage(dataVar.image1);
  const Cypress = getImage(dataVar.image2);
  const PlumpyNut = getImage(dataVar.image3);
  const FoodPantry = getImage(dataVar.image4);
  const FoodMeals = getImage(dataVar.image5);
  const Refugee = getImage(dataVar.image6);

  return(
    <Layout>
      <Hero/>
      <TopTextSection/>  
      <FullfillmentSection imagedata={Fullfillment}/>
      <MissionOpportunitiesSection 
        imagedatacypress={Cypress} 
        imagedataplumpynut={PlumpyNut} 
        imagedatafoodpantry={FoodPantry}
      />
      <AssistanceFeedingSection 
        assistanceimagedata={FoodMeals} 
        refugeeimagedata={Refugee}
      />
      <ChangingLivesSection/>
    </Layout>
  )
}
export const Head = () => <Seo title="Missions & Outreach"/>
export default MissionsOutreach


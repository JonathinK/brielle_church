import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { graphql,useStaticQuery } from 'gatsby';
//Layout
import Layout from '../../layout/layout';
//Components
import { Hero } from '../../components/Music-Ministry/Hero';
import { IntroSection } from '../../components/Music-Ministry/Intro';
import { TopTextSection } from '../../components/Music-Ministry/Top-Text';


const MusicLiturgicalArts = () => {
  const data = useStaticQuery(graphql`
    query {
      musicJson {
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
        }image2 {
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
  //Image Variables
  const dataVar = data.musicJson;
  const Dawne = getImage(dataVar.image1);
  const Musicnote = getImage(dataVar.image2);

  return(
    <Layout>
      <Hero/>
      <TopTextSection/>
      <IntroSection
        imagedata={Dawne}
        expectImageData={Musicnote}
      />
    </Layout>
  )
}
export default MusicLiturgicalArts
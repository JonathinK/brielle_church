import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
//Styles
import { StaffContainer } from '../../styles/Staff';
import { 
  Section, 
  SvgWrapper } from '../../styles';
//Components
import { StaffMember } from './Staff-Person';
//Svg
import StaffSvg from "../../Svg/assets/Divider-Wave.svg"

export const Deacons = () => {
  const data = useStaticQuery(graphql`
    query {
      staffPhotosJson {
        Lori {
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
        Linda {
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
        Nancy {
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

  const Images = data.staffPhotosJson;
  const Lori = getImage(Images.Lori);
  const Linda = getImage(Images.Linda);
  const Nancy = getImage(Images.Nancy);

  return(
    <Section NoGap>
    <SvgWrapper
      R="1/2"
      C="1/15"
      TR="1/2"
      TC="1/11"
      MR="1/2"
      MC="1/7"
      Rotate
      Flip 
      StaffSvg
    >
      <StaffSvg/>
    </SvgWrapper>
      <StaffContainer>
        <StaffMember
          imagedata={Lori}
          title="DEACON"
          position="Inclusivity Ministry CP"
          name="Lori Keasel"
          class="no-display"
          staffclass="deacons-elders-other"
        />
        <StaffMember
          imagedata={Linda}
          title="DEACON"
          position="Fellowship CP"
          name="Linda Stefano"
          class="no-display"
          staffclass="deacons-elders-other"
        />
        <StaffMember
          imagedata={Nancy}
          title="DEACON"
          position="Fellowship Co-Leader"
          name="Nancy Leblanc"
          class="no-display"
          staffclass="deacons-elders-other"
        />
      </StaffContainer>
    </Section>
  )
}
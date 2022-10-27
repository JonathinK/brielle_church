import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
//Styles
import { StaffContainer } from '../../styles/Staff';
import { Section, SvgWrapper } from '../../styles';
//Components
import { StaffMember } from './Staff-Person';
//Svg
import StaffSvg from "../../Svg/assets/Divider-Wave.svg"

export const OtherStaff = () => {
  const data = useStaticQuery(graphql`
    query {
    staffPhotosJson {
         Joy {
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
        JohnL {
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
  const Joy = getImage(Images.Joy);
  const John = getImage(Images.JohnL);

  return(
    <Section NoGap>
    <SvgWrapper
      R="2/3"
      C="1/15"
      TR="3/4"
      TC="1/11"
      MR="2/3"
      MC="1/7"
      JS="end"
      AS="end"
      StaffSvg
    >
      <StaffSvg/>
    </SvgWrapper>
      <StaffContainer>
        <StaffMember
          imagedata={Joy}
          title="CHANCEL"
          position="Chancel Ministry Leader"
          name="Joy Wallis"
          class="no-display"
          staffclass="deacons-elders-other"
        />
        <StaffMember
          imagedata={John}
          position="Admin Ministry CP"
          name="John Linfante"
          class="no-display"
          staffclass="deacons-elders-other"
        />
      </StaffContainer>
    </Section>
  )
}
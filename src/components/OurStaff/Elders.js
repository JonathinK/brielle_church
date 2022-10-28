import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
//Styles
import { StaffContainer } from '../../styles/Staff';
import { Section } from '../../styles';
//Components
import { StaffMember } from './Staff-Person';

export const Elders = () => {
  const data = useStaticQuery(graphql`
    query {
      staffPhotosJson {
        Jeff {
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
        Jack {
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
        Lou {
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
        Shannon {
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
  const Jeff = getImage(Images.Jeff);
  const Jack = getImage(Images.Jack);
  const Lou = getImage(Images.Lou);
  const Shannon = getImage(Images.Shannon);

  return(
    <Section NoGap>
      <StaffContainer
        className='wider-grid-placement'
      >
      <StaffMember
          imagedata={Jack}
          title="ELDER"
          position="Consistory VP"
          name="Jack Conover"
          class="no-display"
          staffclass="deacons-elders-other"
        />
        <StaffMember
          imagedata={Jeff}
          title="ELDER"
          position="Consistory Clerk"
          name="Jeff Heinze"
          class="no-display"
          staffclass="deacons-elders-other"
        />
        <StaffMember
          imagedata={Lou}
          title="ELDER"
          position="Treasurer"
          name="Lou Stefan"
          class="no-display"
          staffclass="deacons-elders-other"
        /> 
        <StaffMember
          imagedata={Shannon}
          title="ELDER"
          position="Christian Education Ministry"
          name="Shannon Nish"
          class="no-display"
          staffclass="deacons-elders-other"
        />
      </StaffContainer>
    </Section>
  )
}
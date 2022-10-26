import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
//Component Import
import { Hero } from '../../components/Inclusivity/Hero';
//Layout Import
import Layout from '../../layout/layout';
//Styled Imports
import { 
  Headline, 
  ImageWrapper, 
  Section, 
  TextWrapper,
  Body
 } from '../../styles';

const InclusivityMessage = () => {
  return(
    <Layout>
      <Hero/>
      <Section SectionPadding>
        <ImageWrapper
          R="1/2"
          C="6/10"
          TR="1/2"
          TC="3/9"
          MR="1/2"
          MC="2/6"
        >
          <StaticImage
            src="../../images/Inclusivity/Heart.png"
            alt="Diversity Heart"
          />
        </ImageWrapper>
        <TextWrapper
          R="2/3"
          C="4/12"
          TR="2/3"
          TC="2/10"
          MR="2/3"
          MC="2/6"
          LeftAlignWrapper
        >
        <Headline>
          Creating a Diverse and Inclusive community
        </Headline>
        <Body LeftAlign>
          At the Church in Brielle we believe that all humanity is created in the image of God and we welcome people from every walk of life as demonstrated in the mission and ministry of Jesus Christ.  We are an open, inclusive, welcoming, and affirming Christian-based community that welcomes all people in all aspects of the church including leadership.  We welcome all regardless of age, race, gender identity, gender expression, marital status, physical condition, sexual orientation, ethnic background, or economic situation.  A strong community has many perspectives where all perspectives are respected.  We look to continue to build a community of people who support each other in good times and in difficult ones and strive to be a caring, accepting, and helpful community.
        </Body>
        </TextWrapper>
        <TextWrapper
          AltTextWrapper
          R="3/4"
          C="3/13"
          TR="3/4"
          TC="2/10"
          MR="3/4"
          MC="2/6"
        >
          <Headline>OUR DOORS ARE ALWAYS OPEN FOR YOU TO WORSHIP WITH US</Headline>
        </TextWrapper>
      </Section>
    </Layout>
  )
}
export default InclusivityMessage
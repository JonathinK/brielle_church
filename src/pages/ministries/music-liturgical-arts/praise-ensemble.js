import * as React from 'react';
import Layout from '../../../layout/layout';
import Seo from '../../../components/seo';
import { StaticImage } from 'gatsby-plugin-image';
import { Hero, HeroSvgContainer, PageHeroContainer, PageTitle, PageTitleWrapper } from '../../../styles/pagehero';
import { SvgWrapper, Section, MusicMinistryImages, TextWrapper, Headline, Body,  ExpectationInfo } from '../../../styles';
import { Form } from "../../../components/Music-Ministry/Form";
import HeroSvg from "../../../Svg/assets/Alt-Hero-Curve.svg";
import StaffLines from "../../../Svg/assets/StaffLines.svg";
import MusicSvg from "../../../Svg/assets/Music-Svg.svg";



const ChancelChoir = () => {
  return(
    <Layout>
      <PageHeroContainer>
        <Hero className="image_blur">
          <StaticImage
            src="../../../images/Music-Ministry/Groups-Hero.jpg"
            className='heroImage'
            alt=""
          />
        </Hero>
        <PageTitleWrapper>
          <PageTitle>Highschool & Adult Praise Ensemble</PageTitle>
        </PageTitleWrapper>
        <HeroSvgContainer>
          <HeroSvg/>
        </HeroSvgContainer>
      </PageHeroContainer>
      <Section id="Group_Image_Intro" SectionPadding className='medium_gap'>
      <SvgWrapper
          StaffLines
          Rotate
          Flip
          C="1/15"
          R="1/2"
          TC="1/11"
          TR="1/2"
          MC="1/7"
          MR="1/2"
          >
          <StaffLines/>
      </SvgWrapper> 
      <SvgWrapper
          StaffLines
          C="1/15"
          R="3/4"
          TC="1/11"
          TR="3/4"
          MC="1/7"
          MR="3/4"
          >
          <StaffLines/>
      </SvgWrapper>
      <MusicMinistryImages GroupImage>
        <StaticImage
          src="../../../images/Music-Ministry/Praise-Ensemble.jpg"
          alt="Praise Ensemble"
          className='_image'
          quality={60}
          webpOptions={{quality:90}}
        />

      </MusicMinistryImages>
      </Section>
      <Section id="About_Our_Group">
      <TextWrapper CenteredWrapper C="5/11" R="4/5" TC="3/9" MC="2/6" >
        <Headline AltColor>About Our Group</Headline>
        <Body>Do you play and instrument or like more upbeat music? We welcome any instrumentalist, high school or adult, to join us - guitar, bass, percussion, flute, violin, trumpet, trombone, Clarinet/oboe, saxophone etc.Please consider sharing your God given gifts!</Body>
      </TextWrapper>
      </Section>
      <Section id="Expectation_Info">
      <SvgWrapper R="1/2" C="1/15" TR="1/2" TC="1/11" MC="1/7" MR="1/2" JS="center" AS="end" MusicNotesSvg Rotate>
        <MusicSvg/>
      </SvgWrapper>
      <ExpectationInfo>
        <Headline>What to expect</Headline>
        <ul>
          <li>Teen and adult musicians welcome!</li>
          <li>Thursday rehearsal, 7:15AM - 8:30PM 
          <br/>
          <span>
          — Guitar ~ Bass ~ Percussion/Drums ~ Flute ~ Keyboard
          </span>
          </li>
          <li>
          Play and/or sing each Sunday at 10AM service
          </li>
          <li>
          All members meet at 9:15AM for warm-up and review for 10AM Sunday Service
          </li>
          <li>
          No Weekday rehearsal commitment, practice is held briefly on Sundays after service for the following week.
          <br/>
          <span>
          <b>* Independent preparation at home is required!</b>
          </span>
          </li>
        </ul>        
      </ExpectationInfo>
      <SvgWrapper R="3/4" C="1/15" TR="3/4" TC="1/11" MC="1/7" MR="3/4" Rotate Flip>
        <MusicSvg/>
      </SvgWrapper>
      </Section>
      <Section id='Form'>
        <Form/>
      </Section>
    </Layout>
  )
}

export default ChancelChoir

export const Head = () => <Seo
  title="High School/Adult Praise Ensemble"
  description="Do you play and instrument or like more upbeat music? We welcome any instrumentalist, high school or adult, to join us - guitar, bass, percussion, flute, violin, trumpet, trombone, Clarinet/oboe, saxophone etc.Please consider sharing your God given gifts!"
/>
import * as React from 'react';
import Layout from '../../../layout/layout';
import Seo from '../../../components/seo';
import { StaticImage } from 'gatsby-plugin-image';
import { Hero, HeroSvgContainer, PageHeroContainer, PageTitle, PageTitleWrapper } from '../../../styles/pagehero';
import { SvgWrapper, Section, MusicMinistryImages, TextWrapper, Headline, Body, GroupsImagesContainer, ExpectationInfo } from '../../../styles';
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
          <PageTitle>Chancel Choir</PageTitle>
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
          src="../../../images/Music-Ministry/Chancel-Choir.jpg"
          alt="Chancel Choir standing together"
          className='_image'
          quality={60}
          webpOptions={{quality:90}}
        />

      </MusicMinistryImages>
      </Section>
      <Section id="About_Our_Group">
      <TextWrapper CenteredWrapper C="5/11" R="4/5" TC="3/9" MC="2/6" >
        <Headline AltColor>About Our Group</Headline>
        <Body>A welcoming group of teen and adult singers who share a love of music which glorifies God and supports the congregation in prayer and praise.</Body>
      </TextWrapper>
      <GroupsImagesContainer>

      </GroupsImagesContainer>
      </Section>
      <Section id="Expectation_Info">
      <SvgWrapper R="1/2" C="1/15" TR="1/2" TC="1/11" MC="1/7" MR="1/2" JS="center" AS="end" MusicNotesSvg Rotate>
        <MusicSvg/>
      </SvgWrapper>
      <ExpectationInfo>
        <Headline>What to expect</Headline>
        <ul>
          <li>Sing each Sunday & prepare special anthems for the 2nd & the 4th Sundays of each month.</li>
          <li>Thursday rehearsal, 7:15AM - 8:30PM 
          <br/>
          <span>
          — Encompasses the art of learning some music theory (our roadmap)
          </span>
          <br/>
          <span>
          — Making beautiful vocal harmony( our goal ) and sharing laughter and love with each other ( the best part )
          </span>
          <br/>
          <span>
          — Reading Music is not necessary! ( Voice parts can be recorded to practice at home ) 
          </span>
          </li>
          <li>All members meet at 9:15AM for warm-up & review for 10AM service.
          </li>
          <li>
            Grow in friendship, spirituality, and fellowship.
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
  title=" Chancel Choir"
  description="A welcoming group of teen and adult singers who share a love of music which glorifies God and supports the congregation in prayer and praise."
/>
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



const HandbellChoir = () => {
  return(
    <Layout>
      <PageHeroContainer>
        <Hero className="image_blur">
          <StaticImage
            src="../../../images/Music-Ministry/Groups-Hero.jpg"
            className='heroImage'
          />
        </Hero>
        <PageTitleWrapper>
          <PageTitle>Handbell Choir</PageTitle>
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
      <MusicMinistryImages GroupPageImage>
        <StaticImage
          src="../../../images/Music-Ministry/Handbell-Choir.jpg"
          alt="Chancel Choir standing together"
          className='group_image'
          imgClassName='img_props'
          quality={60}
          webpOptions={{quality:90}}
        />

      </MusicMinistryImages>
      </Section>
      <Section id="About_Our_Group">
      <TextWrapper CenteredWrapper C="5/11" R="1/2" TC="3/9" MC="2/6" >
        <Headline AltColor>About Our Ringers</Headline>
        <Body>A mixed group of teen and adult ringers with a varied range of age & experience from beginner to over 30 years ringing.</Body>
      </TextWrapper>
      <GroupsImagesContainer>
        <MusicMinistryImages GroupsImage>
        <div className='overflow_container'>
          <StaticImage
            src="../../../images/Music-Ministry/Handbell-Choir-1.jpg"
            layout="fullWidth"
            quality={60}
            webpOptions={{quality:90}}
            className="img"
            imgClassName='img_props'
            alt=""
          />
        </div>
          
        </MusicMinistryImages>
        <MusicMinistryImages GroupsImage>
        <div className='overflow_container'>
          <StaticImage
            src="../../../images/Music-Ministry/Handbell-Choir-2.jpg"
            layout="fullWidth"
            quality={60}
            webpOptions={{quality:80}}
            className="img"
            imgClassName='img_props'
            placeholder='blurred'
            alt=""
          />
        </div>
          
        </MusicMinistryImages>
        <MusicMinistryImages GroupsImage>
        <div className='overflow_container'>
          <StaticImage
            src="../../../images/Music-Ministry/Handbell-Choir-3.jpg"
            layout="fullWidth"
            quality={60}
            webpOptions={{quality:90}}
            className="img"
            imgClassName='img_props'
            alt=""
          />
        </div>
          
        </MusicMinistryImages>
      </GroupsImagesContainer>
      </Section>
      <Section id="Expectation_Info">
      <SvgWrapper R="1/2" C="1/15" TR="1/2" TC="1/11" MC="1/7" MR="1/2" JS="center" AS="end" MusicNotesSvg>
        <MusicSvg/>
      </SvgWrapper>
      <ExpectationInfo>
        <Headline>What to expect</Headline>
        <ul>
          <li id="Ring">
            <b><i>RING</i></b>  Handbell Choir rings every 4 to 6 weeks September through June. 
          </li>
          <li id="Rehearse">
            <b><i>REHEARSE</i></b> Our teen/adult Handbell Choir practices weekly 6pm to 7:15pm where we learn together, ring and laugh always. 
          </li>
          <li id="Meet">
            <b><i>MEET</i></b> On Handbell Sunday ringers arrive by 8:45am to warm up for our 10am liturgy. 
          </li>
          <li id="Blessing">
            <b><i>BLESSING</i></b> Playing handbells is very peaceful as most ringers will share with you. The vibration of ringing encourages relaxation, as well as memory and coordination skills. The focus is on just 1 or 2 bells as a beginner. Ringing is a bucket list item,  everyone should ring at least once... heavenly!!
          </li>
        </ul>        
      </ExpectationInfo>
      <SvgWrapper R="3/4" C="1/15" TR="3/4" TC="1/11" MC="1/7" MR="3/4" MusicNotesSvg RotateX>
        <MusicSvg/>
      </SvgWrapper>
      </Section>
      <Section id='Form'>
        <Form/>
      </Section>
    </Layout>
  )
}

export default HandbellChoir

export const Head = () => <Seo
  title="Handbell Choir"
  description="A mixed group of teen and adult ringers with a varied range of experience from beginner to over 30 years ringing."
/>
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
      <MusicMinistryImages GroupPageImage>
        <StaticImage
          src="../../../images/Music-Ministry/Chancel-Choir.jpg"
          alt="Chancel Choir standing together"
          className='_image'
          imgClassName='img_props'
          quality={60}
          webpOptions={{quality:90}}
        />

      </MusicMinistryImages>
      </Section>
      <Section id="About_Our_Group">
      <TextWrapper CenteredWrapper C="5/11" R="1/2" TC="3/9" MC="2/6" >
        <Headline AltColor>About Our Choir</Headline>
        <Body>A welcoming group of teen and adult singers who share a love of music which glorifies God, and supports the congregation in prayer and praise.</Body>
      </TextWrapper>
      <GroupsImagesContainer>
        <MusicMinistryImages GroupsImage>
        <div className='overflow_container'>
          <StaticImage
            src="../../../images/Music-Ministry/Chancel-Choir-1.jpg"
            layout="fullWidth"
            quality={60}
            webpOptions={{quality:90}}
            className="img"
            imgClassName='img_props'
          />
        </div>
          
        </MusicMinistryImages>
        <MusicMinistryImages GroupsImage>
        <div className='overflow_container'>
          <StaticImage
            src="../../../images/Music-Ministry/Chancel-Choir-2.jpg"
            layout="fullWidth"
            quality={60}
            webpOptions={{quality:90}}
            className="img"
            imgClassName='img_props'
          />
        </div>
          
        </MusicMinistryImages>
        <MusicMinistryImages GroupsImage>
        <div className='overflow_container'>
          <StaticImage
            src="../../../images/Music-Ministry/Chancel-Choir-3.jpg"
            layout="fullWidth"
            quality={60}
            webpOptions={{quality:90}}
            className="img"
            imgClassName='img_props'
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
          <li id="Sing">
            <b><i>SING</i></b> each Sunday & prepare special anthems for the 2nd & the 4th Sundays of each month throughout the year. We also sing our annual Christmas Cantata (a community favorite!), a Tenebrae candlelight service during Lent, and special services for Christmas and Easter. We are community involved, and we share our voices in community events throughout the year. 
          </li>
          <li id="Rehearse">
            <b><i>REHEARSE</i></b> Thursdays 7:15pm - 8:30pm. 
            <br/>
            Each rehearsal encompasses:
            <br/>
            <span> *the art of learning some music theory - <q>our roadmap</q>.</span>
            <br/>
            <span>*making beautiful vocal harmony - <q>our goal</q>.</span>
            <br/>
            <span>*sharing laughter and love - <q>the best part</q>. </span>
            <br/>
            <span><b><i>**reading music is not necessary!  Voice parts can also be recorded to practice at home.</i></b></span>
          </li>
          <li id="Meet">
            <b><i>MEET</i></b> All members meet at 9:15am on Sunday for warm-up & review for 10am liturgy.
          </li>
          <li id="Blessing">
            <b><i>BLESSING</i></b> Grow in friendship, spirituality, and fellowship.
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

export default ChancelChoir

export const Head = () => <Seo
  title=" Chancel Choir"
  description="A welcoming group of teen and adult singers who share a love of music which glorifies God and supports the congregation in prayer and praise."
/>
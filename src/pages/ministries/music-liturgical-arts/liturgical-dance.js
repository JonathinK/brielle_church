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



const LiturgicalDance = () => {
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
          <PageTitle>Liturgical Dance</PageTitle>
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
          src="../../../images/Music-Ministry/Liturgical-Dance.jpg"
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
        <Headline AltColor>About Our Dance Ensemble</Headline>
        <Body>Liturgical Dancers ages 6th grade through adult who add depth to our liturgy and God’s holy word in movement and song, bringing the Word alive in the hearts of the faithful.</Body>
      </TextWrapper>
      <GroupsImagesContainer>
        <MusicMinistryImages GroupsImage>
        <div className='overflow_container'>
          <StaticImage
            src="../../../images/Music-Ministry/Liturgical-Dance-1.jpg"
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
            src="../../../images/Music-Ministry/Liturgical-Dance-2.jpg"
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
            src="../../../images/Music-Ministry/Liturgical-Dance-3.jpg"
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
            <b><i>DANCE</i></b> The liturgical dance team present their dances, choreographed to the Gospel, quarterly. 
          </li>
          <li id="Rehearse">
            <b><i>REHEARSE</i></b> Dance practices are held as needed with dance instructor Ms. Sheryl Guerrero in the sanctuary in preparation for upcoming services.
          </li>
          <li id="Meet">
            <b><i>MEET</i></b> Dancers meet in sanctuary at 8:45am to warm-up and review dance with music and readers.
          </li>
          <li id="Blessing">
            <b><i>BLESSING</i></b> Liturgical Dance can bring healing, express joy, and proclaim His good news. Dance also brings about unity with each other.  Share your talent in dance and movement!
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

export default LiturgicalDance

export const Head = () => <Seo
  title="Liturgical Dance"
  description="Dancers ages 6th grade through adult who add depth to our liturgy and God’s  holy word in movement and song, bringing the world alive in the hearts of the faithful."
/>
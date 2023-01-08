import * as React from 'react';
import Layout from '../../../layout/layout';
import Seo from '../../../components/seo';
import { StaticImage } from 'gatsby-plugin-image';
import { Hero, HeroSvgContainer, PageHeroContainer, PageTitle, PageTitleWrapper } from '../../../styles/pagehero';
import { SvgWrapper, Section, MusicMinistryImages, TextWrapper, Headline, Body,ExpectationInfo,GroupsImagesContainer } from '../../../styles';
import { Form } from "../../../components/Music-Ministry/Form";
import HeroSvg from "../../../Svg/assets/Alt-Hero-Curve.svg";
import StaffLines from "../../../Svg/assets/StaffLines.svg";
import MusicSvg from "../../../Svg/assets/Music-Svg.svg";



const ChildrensChoir = () => {
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
          <PageTitle>Childrens Choir</PageTitle>
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
          src="../../../images/Music-Ministry/Childrens-Choir.jpg"
          alt="Chancel Choir standing together"
          className='_image'
          imgClassName='img_props'
          quality={60}
          webpOptions={{quality:90}}
          placeholder="blurred"
        />

      </MusicMinistryImages>
      </Section>
      <Section id="About_Our_Group">
      <TextWrapper CenteredWrapper C="5/11" R="1/2" TC="3/9" MC="2/6" >
        <Headline AltColor>About Our Choir</Headline>
        <Body>A fun, active group of children ages 3 through 5th grade who love to sing or play percussion and hand chimes, all to glorify God.</Body>
      </TextWrapper>
      <GroupsImagesContainer>
        <MusicMinistryImages GroupsImage>
        <div className='overflow_container'>
          <StaticImage
            src="../../../images/Music-Ministry/Childrens-Choir-1.jpg"
            layout="fullWidth"
            quality={60}
            webpOptions={{quality:90}}
            className="img"
            imgClassName='img_props'
            placeholder='blurred'
          />
        </div>
          
        </MusicMinistryImages>
        <MusicMinistryImages GroupsImage>
        <div className='overflow_container'>
          <StaticImage
            src="../../../images/Music-Ministry/Childrens-Choir-2.jpg"
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
            src="../../../images/Music-Ministry/Childrens-Choir-3.jpg"
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
            <b><i>SING</i></b> The Children sing/play during the service on the 1st Sunday of the month (Communion Sunday) and the 3rd Sunday of the month before they head to Children’s Church. The Children also sing for special occasions such as Christmas Eve and Easter Services.
          </li>
          <li id="Rehearse">
            <b><i>REHEARSE</i></b> Our precious children rehearse on Thursdays 5:15pm - 6:00pm. We learn new songs, singing and using instruments.   
          </li>
          <li id="Meet">
            <b><i>MEET</i></b> The children meet on 1st and 3rd Sundays at 9:30am to warm-up their voices and practice for the service.   
          </li>
          <li id="Blessing">
            <b><i>BLESSING</i></b> The children’s choir share our love for each other and the Lord by singing together, practicing with rhythmic instruments, and learning hand chimes! They sing texts that uplift, encourage and assist in their faith development.  Singing for their church family also promotes confidence in public settings, and in their ability to express themselves more fully.
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
export default ChildrensChoir

export const Head = () => <Seo
  title=" Childrens Choir"
  description="A fun, active group of children ages 1st - 5th grade who love to sing or play percussion and hand chimes all to glorify god."
/>
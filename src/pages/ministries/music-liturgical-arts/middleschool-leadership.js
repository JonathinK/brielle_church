import * as React from 'react';
import Layout from '../../../layout/layout';
import Seo from '../../../components/seo';
import { StaticImage } from 'gatsby-plugin-image';
import { Hero, HeroSvgContainer, PageHeroContainer, PageTitle, PageTitleWrapper } from '../../../styles/pagehero';
import { SvgWrapper, Section, MusicMinistryImages, TextWrapper, Headline, Body, ExpectationInfo, GroupsImagesContainer} from '../../../styles'; 
import { Form } from "../../../components/Music-Ministry/Form";
import HeroSvg from "../../../Svg/assets/Alt-Hero-Curve.svg";
import StaffLines from "../../../Svg/assets/StaffLines.svg";
import MusicSvg from "../../../Svg/assets/Music-Svg.svg";




const MiddleSchoolLeadership = () => {
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
          <PageTitle>Middleschool Leadership</PageTitle>
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
          src="../../../images/Music-Ministry/Middle-School.jpg"
          alt="Middle schoolers signing with children"
          className='group_image'
          imgClassName='img_props'
          quality={60}
          webpOptions={{quality:90}}
        />
      </MusicMinistryImages>
      </Section>
      <Section id="About_Our_Group">
      <TextWrapper CenteredWrapper C="5/11" R="1/2" TC="3/9" MC="2/6" >
        <Headline AltColor>About our Choir Leaders</Headline>
        <Body>Join us with many opportunities to assist with the children's choir at rehearsals and liturgies as well as singing lead solos and other music with children's choir, VBS and/or Praise Ensemble.</Body>
      </TextWrapper>
      <GroupsImagesContainer>
        <MusicMinistryImages GroupsImage>
        <div className='overflow_container'>
          <StaticImage
            src="../../../images/Music-Ministry/Leadership-1.jpg"
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
            src="../../../images/Music-Ministry/Leadership-2.jpg"
            layout="fullWidth"
            quality={60}
            webpOptions={{quality:80}}
            className="img"
            imgClassName='img_props'
            alt=""
          />
        </div>
          
        </MusicMinistryImages>
        <MusicMinistryImages GroupsImage>
        <div className='overflow_container'>
          <StaticImage
            src="../../../images/Music-Ministry/Leadership-3.jpg"
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
          <li id="Sing">
            <b><i>SING</i></b> Our middle schoolers help with children’s choir on the 1st and 3rd Sundays of each month. They are also invited to sing with the Praise Ensemble each Sunday. They also lead songs with high energy videos and music during Vacation Bible School week in summer. 
          </li>
          <li id="Rehearse">
            <b><i>REHEARSE</i></b> Our awesome leaders rehearse with the children’s choir on Thursdays 5:15pm - 6:00pm teaching them new songs, how to use the different instruments and practice solos.
          </li>
          <li id="Meet">
            <b><i>MEET</i></b> The middle schoolers meet children on 1st and 3rd Sundays at 9:30am to warm-up their voices and help them practice for the service.  They also sing their solos with Praise Ensemble. 
          </li>
          <li id="Blessing">
            <b><i>BLESSING</i></b> 6th through 8th graders are terrific leaders and need opportunities to practice this much needed community skill.  They earn service hours and develop confidence in front of their peers, bond with each other.  They learn the art of public performance intricacies, microphone use, and vocal projection all while sharing their spirit with the community both young and old, and deepening their faith journey.  Watching them bond with each other and project new courage warms your heart!
          </li>
        </ul>        
      </ExpectationInfo>
      <SvgWrapper R="3/4" C="1/15" TR="3/4" TC="1/11" MC="1/7" MR="3/4" RotateX>
        <MusicSvg/>
      </SvgWrapper>
      </Section>
      <Section id='Form' SectionPadding>
        <Form/>
      </Section>
    </Layout>
  )
}

export default MiddleSchoolLeadership

export const Head = () => <Seo
  title="Music Ministry Leadership"
  description="Join us with many opportunities to assist with the children’s choir at rehearsals and liturgies as well as singing lead solos and other music with children’s choir, VBS and/or Praise Ensemble."
/>
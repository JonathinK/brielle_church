import * as React from 'react';
import Layout from '../../../layout/layout';
import Seo from '../../../components/seo';
import { StaticImage } from 'gatsby-plugin-image';
import { Hero, HeroSvgContainer, PageHeroContainer, PageTitle, PageTitleWrapper } from '../../../styles/pagehero';
import { SvgWrapper, Section, MusicMinistryImages, TextWrapper, Headline, Body,  ExpectationInfo, GroupsImagesContainer } from '../../../styles';
import { Form } from "../../../components/Music-Ministry/Form";
import HeroSvg from "../../../Svg/assets/Alt-Hero-Curve.svg";
import StaffLines from "../../../Svg/assets/StaffLines.svg";
import MusicSvg from "../../../Svg/assets/Music-Svg.svg";



const PraiseEnsemble = () => {
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
          <PageTitle>Praise Ensemble</PageTitle>
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
          src="../../../images/Music-Ministry/Praise-Ensemble.jpg"
          alt="Praise Ensemble"
          className='_image'
          quality={60}
          webpOptions={{quality:90}}
        />

      </MusicMinistryImages>
      </Section>
      <Section id="About_Our_Group">
      <TextWrapper CenteredWrapper C="5/11" R="1/2" TC="3/9" MC="2/6" >
        <Headline AltColor>About Our Group</Headline>
        <Body>Do you play an instrument or like more upbeat music? We welcome any instrumentalist, high school or adult, to join us - guitar, bass, percussion, flute, violin, trumpet, trombone, clarinet/oboe, saxophone etc. 
        <br/>
        Please consider sharing your God given gifts!</Body>
      </TextWrapper>
      <GroupsImagesContainer>
        <MusicMinistryImages GroupsImage>
        <div className='overflow_container'>
          <StaticImage
            src="../../../images/Music-Ministry/Praise-Ensemble-1.jpg"
            layout="fullWidth"
            quality={60}
            webpOptions={{quality:90}}
            className="img"
          />
        </div>
          
        </MusicMinistryImages>
        <MusicMinistryImages GroupsImage>
        <div className='overflow_container'>
          <StaticImage
            src="../../../images/Music-Ministry/Praise-Ensemble-2.jpg"
            layout="fullWidth"
            quality={60}
            webpOptions={{quality:90}}
            className="img"
          />
        </div>
          
        </MusicMinistryImages>
        <MusicMinistryImages GroupsImage>
        <div className='overflow_container'>
          <StaticImage
            src="../../../images/Music-Ministry/Praise-Ensemble-3.jpg"
            layout="fullWidth"
            quality={60}
            webpOptions={{quality:90}}
            className="img"
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
            <b><i>SING/PLAY</i></b> Members play and/or sing each Sunday at 10am Liturgy.  
          </li>
          <li id="Rehearse">
            <b><i>REHEARSE</i></b> No Weekday rehearsal commitment for our Praise Ensemble. Practice is held briefly on Sundays before and sometimes after our liturgy for the following week.
            <br/>
            <span> * Independent preparation at home is required! All music is forwarded in advance.</span>
          </li>
          <li id="Meet">
            <b><i>MEET</i></b>  All members meet at 9:15am for warm-up and review for 10am Sunday Liturgy.
          </li>
          <li id="Blessing">
            <b><i>BLESSING</i></b> Having instrumentation during our service offers a beautiful depth of praise and worship to our balanced liturgy of music. We engage and accompany our assembly in a mix of hymns and contemporary Christian music. Each of our ministers has a <strong>genuine spirit of thankfulness and a heart for worship.</strong>
          </li>
        </ul>        
      </ExpectationInfo>
      <SvgWrapper R="3/4" C="1/15" TR="3/4" TC="1/11" MC="1/7" MR="3/4" RotateX>
        <MusicSvg/>
      </SvgWrapper>
      </Section> 
      <Section id='Form'>
        <Form/>
      </Section>
    </Layout>
  )
}

export default PraiseEnsemble

export const Head = () => <Seo
  title="High School/Adult Praise Ensemble"
  description="Do you play and instrument or like more upbeat music? We welcome any instrumentalist, high school or adult, to join us - guitar, bass, percussion, flute, violin, trumpet, trombone, Clarinet/oboe, saxophone etc.Please consider sharing your God given gifts!"
/>
import * as React from 'react';
import Layout from '../../../layout/layout';
import Seo from '../../../components/seo';
import { StaticImage } from 'gatsby-plugin-image';
//Svg Imports
import HeroSvg from "../../../Svg/assets/Alt-Hero-Curve.svg";
import StaffLines from "../../../Svg/assets/StaffLines.svg";
import MusicSvg from "../../../Svg/assets/Music-Svg.svg";
//Styled Component Imports
import { 
  PageHeroContainer,Hero,PageTitleWrapper,PageTitle,HeroSvgContainer,Subtitle
} from '../../../styles/pagehero';
import{
  MusicMinistryImages,ImageWrapper,Section,SvgWrapper,TextWrapper, Headline,Body,  IframeContainer, SubHeadline
} from "../../../styles";
import{
  VerseContainer,Verse,Proverb
} from "../../../styles/bibleVerses";
import { Groups } from '../../../components/Music-Ministry/Groups';

const MusicPage = () => {
  return(
    <Layout>
    <PageHeroContainer id="Music_Hero">
      <Hero>
      <StaticImage
        src="../../../images/Music-Ministry/Hero.jpg"
        layout='fullWidth'
        alt="Image of choir and music director Dawne"
        quality={60}
        loading='eager'
        placeholder="blurred"
        formats={['webp','auto','jpg']}
        className='heroImage'
        webpOptions={{quality:100}}
      />
      </Hero>
      <PageTitleWrapper>
        <PageTitle>
        Music & 
        <br/>
        Liturgical Arts
        </PageTitle>
        <Subtitle>Empowering all for worship and prayer through a variety of music and the arts</Subtitle>
      </PageTitleWrapper>
      <HeroSvgContainer>
        <HeroSvg/>
      </HeroSvgContainer>
    </PageHeroContainer>
    <Section SectionPadding id="Verse_Intro_Section">
      <ImageWrapper
        Full_Width
        C="1/15"
        R="1/4"
        TC="1/11"
        TR="1/4"
        MC="1/7"
        MR="1/4"
        className='no_overlay'
      >
      <StaticImage
          src="../../../images/Music-Ministry/Piano-Gradient-Background.jpg"
          alt=""
          layout='fullWidth'
          placeholder='blurred'
          quality={50}
          webpOptions={{quality:90}}
          className="background"
      />
      </ImageWrapper>
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
      <VerseContainer>
          <Verse><q>Sing to Him, sing praises to Him; tell of all God's wonderful works!</q></Verse>
          <Proverb>Psalm 105:2</Proverb>
      </VerseContainer>
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
    </Section>
    <Section SectionPadding id="Music_Director_Section">
    <TextWrapper LeftAlignWrapper className='justify' C="3/8" R="1/2" TC="3/9" TR="2/3" MC="2/6" MR="2/3" JS="center" AS="center">
      <Headline AltColor>Giving Through Her Gifts</Headline>
      <Body>Our Director of Music and Liturgical Arts, Dawne, has created a wonderful, safe, and joy-filled environment for everyone that’s involved or interested in our programs. Our music ministry is a diverse group of ages, background, experience and musical knowledge as young as 3 years old through the young at heart in their late 80s. Our musical door welcomes everyone! Experience or music reading not required, just a love of music and Jesus.
      </Body>
    </TextWrapper>
    <MusicMinistryImages MusicDirector className='imageproperties'>
      <StaticImage
          src='../../../images/Our-Staff/Dawne.jpg'
          alt="Dawne - Music Director"
          layout='fullWidth'
          placeholder='blurred'
          quality={60}
          webpOptions={{quality:90}}
          className="image"
        />
    </MusicMinistryImages> 
    </Section>
    <Section SectionPadding id="What_To_Expect_Section">
      <TextWrapper LeftAlignWrapper className='justify' C="8/13" R="1/2" TC="3/9" TR="2/3" MC="2/6" MR="2/3" JS="center" AS="center">
        <Headline AltColor> What To Expect?</Headline>
        <Body>Each choir rehearsal encompasses the art of learning some music theory <b><q>our roadmap</q> </b>, making beautiful vocal harmony <b><q>our goal</q></b> while sharing laughter and love with each other <b><q> the best part!</q></b>. We are blessed to have our choirs share their gifts at our liturgies regularly.  </Body>
      </TextWrapper>
      <MusicMinistryImages WhatToExpect className='imageproperties'> 
        <StaticImage
          src="../../../images/Music-Ministry/What_To_Expect.jpg"
          alt="Choir members "
          layout='fullWidth'
          placeholder='blurred'
          quality={60}
          webpOptions={{quality:90}}
          className="image"
        />
      </MusicMinistryImages>
    </Section>
    <Section Section Padding id="Music_Groups">
      <SvgWrapper R="1/2" C="1/15" TR="1/2" TC="1/11" MC="1/7" MR="1/2" JS="center" AS="end" MusicNotesSvg >
        <MusicSvg/>
      </SvgWrapper>
      <Groups/>
      <SvgWrapper R="3/4" C="1/15" TR="3/4" TC="1/11" MC="1/7" MR="3/4" MusicNotesSvg RotateX>
        <MusicSvg/>
      </SvgWrapper>
    </Section>
    <Section Section Padding id="Bringing_Joy">
    <TextWrapper R="1/2" C="3/13" TR="1/2" TC="2/10" MC="2/6" MR="1/2" CenteredWrapper>
    <SubHeadline className='padding'>We look forward to meeting you, sharing beautiful music together to inspire others and welcoming you into our wonderful choir family!
    </SubHeadline>
    </TextWrapper>
      <TextWrapper R="2/3" C="2/7" TC="2/10" TR="3/4" MC="2/6" MR="3/4" LeftAlignWrapper JS="center" AS="center">
        <Headline>Bringing joy to the community through music</Headline>
        <Body>We are a very active ministry at The Church In Brielle as well as within the community and other local churches including Manasquan Ministerium. We are blessed to say we were featured in the Coast Star for our outdoor Battle Hymn sing during covid when many weren’t able to sing together, God paved a way.  Also we host annual Hymn Sing events and caroling. We are always open to the community and welcome all to join us. Music is a passion we all can share in the eyes of God and for His glory.</Body>
      </TextWrapper>
      <IframeContainer R="2/3" C="8/14" TR="2/3" TC="2/10" MC="2/6" MR="2/3" >
      <iframe
         src="https://www.youtube.com/embed/ThnitPpyh90" 
        title="Battle Hymn of the republic video"
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      />
      </IframeContainer>
    </Section>
    <Section SectionPadding id="Verse_Intro_Section">
      <ImageWrapper
        Full_Width
        C="1/15"
        R="1/4"
        TC="1/11"
        TR="1/4"
        MC="1/7"
        MR="1/4"
        className='no_overlay'
      >
      <StaticImage
          src="../../../images/Music-Ministry/Piano-Gradient-Background.jpg"
          alt=""
          layout='fullWidth'
          placeholder='blurred'
          quality={50}
          webpOptions={{quality:90}}
          className="background"
      />
      </ImageWrapper>
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
      <VerseContainer>
          <Verse>
          <q>It is well, it is well with my soul</q>
          <br/>
          <q>Praise the Lord, Praise the Lord, O my soul!
          <br/>
          Even so - it is well with my soul.
          </q>
          </Verse>
      </VerseContainer>
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
    </Section>
    </Layout>
  )
}
export default MusicPage

export const Head = () => <Seo
  title="Music & Liturgical Arts"
  description="Our wonderful music director, Dawne, runs a very warming, open and joy-filled music ministry. No experience is required, just the love of making music in the name of God."
/>
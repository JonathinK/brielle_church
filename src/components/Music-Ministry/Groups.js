import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { GroupsImagesContainer, InternalLink, MusicMinistryImages,Headline, MusicGroupsContainer, Body, TextWrapper, SubTitle} from '../../styles';

export const Groups = () => {
  return(
    <MusicGroupsContainer id="Music_Choirs_Ensembles">
      <TextWrapper CenteredWrapper C="4/12" R="1/2" TC="2/10" MC="2/6">
      <Headline>Music Choirs & Ensembles</Headline>
      <Body>If you seek more information about our Music Choirs, Ensembles or our Liturgical Dance, please click on the corresponding one.</Body>
      </TextWrapper>
      <GroupsImagesContainer>
        <MusicMinistryImages GroupsImage id="Chancel_Choir">
        <div className='overflow_container'>
          <InternalLink to="chancel-choir">
            <StaticImage
              src='../../images/Music-Ministry/Chancel-Choir.jpg'
              alt='Chancel Choir posing for picture'
              aspectRatio={"3/2"}
              placeholder='blurred'
              layout='fullWidth'
              quality={60}
              webpOptions={'quality:90'}
              className="img"
            />
          </InternalLink>
          <div className='group_title'><SubTitle>Chancel Choir</SubTitle></div>
        </div>
        </MusicMinistryImages>
        <MusicMinistryImages GroupsImage id="Handbell_Choir">
        <div className='overflow_container'>
          <InternalLink to="handbell-choir">
            <StaticImage
              src='../../images/Music-Ministry/Handbell-Choir.jpg'
              alt='Handbell Choir posing for picture'
              aspectRatio={"3/2"}
              placeholder='blurred'
              layout='fullWidth'
              quality={60}
              webpOptions={'quality:90'}
              className="img"
            />
          </InternalLink>
          <div className='group_title'><SubTitle>Handbell Choir</SubTitle></div>
        </div>
        </MusicMinistryImages>
        <MusicMinistryImages GroupsImage id="Praise_Ensemble">
        <div className='overflow_container'>
          <InternalLink to="praise-ensemble">
            <StaticImage
              src='../../images/Music-Ministry/Praise-Ensemble.jpg'
              alt='Praise Ensemble posing for picture'
              aspectRatio={"3/2"}
              placeholder='blurred'
              layout='fullWidth'
              quality={60}
              webpOptions={'quality:90'}
              className="img"
            />
          </InternalLink>
          <div className='group_title'><SubTitle>Praise Ensemble</SubTitle></div>
        </div>
        </MusicMinistryImages>
        <MusicMinistryImages GroupsImage id="Childrens_Choir">
        <div className='overflow_container'>
          <InternalLink to="childrens-choir">
            <StaticImage
              src='../../images/Music-Ministry/Childrens-Choir.jpg'
              alt='Children posing for picture with Dawne'
              aspectRatio={"3/2"}
              placeholder='blurred'
              layout='fullWidth'
              quality={60}
              webpOptions={'quality:90'}
              className="img"
            />
          </InternalLink>
          <div className='group_title'><SubTitle>Childrens Choir</SubTitle></div>
        </div>
        </MusicMinistryImages>
        <MusicMinistryImages GroupsImage id="Liturgical_Dance">
        <div className='overflow_container'>
          <InternalLink to="liturgical-dance">
            <StaticImage
              src='../../images/Music-Ministry/Liturgical-Dance.jpg'
              alt='Girls dancing to music of God in sanctuary'
              aspectRatio={"3/2"}
              placeholder='blurred'
              layout='fullWidth'
              quality={60}
              webpOptions={'quality:90'}
              className="img"
            />
          </InternalLink>
          <div className='group_title'><SubTitle>Liturgical Dance</SubTitle></div>
        </div>
        </MusicMinistryImages>
        <MusicMinistryImages GroupsImage id="Leadership">
        <div className='overflow_container'>
          <InternalLink to="middleschool-leadership">
            <StaticImage
              src='../../images/Music-Ministry/Middle-School.jpg'
              alt='Middle School Leadership helping young new singers'
              aspectRatio={"3/2"}
              placeholder='blurred'
              layout='fullWidth'
              quality={60}
              webpOptions={'quality:90'}
              className="img"
            />
          </InternalLink>
          <div className='group_title'><SubTitle>Middleshool Leadership</SubTitle></div>
        </div>
        </MusicMinistryImages>
      </GroupsImagesContainer>
    </MusicGroupsContainer>
 
  )
}
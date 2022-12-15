import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { GroupsImagesContainer, InternalLink, MusicMinistryImages,Headline } from '../../styles';

export const Groups = () => {
  return(
    <GroupsImagesContainer>
      <MusicMinistryImages id="Chancel_Choir" GroupsImage>
      <InternalLink to="chancel-choir">
        <StaticImage
          src="../../images/Music-Ministry/Chancel-Choir.jpg"
          alt="Chancel Choir"
          className='img_holder'
          imgClassName='img'
          aspectRatio={"3/2"}
        />
      <div className='group_overlay'><Headline WhiteColor>Chancel</Headline></div>
      </InternalLink>
      </MusicMinistryImages>
      <MusicMinistryImages id="Handbell_Choir" GroupsImage>
        <InternalLink to="handbell-choir">
          <StaticImage
            src="../../images/Music-Ministry/Handbell-Choir.jpg"
            alt="Handbell Choir"
            aspectRatio={"3/2"}
            className="img_holder"
            imgClassName='img'
          />
          <div className='group_overlay'><Headline WhiteColor>Handbell</Headline></div>
        </InternalLink>
      </MusicMinistryImages>
      <MusicMinistryImages id="Praise_Ensemble" GroupsImage>
        <InternalLink to="praise-ensemble">
          <StaticImage
            src="../../images/Music-Ministry/Praise-Ensemble.jpg"
            alt="Praise-Ensemble"
            aspectRatio={"3/2"}
            className="img_holder"
            imgClassName='img'
          />
        <div className='group_overlay'><Headline WhiteColor>Praise</Headline></div>
        </InternalLink>
      </MusicMinistryImages>
      <MusicMinistryImages id="Childrens_Choir" GroupsImage>
        <InternalLink to="childrens-choir">
          <StaticImage
            src="../../images/Music-Ministry/Childrens-Choir.jpg"
            alt=""
            aspectRatio={"3/2"}
            className="img_holder"
            imgClassName='img'
          />
          <div className='group_overlay'><Headline WhiteColor>Children's</Headline></div>
        </InternalLink>
      </MusicMinistryImages>
      <MusicMinistryImages id="Liturgical_Dance_Team" GroupsImage>
        <InternalLink to="liturgical-dance">
          <StaticImage
            src="../../images/Music-Ministry/Liturgical-Dance.jpg"
            alt="Liturgical Dance Team"
            aspectRatio={"3/2"}
            className="img_holder"
            imgClassName='img'
          />
        <div className='group_overlay'><Headline WhiteColor>Dance</Headline></div>
        </InternalLink>
      </MusicMinistryImages>
      <MusicMinistryImages id="Middle_School_Leadership" GroupsImage>
        <InternalLink to="middleschool-leadership">
          <StaticImage
            src="../../images/Music-Ministry/Middle-School.jpg"
            alt="Middle School Leadership"
            aspectRatio={3/2}
            className="img_holder"
            imgClassName='img'
          />
        <div className='group_overlay'><Headline WhiteColor>Leadership</Headline></div>
        </InternalLink>
      </MusicMinistryImages>
    </GroupsImagesContainer>
  )
}
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
//Styles
import { StaffWrapper } from '../../styles/Staff';
import { 
  AltSubTitle, 
  ImageWrapper, 
  OutsideLink, 
  TextWrapper,
  SubTitle,
  SubHeadline,
  Button } from '../../styles';


export const StaffMember = (props) => {
  return(
    <>
      <StaffWrapper
      className={props.staffclass}>
          <ImageWrapper
            StaffPhoto
            className='photo-subset'
            Shadow
            >
            <GatsbyImage
              image={props.imagedata}
              alt=""  
            />
          </ImageWrapper>
          <TextWrapper StaffTextWrapper>
          <SubHeadline>{props.name}</SubHeadline> 
          <SubTitle>{props.position}</SubTitle>
          <AltSubTitle>{props.title}</AltSubTitle>
          <Button
            className={props.class}
            type="button"
          >
            <OutsideLink href={props.emailto}>{props.email}
            </OutsideLink>
          </Button>
        </TextWrapper>
      </StaffWrapper>
    </>
  )
}
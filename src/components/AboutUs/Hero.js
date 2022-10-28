import * as React from 'react';
import { StaticImage } from "gatsby-plugin-image";
//Svg Imports
import TopSvg from "../../Svg/assets/Svg-1.svg";
import BottomSvg from "../../Svg/assets/Svg-2.svg";

//Style Imports
import { 
  HeroImage, 
  HeroSection, 
  HeroSvg,
  HeroTitleContainer,
  PageTitle,
  AltPageTitleText
} from '../../styles/HeroSection';



export const Hero = () => {
  return(
    <HeroSection>
      <HeroImage>
       <StaticImage
        src="../../images/About-Us/Hero.jpg"
        layout='fullWidth'
        className='heroBg'
        alt="Side of Church"
        formats={['auto','jpg','webp']}
        quality={50}
        loading='eager'
        placeholder='blurred'
       />
      </HeroImage>
      <HeroTitleContainer>
        <PageTitle>About Us</PageTitle>
        <AltPageTitleText>We are <strong>Passionate</strong> about <strong>Jesus</strong></AltPageTitleText>
      </HeroTitleContainer>
      <HeroSvg BottomNoOpacity><BottomSvg/></HeroSvg>
      <HeroSvg Top><TopSvg/></HeroSvg>
    </HeroSection>
  )
}
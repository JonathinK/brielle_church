import React,{useEffect,useState, useRef} from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { LogoWrapper, NavigationBar } from './Styles';
import { Desktop } from './components/Desktop';
import { Mobile } from './components/Mobile';
import { InternalLink } from '../../styles';


const Navigation = () => {
  
  return(
    <NavigationBar>
      <LogoWrapper>
      <InternalLink to="/">
        <StaticImage
          src="../../images/Logo-Text.png"
          layout="constrained"
          alt="Church Logo"
          quality={100}
          width={200}
        />
      </InternalLink>
      </LogoWrapper>
      <Desktop/>
      <Mobile/>
    </NavigationBar>
  )
}
export default Navigation
import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { LogoWrapper, NavigationBar } from './Styles';
import { Desktop } from './Components/Desktop';
import { Mobile } from './Components/Mobile';
import { InternalLink } from '../../styles';


const Navigation = () => {
  return(
    <NavigationBar>
      <LogoWrapper>
      <InternalLink to="/">
        <StaticImage
          src="../../images/Logo-Text.png"
          layout="constrained"
          alt=""
          quality={100}
          width={150}
        />
      </InternalLink>
      </LogoWrapper>
      <Desktop/>
      <Mobile/>
    </NavigationBar>
  )
}
export default Navigation
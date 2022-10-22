import * as React from 'react';
//Theme Imports
import { ThemeProvider } from 'styled-components';
import { Theme } from "../themes/Theme";

//Page Imports
import { GlobalStyles } from "../styles/Global";
import  Navigation  from "../layout/Navigation/Navigation-Bar";
import  PageFooter  from "../layout/Footer/Footer";
import { ParallaxWrapper } from "../styles/ParallaxWrapper.styled";

const Layout = ({children}) => {
  return(
    <ThemeProvider theme={Theme}>
      <>
      <GlobalStyles/>
        <Navigation/>
        <ParallaxWrapper>
          {children}
          <PageFooter/>
        </ParallaxWrapper>
      </>
    </ThemeProvider>
  )
}
export default Layout
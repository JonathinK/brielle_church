import * as React from 'react';
//Theme Imports
import { ThemeProvider } from 'styled-components';
import { Theme } from "../themes/Theme";

//Page Imports
import { GlobalStyles } from "../styles/Global";
import  Navigation  from "./Navigation/Navigation-Bar";
import   PageFooter from "./Footer/Footer";
import { ParallaxWrapper } from "../styles/ParallaxWrapper.styled";
import "../Fonts/fonts.css";

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
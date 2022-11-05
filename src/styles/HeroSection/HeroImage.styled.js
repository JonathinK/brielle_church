import styled from "styled-components";

export const HeroImage = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 15;
  height:100vh;
  width:100%;
  position:relative;
  overflow:hidden;
  transform:translateZ(-10px) scale(2.1);
  
  .heroBg{
    position:absolute;
    width:100%;
    height:100%;
  }
  :before{
    content:'';
    position:absolute;
    width:100%;
    height:100%;
    z-index:2;
    background:rgba(0,0,0,.3);
  }

  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column:1/12;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column:1/7;
    
  }
  &.homepage_hero{
    grid-row:1/4;
  }
`
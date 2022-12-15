import styled from "styled-components";

export const PageHeroContainer = styled.header`
  display:grid;
  grid-auto-rows:auto;
  grid-template-columns: minmax(8em,1fr) repeat(4,minmax(auto,13em)) minmax(8em,1fr);
  width:100%;
  height:auto;
  position:relative;
  transform-style:preserve-3d;
  z-index:-1;
  
  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-template-columns: minmax(4em,1fr) repeat(4,minmax(auto,13em)) minmax(4em,1fr);
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-template-columns: minmax(2em,1fr) repeat(4,minmax(auto,13em)) minmax(2em,1fr);
  }
`

export const Hero = styled.div`
  grid-row:1/4;
  grid-column:1/8;
  width:100%;
  min-height:100vh;
  position:relative;
  overflow:hidden;
  transform:translateZ(-10px) scale(2.05);
  
  &.image_blur{
    filter:blur(2px);
  }
  .heroImage{
    position:absolute;
    width:100%;
    height:100%;
  }

  @media ${({theme}) => theme.breakpoints.tablet}{
    min-height:100vh;
    transform:translateZ(-5px) scale(1.5);
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    min-height:100vh;
    transform:translateZ(-5px) scale(1.5);
  }
` 

export const PageTitleWrapper = styled.div`
  grid-row: 1/3;
  grid-column: 2/6;
  position:relative;
  justify-self:center;
  align-self:end;
  display:flex;
  flex-flow:column nowrap;
  gap:1.5rem;
  
  @media ${({theme}) => theme.breakpoints.mobile}{

  }
`

export const HeroSvgContainer = styled.div`
  grid-row:3/4;
  grid-column:1/8;
  height:clamp(3em,9vw,7.625em);
  width:100%;
  justify-self:center;
  align-self:end;
  position:relative;
  z-index:1;

  svg{
    width:100%;
    height:100%;
    position:relative;
  }
`
import styled from "styled-components";

export const VerseContainer = styled.div`
  grid-column:3/13;
  grid-row:2/3;
  display:flex;
  flex-flow:column nowrap;
  justify-content:center;
  align-items:center;
  height:auto;
  margin:2rem 0;
  position:relative;
  z-index:2;
  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column:2/10;
  } 
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column:2/6;
    margin:1rem 0;
  }

`
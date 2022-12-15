import styled from "styled-components";

export const IframeContainer = styled.div`
  
  grid-column:${props => props.C};
  grid-row:${props => props.R};
  width:100%;
  position:relative;
  overflow:hidden;
  padding-top:56.25%;
  

  @media ${({theme}) => theme.breakpoints.tablet}{
  grid-column:${props => props.TC};
  grid-row:${props => props.TR};
  margin-bottom:2em;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
  grid-column:${props => props.MC};
  grid-row:${props => props.MR};
  }

  iframe{
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    bottom:0;
    right:0;
    border:none;
  }
`
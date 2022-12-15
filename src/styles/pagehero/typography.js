import styled from "styled-components";

export const PageTitle = styled.h1`
  font-family: ${({theme}) => theme.fonts.main};
  font-weight: 400;
  font-size: clamp(3em,15vw,8em);
  letter-spacing:.05em;
  line-height:100%;
  text-align:center;
  color:${({theme}) => theme.colors.white};
  text-shadow: 0px 0px 5px black;
`
export const Subtitle = styled.h4`
  font-size:clamp(1.135em,3vw,2.250em);
  font-weight:medium;
  color:${({theme}) => theme.colors.white};
  text-shadow:0px 0px 5px black;
  text-align:center;
`
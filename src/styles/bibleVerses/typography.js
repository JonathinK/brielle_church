import styled from "styled-components";

export const Verse = styled.p`
  font-size:clamp(1.1em, 3vw, 1.5em);
  font-weight:bold;
  color:${({theme}) => theme.colors.darkText};
  text-align:center;
`
export const Proverb = styled.p`
  font-size:1rem;
  color:${({theme}) => theme.colors.darkText};
`
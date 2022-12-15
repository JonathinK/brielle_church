import styled from "styled-components";

export const MusicGroupsContainer = styled.div`
  display:flex;
  flex-flow:column nowrap;
  justify-content:center;
  align-items:center;
  grid-column:4/12;
  grid-row:2/3;
  justify-self:center;
  align-self:center;
  position:relative;
  padding:2rem 0;

  @media ${({theme}) => theme.breakpoints.tablet}{
  grid-column:2/10;
  grid-row:2/3;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
  grid-column:2/6;
  grid-row:2/3; 
  padding:2rem 0;
  }

  p{
    text-align:center;
  }

  :before{
    background:${({theme}) => theme.colors.accent};
    content:'';
    position:absolute;
    width:100vw;
    height:100%;
    z-index:-1;
  }
`
export const GroupsImagesContainer = styled.div`
  display:flex;
  flex-flow:row wrap;
  justify-content:center;
  align-items:stretch;
  width:100%;
  gap:2rem;
  padding:2rem 0;
`
export const ExpectationInfo = styled(MusicGroupsContainer)`
  padding:2rem 0;
  ul{
    display:flex;
    flex-flow:column nowrap;
    justify-content:center;
    align-items:start;
    gap:1rem 0;
    padding:1rem;
    color:black;
    
    li{
      list-style: upper-roman inside;

      span{
        padding-left:1rem;
      }
    }
  }
`
import styled from "styled-components";

export const MusicGroupsContainer = styled.div`
  display:grid;
  grid-template-columns: minmax(2rem,auto) repeat(12,minmax(auto,8.5rem))minmax(2rem,auto);
  grid-auto-row:auto;
  grid-row:2/3;
  grid-column:1/15;
  width:100%;
  height:auto;
  position:relative;
  background:${({theme}) => theme.colors.accent};
  padding:3rem 0;

  @media ${({theme}) => theme.breakpoints.tablet}{
  grid-column:1/11;
  grid-template-columns: minmax(3rem,1fr) repeat(8,minmax(3rem,8rem)) minmax(3rem,1fr);
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
  grid-column:1/7;
  grid-template-columns: minmax(1rem,1fr) repeat(4,minmax(auto,9rem)) minmax(1rem,1fr);
  padding: 3rem 0 0 0;
  }
`
export const GroupsImagesContainer = styled.div`
  grid-row:2/3;
  grid-column:4/12;
  height:auto;
  display:flex;
  flex-flow:row wrap;
  justify-content:center;
  align-items:center;
  gap:2rem;
  width:100%;
  padding:3rem 0 4rem 0;

  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column:2/10;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column:2/6;
  }
`
export const ExpectationInfo = styled(MusicGroupsContainer)`
  padding:2rem 0;
  display:flex;
  flex-flow:column nowrap;
  justify-content:center;
  align-items:center;

  ul{
    display:flex;
    flex-flow:column nowrap;
    justify-content:center;
    align-items:start;
    gap:1rem 0;
    padding:1rem 3rem;
    color:black;
    width:clamp(400px,100%,912px);
    
    strong{
      font-size:clamp(1.1rem,4vw,1.125rem);
      font-weight:${({theme}) => theme.fontWeight.medium};
    }
    
    li{
      span{
        padding-left:1rem;
      }
    }
  }
`
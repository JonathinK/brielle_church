import styled,{css} from "styled-components";

//Image Holder that contains styles for all images on page
//Each page will be separated by it's variable with template literals for each image inside


//Music Ministry Page & Group Page Images
export const MusicMinistryImages = styled.div`
  .image{
    position:absolute;
    width:100%;
    height:100%;
    border-radius:10px;
    border-collapse:separate;
    box-shadow: 0px 20px 15px -5px rgba(0,0,0,.2);  
  }

  &.imageproperties{
    height:clamp(260px,25vw,501px);
    width:90%;
    border-radius:10px;
    border-collapse:separate;
  
    @media ${({theme}) => theme.breakpoints.tablet}{
    height:clamp(300px,50vw,500px);
    margin-bottom:2rem;
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
    height:clamp(250px,30vw,500px);
    width:80%;
    justify-self:center;
    }
  }
${props => props.KeyboardBackground && css`
  grid-row:;
  grid-column:;
  width:100%;
  height:auto;
  position:relative;

  .background{
    height:100%;
    width:100%;
    position:absolute;
  }
  @media ${({theme}) => theme.breakpoints.tablet}{

  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    
  }
`}

${props => props.MusicDirector && css`
  grid-column:9/13;
  grid-row:1/2;
  position:relative;
  border-radius:10px;
  border-collapse:separate;
  
  :before{
    content:'';
    position:absolute;
    background:${({theme}) => theme.colors.accent};
    height:100%;
    width:100%;
    transform:translateY(-30px) translateX(-30px);
    border-radius:10px;
    border:5px solid ${({theme}) => theme.colors.accent};
    box-shadow: 0px 0px 20px 5px rgba(0,0,0,.2) inset;
  }
  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column:3/9;
    grid-row:1/2;  
    :before{
      transform:translateY(-30px) translateX(30px);
    }
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column:2/6;
    grid-row:1/2;
    justify-self:start;
    align-self:start;
    :before{
      transform:translateY(-30px) translateX(20px);
    }
`}

${props => props.WhatToExpect && css`
  position:relative;
  grid-row:1/2;
  grid-column:3/7;
  border-radius:10px;
  border-collapse:separate;
  :before{
    content:'';
    position:absolute;
    background:${({theme}) => theme.colors.accent};
    height:100%;
    width:100%;
    transform:translateY(30px) translateX(30px);
    border-radius:10px;
    border:5px solid ${({theme}) => theme.colors.accent};
    box-shadow: 0px 0px 20px 5px rgba(0,0,0,.2) inset;
  }
  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column:3/9;
    grid-row:1/2;
    justify-self:start;
    align-self:start;
    :before{
      transform:translateY(-30px) translateX(20px);
    }
}
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column:2/6;
    grid-row:1/2;
    :before{
      transform:translateY(-30px) translateX(20px);
    }
  }
`}

${props => props.GroupPageImage && css`
  grid-column:5/11;
  grid-row:1/4;
  position:relative;
  z-index:2;
  height:75%;
  width:100%;
  justify-self:center;
  align-self:center;
  border-radius:10px;
  box-shadow:0px 0px 20px 10px rgba(0,0,0,.2);
  overflow:hidden;
  
  .group_image{
    position:absolute;
    width:100%;
    height:100%;
    border-radius:10px;
  }

  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column:3/9;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column:2/6;
  }
`} 
${props => props.GroupsImage && css`
  flex:1 0 auto;
  width:30%;
  max-width:100%;
  min-width:250px;
  border-radius:10px;
  border-collapse:separate;
  box-shadow:0px 20px 20px -10px rgba(0,0,0,.3);
  transition:all .5s ease-in-out;
  background:${({theme}) => theme.colors.accent};

  .overflow_container{
    overflow:hidden;
    border-radius:10px;
    border-collapse:separate;
    position:relative;
    aspect-ratio:4/3;
    width:100%;
    height:100%;
    
    .img{
      position:absolute;
      width:100%;
      height:100%;
      transition:all .5s ease-in-out;
      border-radius:10px;
      border-collapse:separate;
      overflow:hidden;
      transform:scale(1.03);
    }
    :hover .img{
      filter:grayscale(100%) blur(1px);
    }
  }

  /*Title div that slides in on hover*/
  .group_title{
    position:absolute;
    width:100%;
    height:20%;
    top:0;
    display:flex;
    justify-content:center;
    align-items:center;
    background:${({theme}) => theme.colors.accent};
    transform: scaleX(1.05) translateY(-500px);
    transition: transform .5s ease-in-out;
    
    @media ${({theme}) => theme.breakpoints.noHover}{
      transform:none;
      width:80%;
      margin: 0 auto;
      right:0;
      left:0;
      top:75%;
      border-radius:10px;
      box-shadow:0px 0px 5px rgba(0,0,0,.8) inset;
    }
  }
  :hover{
    box-shadow:none;
  }
  :hover .group_title{
    transform:translateY(0);
    transition:transform .5s ease-in-out;
    box-shadow: 0px -5px 5px rgba(0,0,0,.2) inset;
  }
  
  
  @media ${({theme}) => theme.breakpoints.tablet}{
    height:50%;
    max-height:250px;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    
  }
`}
`


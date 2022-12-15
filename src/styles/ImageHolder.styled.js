import styled,{css} from "styled-components";

//Image Holder that contains styles for all images on page
//Each page will be separated by it's variable with template literals for each image inside
//Universal Styles will only be for shadows and Full Width Properties that do not affect individual images
//Everything will labeled correctly for readability within block comments


//Music Ministry Page Images
export const MusicMinistryImages = styled.div`

  .image{
    position:absolute;
    width:100%;
    height:100%;
    border-radius:30px;
    box-shadow: 0px 20px 15px -5px rgba(0,0,0,.2);  
  }

  &.imageproperties{
    height:clamp(260px,25vw,501px);
    width:100%;

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
  :before{
    content:'';
    position:absolute;
    background:${({theme}) => theme.colors.accent};
    height:100%;
    width:100%;
    transform:translateY(-30px) translateX(-30px);
    border-radius:30px;
    border:5px solid ${({theme}) => theme.colors.accent};
    box-shadow: 0px 0px 20px 5px rgba(0,0,0,.2) inset;
  }
  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column:3/9;
    grid-row:1/2;   
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column:2/6;
    grid-row:1/2;
    :before{
      transform:translateY(-15px) translateX(-20px);
    }
`}

${props => props.WhatToExpect && css`
  position:relative;
  grid-row:1/2;
  grid-column:3/7;
  :before{
    content:'';
    position:absolute;
    background:${({theme}) => theme.colors.accent};
    height:100%;
    width:100%;
    transform:translateY(30px) translateX(30px);
    border-radius:30px;
    border:5px solid ${({theme}) => theme.colors.accent};
    box-shadow: 0px 0px 20px 5px rgba(0,0,0,.2) inset;
  }
  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column:3/9;
    grid-row:1/2;
    :before{
      transform:translateY(-30px) translateX(20px);
    }
}
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column:2/6;
    grid-row:1/2;
    :before{
      transform:translateY(-15px) translateX(15px);
    }
  }
`}

${props => props.GroupImage && css`
  grid-column:5/11;
  grid-row:1/4;
  position:relative;
  z-index:2;
  height:70%;
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
  }

  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column:3/9;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column:2/6;
  }
`}
${props => props.GroupsImage && css`
  width:30%;
  max-width:90%;
  min-width:250px;
  position:relative;
  aspect-ratio:3/2;
  border-radius:10px;
  flex:1;
  flex-basis:0;
  
  @media ${({theme}) => theme.breakpoints.tablet}{
    width:40%;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
  }
  @media ${({theme}) => theme.breakpoints.hover}{
   
    .group_overlay{ 
      display:flex;
      flex-flow:column nowrap;
      justify-content:center;
      align-items:center;
      background:rgba(0,0,0,.0);
      width:100%;
      height:35%;
      position:absolute;
      z-index:2;
      bottom:0;
      border-radius:0px 0px 10px 10px;
      transition:all .5s ease-in-out;
      overflow:hidden;
      pointer-events:none;
      h3{
        transform:translateY(60px);
        transition:transform .5s ease-in-out;
      }
    }
    :hover .group_overlay{
      background:rgba(0,0,0,.2);
      h3{
        transform:translateY(0px);
      }
    }
  } 
  @media ${({theme}) => theme.breakpoints.noHover}{
   
    .group_overlay{ 
      display:flex;
      flex-flow:column nowrap;
      justify-content:center;
      align-items:center;
      background:rgba(0,0,0,.2);
      width:100%;
      height:35%;
      position:absolute;
      z-index:2;
      bottom:0;
      border-radius:0px 0px 10px 10px;
      transition:all .5s ease-in-out;
      overflow:hidden;
      pointer-events:none;
     
    }
  } 

  .img_holder{
    position:absolute;
    width:100%;
    height:101%;
    overflow:hidden;
    border-radius:10px;
    box-shadow:0px 10px 10px rgba(0,0,0,.2);
    
    @media ${({theme}) => theme.breakpoints.hover}{
      .img{ 
        transition:all .5s linear;
        :hover{
          transform:scale(1.1);
          filter:grayscale(100%);   
        }
      }  
    }
  }
`}
`

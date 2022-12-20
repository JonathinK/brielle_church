import styled,{css} from "styled-components";

export const SvgWrapper = styled.div`
  grid-column:${props => props.C};
  grid-row: ${props => props.R};
  justify-self:${props => props.JS};
  align-self:${props => props.AS}; 
    svg{
      width:100%;
      height:100%;
    }

  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column:${props => props.TC};
    grid-row: ${props => props.TR};
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column:${props => props.MC};
    grid-row: ${props => props.MR};
  }

  ${props => props.Rotate && css`
    transform:rotateY(180deg);
  `}
  ${props => props.RotateX && css`
    transform:rotateX(180deg) translateY(2px);
  `}
  ${props => props.Flip && css`
    transform:rotateZ(180deg) translateY(1px);
    position:relative;
    top:0;
    font-size:0;
  `}
  ${props => props.Position && css`
    margin-top:16rem;
    @media ${({theme}) => theme.breakpoints.mobile}{
      margin-top:8rem;
    }
  `}

  ${props => props.HeroSvg && css`
    width:clamp(20em,50vw,100%);
    position:relative;

    
    svg{
      fill:${({theme}) => theme.colors.body};
      width:100%;
      filter:drop-shadow(0 0 5px black);

    }
    &.homepage{
      width:100%;
      height:10vh;
      position:relative;
      z-index:2;
      svg{
        filter:none;
      }

    }
    @media ${({theme}) => theme.breakpoints.tablet}{
      width:100%;
    }
  `}

  ${props => props.StaffSvg && css`
    width:100%;
    margin:0;
    height:clamp(100px,20vw,338px);
    position:relative;
    font-size:0;

    svg{
      height:100%;
      width:100%;
    }

    @media ${({theme}) => theme.breakpoints.mobile}{
        svg{
          height:100px;
        }
    }
  `}

  ${props => props.StaffLines && css`
    position:relative;
    z-index:2;

    svg{
      height:100%;
      width:100%;
    }
  `}
  ${props => props.MusicNotesSvg && css`
    position:relative;
    width:100%;
    height:100%;
    font-size:0;
    bottom:-1px;

    svg{
      width:100%;
      height:100%;
    }
  `}
`
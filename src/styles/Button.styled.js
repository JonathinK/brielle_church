import styled,{css} from "styled-components";

export const Button = styled.button`
  font-size: clamp(.6em,1vw,.812em);
  font-weight:${({theme}) => theme.fontWeight.bold};
  letter-spacing: 1.25px;
  text-transform:uppercase;
  background:${({theme}) => theme.colors.accent};
  color:${({theme}) => theme.colors.darkText};
  border:none;
  border-radius:5px;
  margin-top:1.5rem;
  transition: box-shadow .4s ease-in-out;
  position:relative;
  z-index:2;
  cursor:pointer;

  :hover{
    box-shadow: 0px 20px 15px -10px rgba(155,155,155,.5);
    transition: box-shadow .4s ease-in-out;
  }
  :focus{
    border:2px solid ${({theme}) => theme.colors.header};
    box-shadow: 0px 20px 15px -10px rgba(155,155,155,.5);
    transition: box-shadow .4s ease-in-out;
  }

  &.no-display{
    display:none;
  }

  ${props => props.WhiteButton && css`
    background:${({theme}) => theme.colors.body};
    color:${({theme}) => theme.colors.header};
    padding:1.4rem 1.4rem;
    :hover{
      box-shadow: 0px 20px 15px -10px rgba(155,155,155,.5);
    }
    :focus{
      border:2px solid ${({theme}) => theme.colors.header};
      box-shadow: 0px 20px 15px -10px rgba(155,155,155,.5);
    }
  `}
`
import styled from "styled-components";


export const Button = styled.button`


`
export const Menu = styled.nav`


`
export const MenuButton = styled.button`

`
export const Header = styled.nav`
background-color: white;
color: #ee82ee;
text-align: center;
font-family: cursive;
height: 30px;
padding: 10px;


`;

export const Ul = styled.ul`
 list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;

`;

export const Li = styled.li`
    display: inline;
    margin-right: 10px;
`;

export const A = styled.a`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  &:hover{
    background-color: #111;
 }

`;

export const ContentSearchHinos = styled.div`
margin: 25%;
margin-top: 8%;

 @media (max-width: 768px) {
    margin: 15%;
    margin-top: 20%;
  }

`;
export const ContentSearchListHinos = styled.div`
margin: 10%;
margin-top: 0;

scroll-margin-bottom: 30px;


@media (max-width: 768px) {
    margin: 2%;
    
  }


`
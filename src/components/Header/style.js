import styled from 'styled-components'

export const Container = styled.div`
/* position: fixed; */
display: flex;
padding: 20px 50px;
`;
export const Card = styled.div`
width: 50%;
height: 100%;
display: flex;

color: blue;
font-size: ${({f})=>f? "18px" :""};
font-weight: ${({f})=>f? "bold" :""} ;
`
export const Logo = styled.div`
     cursor: pointer;
`

export const Link = styled.div`

 :hover{
     transform: scale(1.2);
     cursor: pointer;
 }
`
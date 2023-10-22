import { experimentalStyled } from '@mui/material';
import styled from 'styled-components'

export const Typographyy = styled.h1`
font-family: 'Lato', sans-serif;
font-family: 'Roboto', sans-serif;
`
export const Wrapper = styled.section`
  width:100%;
  height: 100vh;
  padding-top: 80px;
  background: white;
`;

export const ContentBox = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 50px;
`
export const Name = styled.h1`
  font-family: 'Roboto';
  font-size:80px;
  margin-bottom: 20px;
`
export const Bio = styled.h3`
  font-size: 50px;
  font-family: Lato;
  margin-top: 0px;
`
export const SocialBox = styled.ul`
width: 400px;
display:flex;
list-style-type:none;
padding: 0;
`
export const SocialIcons = styled.li`
margin-right: 40px;
border: 1px solid #222222;
padding: 20px;
border-radius: 100%;
`
export const Divider = styled.div`
  width:100%;
  height: 10px;
  background: #000;
`
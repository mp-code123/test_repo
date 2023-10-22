import {  Divider, IconButton,Stack, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typographyy } from './Header.styled';

const Header = () => {
  return (
    <>
    <Stack spacing={2}pl={5} pr={5}>

      <Stack  spacing={2} pt={10}>
        <Stack mt={0}>
        <Typographyy>
          Manish Prajapati
        </Typographyy>
        <Typography variant="h3" gutterBottom mt={2}>
          UX/UI designer & Creative developer <br />specialised in Websites & Webapps
        </Typography>
        </Stack>


        <Stack direction="row" spacing={2} pt={2}>
          <IconButton size="large" variant="outlined" padding="10px"><InstagramIcon /></IconButton>
          <IconButton size="large" href="https://www.github.com/mp-code123" target="_blank"><GitHubIcon/></IconButton>
          <IconButton size="large" href="https://www.linkedin.com/in/me-manish-prajapati" target="_blank"><LinkedInIcon/></IconButton>
        </Stack>

      </Stack>
      <Divider sx={{height: '10px', light:'false'}} />
      <Typography align='right'>PORTFOLIO @2023</Typography>

    </Stack>
    </>
  )
}

export default Header

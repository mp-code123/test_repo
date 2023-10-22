import { Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import Doings from './Doings'

const About = () => {
    return (
        <div>
            <>
                <Stack pl={5} pr={5}>

                    <Stack spacing={{ sm: '5', xs: '2' }} mb={10}>
                        <Typography variant='h2' mb={2}>
                            About Me
                        </Typography>
                        <Typography variant="h6">
                            Welcome to my portfolio! I am thrilled to share my story and give you a glimpse into who I am as a professional. My name is Manish Prajapati, and I am a passionate and dedicated student of Computer Science.

                            From a young age, I have been fascinated by Computer Science and its potential to make a positive impact on the world. This fascination led me to pursue Bachelors of Technology at Pranveer Singh Institute of Technology. During my studies, I immersed myself in various projects and coursework, developing a solid foundation of knowledge and skills.
                        </Typography>
                    </Stack>
                    <Divider />
                    <Doings />
                </Stack>
            </>
        </div>
    )
}

export default About

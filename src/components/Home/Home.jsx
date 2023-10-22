import React from 'react'
import Header from '../Header/Header'
import { Container } from './Home.styled'
import About from '../About/About'

const Home = () => {
  return (
    <Container>
        <Header/>
        <About/>
    </Container>
  )
}

export default Home

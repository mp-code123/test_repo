import * as React from 'react';
import { Box } from '@mui/material';
import Header from './components/Header/Header';
import { Container } from './components/Home/Home.styled';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import GlobalStyle from './globalStyles';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

export default function App() {
  return (
    <Container>
      {/* <Box sx={{ width: '100%', backgroundColor: '#f5f6fa' ,mb:0}} > */}
        <Router>
          <GlobalStyle/>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>

      {/* </Box> */}

    </Container>
  );
}

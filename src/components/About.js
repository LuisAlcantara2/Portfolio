import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const About = () => (
  <Container id="about" style={{ marginTop: '20px' }}>
    <Paper elevation={3} style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Sobre Mí
      </Typography>
      <Typography variant="body1">
        Hola, soy un desarrollador de software con experiencia en desarrollo web, 
        backend y frontend. Me apasiona crear soluciones eficientes y elegantes.
      </Typography>
    </Paper>
  </Container>
);

export default About;

import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const experiences = [
  { title: 'Trabajo 1', company: 'Empresa 1', description: 'Descripción del trabajo 1', period: '2020 - 2021' },
  { title: 'Trabajo 2', company: 'Empresa 2', description: 'Descripción del trabajo 2', period: '2019 - 2020' },
  // Añade más experiencias según sea necesario
];

const Experience = () => (
  <Container id="experience" style={{ marginTop: '20px' }}>
    <Typography variant="h4" gutterBottom>
      Experiencia
    </Typography>
    {experiences.map((exp, index) => (
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }} key={index}>
        <Typography variant="h6">{exp.title}</Typography>
        <Typography variant="subtitle1">{exp.company}</Typography>
        <Typography variant="body2">{exp.period}</Typography>
        <Typography variant="body1">{exp.description}</Typography>
      </Paper>
    ))}
  </Container>
);

export default Experience;

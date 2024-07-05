import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

const projects = [
  { name: 'Proyecto 1', description: 'Descripción del proyecto 1' },
  { name: 'Proyecto 2', description: 'Descripción del proyecto 2' },
  { name: 'Proyecto 3', description: 'Descripción del proyecto 3' },
  // Añade más proyectos según sea necesario
];

const Projects = () => (
  <Container id="projects" style={{ marginTop: '20px' }}>
    <Typography variant="h4" gutterBottom>
      Proyectos
    </Typography>
    <Grid container spacing={3}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6">{project.name}</Typography>
            <Typography variant="body1">{project.description}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Projects;

import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import { Code, Storage, Web } from '@mui/icons-material';

const skills = [
  { name: 'JavaScript', icon: <Code /> },
  { name: 'React', icon: <Web /> },
  { name: 'Node.js', icon: <Code /> },
  { name: 'C#', icon: <Code /> },
  { name: 'SQL', icon: <Storage /> },
  { name: 'Mysql', icon: <Storage /> },
  { name: 'PostgreSQL', icon: <Storage /> },
  { name: 'Firebase', icon: <Storage /> },
];

const Skills = () => (
  <Container id="skills" style={{ marginTop: '20px' }}>
    <Typography variant="h4" gutterBottom>
      Habilidades
    </Typography>
    <Grid container spacing={3}>
      {skills.map((skill, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
            <Box mb={2}>{skill.icon}</Box>
            <Typography variant="h6">{skill.name}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Skills;

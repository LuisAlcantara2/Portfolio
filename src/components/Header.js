import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const Header = () => (
  <AppBar position="static">
    <Container maxWidth="lg">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Mi Portafolio
        </Typography>
        <Button color="inherit" href="#about">Sobre Mí</Button>
        <Button color="inherit" href="#skills">Habilidades</Button>
        <Button color="inherit" href="#projects">Proyectos</Button>
        <Button color="inherit" href="#experience">Experiencia</Button>
        <Button color="inherit" href="#contact">Contacto</Button>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Header;

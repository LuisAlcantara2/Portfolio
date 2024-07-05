import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Footer = () => (
  <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 2, mt: 4 }}>
    <Container>
      <Typography variant="body1" align="center">
        &copy; {new Date().getFullYear()} Mi Portafolio. Todos los derechos reservados.
      </Typography>
    </Container>
  </Box>
);

export default Footer;

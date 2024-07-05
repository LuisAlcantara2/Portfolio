import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Container, Typography, TextField, Button, Paper, Snackbar } from '@mui/material';

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.init({
      publicKey: "DbqpHjdLd4-c4_-_k",
    });
    emailjs.send('service_5j3kfbr', 'template_3n7o306', formData, 'DbqpHjdLd4-c4_-_k')
      .then((response) => {
        console.log('Correo enviado con éxito!', response.status, response.text);
        setOpen(true);
        setFormData({
          from_name: '',
          to_name: '',
          message: ''
        });
      }, (error) => {
        console.error('Error al enviar el correo:', error);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container id="contact" style={{ marginTop: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Contacto
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Nombre"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Correo Electrónico"
            name="to_name"
            value={formData.to_name}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Mensaje"
            name="message"
            value={formData.message}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={4}
          />
          <Button variant="contained" color="primary" style={{ marginTop: '20px' }} type="submit">
            Enviar
          </Button>
        </form>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Formulario enviado con éxito"
        />
      </Paper>
    </Container>
  );
};

export default Contact;

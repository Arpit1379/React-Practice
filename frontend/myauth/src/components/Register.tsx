import React from 'react';
import {useState} from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';

export default function Register() {

    const [formData,setformData]=useState({
        username:'',
        email:'',
        password:''
    });

    const handleChange=(e:any)=>{
        const{name,value}=e.target;
        setformData({...formData,[name]:value});
    }

    const handleSubmit=(e:any)=>{
        e.preventDefault();
        console.log(formData);
    }

  return (
    <Container maxWidth="xs">
    <Typography variant="h4" component="h1" gutterBottom>Register</Typography>
    <form onSubmit={handleSubmit}>
        <TextField name="username" margin="normal" value={formData.username} onChange={handleChange} variant="outlined" fullWidth   />
        <TextField name="email"  margin="normal" value={formData.email} onChange={handleChange} variant="outlined" fullWidth  />
        <TextField name="password" margin="normal" value={formData.password} onChange={handleChange} variant="outlined" fullWidth  />
        <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
    </form>
    </Container>
  );
}

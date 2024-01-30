import React from 'react';
import {useState} from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';


export default function Login() {
    const [formData,setformData]=useState({email:"", password:""} )

    const handleChange=(e:any)=>{
        const {name,value}=e.target;
        setformData({...formData,[name]:value})
    }

    const handleSubmit=(e:any)=>{
        e.preventDefault();
        console.log(formData);
    }

  return (

    <Container maxWidth="xs">
         <Typography variant="h4" component="h1" gutterBottom>Login</Typography>
    <form onSubmit={handleSubmit}>
        <TextField type="email" name="email" variant="outlined" fullWidth    value={formData.email} onChange={handleChange} margin="normal"
        required/>
        <TextField type="password" variant="outlined" fullWidth name="password" value={formData.password} onChange={handleChange} margin="normal"
        required/>
        <Button type="submit" variant="contained" color="primary" fullWidth>Login</Button>
    </form>
    </Container>

  );
}

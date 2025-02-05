import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function Cadastro() {
  const [user, setUser] = useState({
    email: "",
    Password: "",
    age: "",
    name: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "email: " +
        user.email +
        "" +
        "Password: " +
        user.password +
        "Age: " +
        user.age +
        "Name: " +
        user.name
    );
  };
  //   const [Count, setCount] = useState(0)
  return (
    <Container component="main" maxWidth="xl">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            margin: 1,
            backgroundColor: "black",
          }}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Vio
        </Typography>
        <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            margin="normal"
            value={user.email}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            id="password"
            label="Senha"
            name="senha"
            margin="normal"
            type="password"
            value={user.password}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            id="Age"
            label="Age"
            name="Age"
            margin="normal"
            value={user.Age}
            onChange={onChange}
          />

          <TextField
            required
            fullWidth
            id="Name"
            label="Name"
            name="Name"
            margin="normal"
            value={user.Name}
            onChange={onChange}
          />
          <Button
            sx={{ mt: 3, mb: 2, backgroundColor: "Red", color: "white" }}
            fullWidth
            type="submit"
            variant="contained"
          >
            Cadastre-se
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
export default Cadastro;

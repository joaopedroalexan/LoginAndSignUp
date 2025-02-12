import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import api from "../axios/axios";

function Cadastro() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    data_nascimento: "",
    name: "",
    cpf: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Cadastro();
  };

  async function Cadastro() {
    await api.postCadastro(user).then(
      (response) => {
        alert(response.data.message);
      },
      (error) => {
        console.log(error);
        alert(error.response.data.error);
      }
    );
  }

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
            name="password"
            margin="normal"
            type="password"
            value={user.password}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            id="data_nascimento"
            label="data_nascimento"
            name="data_nascimento"
            type="date"
            margin="normal"
            value={user.data_nascimento}
            onChange={onChange}
          />

          <TextField
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            margin="normal"
            value={user.name}
            onChange={onChange}
          />
          <TextField
           required
           fullWidth
           id="cpf"
           label="CPF"
           name="cpf"
           type="number"
           margin="normal"
           value={user.cpf}
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

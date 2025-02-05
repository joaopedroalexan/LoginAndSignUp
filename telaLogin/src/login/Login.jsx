import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function Login() {
  const [user, setUser] = useState({
    email: "",
    Password: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("email: " + user.email + "" + "Senha" + user.password);
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
            label="Password"
            name="senha"
            margin="normal"
            type="password"
            value={user.Age}
            onChange={onChange}
          />
          <Button
            sx={{ mt: 3, mb: 2, backgroundColor: "black", color: "white" }}
            fullWidth
            type="submit"
            variant="contained"
          >
            {" "}
            Entrar{" "}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
export default Login;

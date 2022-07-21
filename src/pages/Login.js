import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { auth, loginUser } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import logo from "../components/Navbar/image 3.png";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      DTS-React-Pair-07 {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const PlayButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  borderRadius: 25,
  marginRight: 15,
  height: 50,
  "&:hover": {
    backgroundColor: red[900],
  },
}));

const theme = createTheme();
const Login = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const emailHandleOnChange = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const passHandleOnChange = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(credential.email, credential.password);
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      navigate("/");
    }
  }, [loading, user, navigate]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} src={logo}></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={emailHandleOnChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={passHandleOnChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <PlayButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </PlayButton>
            <Grid container>
              <Grid item xs>
                Lupa Password?
              </Grid>
              <Grid item>
                <Link to={"/register"}>
                  <Typography>Don't have an account? Sign Up</Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default Login;

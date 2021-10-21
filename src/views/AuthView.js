import { useState, useContext } from "react";
import { useHistory, withRouter } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import {
  TextField,
  FormControl,
  FilledInput,
  InputAdornment,
  IconButton,
  InputLabel,
  Button,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { UserContext } from "../context/UserContext";

const AuthView = () => {
  const history = useHistory();
  const { loginUser, user, loggedIn } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!credentials.email || !credentials.password) {
      alert("Please check credentials");
    } else {
      setCredentials({ [event.target.name]: event.target.value });
      try {
        setCredentials({
          email: "",
          password: "",
        });
        await loginUser(credentials);
        history.push("/matches");
      } catch (error) {
        alert("Please check credentials");
        console.log(error);
      }
    }
  };

  return (
    <Container>
      <Row>
        <Col className="App">
          <h2>W/O Contaxts</h2>
          <img
            src="/nasa-Q1p7bh3SHj8-unsplash.jpeg"
            style={{
              width: "450px",
              marginBottom: "20px",
              borderRadius: "20px",
              boxShadow: "0px 3px 3px 3px rgba(128, 128, 128, 0.2)",
            }}
          />
          <p style={{ width: 450, marginLeft: 92 }}>
            Welcome to W/O Contaxt, The messaging app that allows you to connect
            with people all around the world in real time and without context!
            It's as easy as jumping in a room with whoever you prefer and
            striking a conversation, maybe with a friend that also uses the app,
            or a perfect stranger that spikes your interest, the choice is
            yours!
          </p>
        </Col>
        <Col className="App">
          <div className="auth-form">
            <h3>Login</h3>
            <FormControl>
              {/* //-------------------------EMAIL */}
              <TextField
                onChange={handleChange}
                name="email"
                value={credentials.email}
                className="input-field"
                id="filled-basic"
                label="Email"
                variant="filled"
              />
              {/* //-------------------------EMAIL
              //-------------------------PASSWORD */}
              <FormControl variant="filled">
                <InputLabel htmlFor="filled-adornment-password">
                  Password
                </InputLabel>
                <FilledInput
                  id="filled-adornment"
                  className="input-field-password input-field"
                  type={showPassword ? "text" : "password"}
                  value={credentials.password}
                  onChange={handleChange}
                  name="password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {/* //-------------------------PASSWORD */}
                <Button
                  className="input-field"
                  onClick={handleSubmit}
                  style={{
                    color: "purple",
                    borderColor: "purple",
                    width: "100%",
                  }}
                  variant="outlined"
                >
                  LogIn
                </Button>
                <label style={{ marginTop: 30 }}>
                  Sign Up to create an account
                </label>
                <Button
                  className="input-field"
                  onClick={() => history.push(`/signup`)}
                  style={{ backgroundColor: "purple", width: "100%" }}
                  variant="contained"
                >
                  SignUp
                </Button>
              </FormControl>
            </FormControl>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(AuthView);

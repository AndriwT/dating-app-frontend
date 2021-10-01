import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";

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
  const { loginUser } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
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
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUser({ [event.target.name]: event.target.value });
    loginUser(user);
    setUser({
      email: "",
      password: "",
    });
    alert("Successfully Logged in!");
    history.push(`/matches`);
  };

  return (
    <Container>
      <Row>
        <Col className="App">
          <h2>i.love(you);</h2>
          <img
            src="/637454658886270000.png"
            style={{
              width: "450px",
              marginBottom: "20px",
              borderRadius: "20px",
              boxShadow: "0px 3px 3px 3px rgba(128, 128, 128, 0.2)",
            }}
          />

          <p>
            Hi There! This text here will tell you the basics of this app as
            well as invite you to either login or signup, so when this text is
            done it will actually be really cool and have real life purpose, not
            like you reading this crap right now :D
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
                value={user.email}
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
                  value={user.password}
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
                <label>!account ? signup : exit;</label>
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

export default AuthView;

import { Container, Row, Col } from "react-bootstrap";
import {
  TextField,
  FormControl,
  FilledInput,
  InputAdornment,
  IconButton,
  InputLabel,
  Button,
  ButtonGroup,
} from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const AuthView = () => {
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Row className="stupid-bitch">
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
          <div className="signup-form">
            <h3>Signup | Login</h3>
            <FormControl>
              <TextField
                className="input-field"
                id="filled-basic"
                label="Email"
                variant="filled"
              />
              <FormControl variant="filled">
                <InputLabel htmlFor="filled-adornment-password">
                  Password
                </InputLabel>
                <FilledInput
                  id="filled-adornment"
                  className="input-field-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <ButtonGroup
                  className="signup-button"
                  disableElevation
                  variant="contained"
                >
                  <Button
                    style={{ backgroundColor: "purple", width: "100%" }}
                    variant="contained"
                  >
                    SignUp
                  </Button>

                  <Button
                    style={{
                      color: "purple",
                      borderColor: "purple",
                      width: "100%",
                    }}
                    variant="outlined"
                  >
                    LogIn
                  </Button>
                </ButtonGroup>
              </FormControl>
            </FormControl>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthView;

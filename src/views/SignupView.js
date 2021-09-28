import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  FilledInput,
  FormControl,
  IconButton,
  InputLabel,
  TextField,
  InputAdornment,
  Button,
  ButtonGroup,
} from "@mui/material";

import { useState } from "react";

const SignupView = () => {
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
    <div className="signup-form">
      {/* // -------------------------------FROM AUTH
      // WINDOW---------------------------------------------------- */}
      {/* <FormControl> */}
      <TextField
        style={{ marginRight: "10px" }}
        className="input-field"
        id="filled-basic"
        label="Full Name"
        variant="filled"
      />
      <TextField
        style={{ marginRight: "10px" }}
        className="input-field"
        id="filled-basic"
        label="Email"
        variant="filled"
      />
      <FormControl variant="filled">
        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
        <FilledInput
          style={{ marginRight: "10px" }}
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
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      {/* </FormControl> */}
      {/* // -------------------------------FROM AUTH
      WINDOW----------------------------------------------------// */}
    </div>
  );
};

export default SignupView;

{
  /* <ButtonGroup className="signup-button" disableElevation variant="contained">
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
</ButtonGroup>; */
}

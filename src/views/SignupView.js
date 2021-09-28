import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  FilledInput,
  FormControl,
  IconButton,
  InputLabel,
  TextField,
} from "@mui/material";
import { Button } from "bootstrap";
import { ButtonGroup } from "react-bootstrap";
import heart from "./public/637454658886270000.png";

const SignupView = () => {
  return (
    <FormControl>
      <TextField
        className="input-field"
        id="filled-basic"
        label="Full Name"
        variant="filled"
      />
      <TextField
        className="input-field"
        id="filled-basic"
        label="Email"
        variant="filled"
      />
      <FormControl variant="filled">
        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
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
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
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
  );
};

export default SignupView;

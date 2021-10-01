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
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

import { useContext, useState } from "react";
import { useHistory } from "react-router";

import { UserContext } from "../context/UserContext";

const SignupView = () => {
  const { signupUser } = useContext(UserContext);
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    age: 0,
    bio: "",
  });

  // let languages = ["JavaScript", "C++"]

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    signupUser(user);
    setUser({
      name: "",
      email: "",
      password: "",
      gender: "",
      age: 0,
      bio: "",
    });
    alert("User successfully created!")
    goToPath(`/matches`)
  };

  const goToPath = async (path) => {
    await history.push(path);
  };

  return (
    <div className="signup-form">
      {/* // -------------------------------FROM AUTH
      // WINDOW---------------------------------------------------- */}
      {/* <FormControl> */}
      <TextField
        value={user.name}
        onChange={handleChange}
        name="name"
        style={{ marginRight: "10px" }}
        className="input-field"
        id="filled-basic"
        label="Full Name"
        variant="filled"
      />
      <TextField
        value={user.email}
        onChange={handleChange}
        name="email"
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
      </FormControl>
      {/* </FormControl> */}
      {/* // -------------------------------FROM AUTH
      WINDOW----------------------------------------------------// */}
      <br />
      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          onChange={handleChange}
          value={user.gender}
          row
          aria-label="gender"
          name="gender"
        >
          <FormControlLabel value="Male" control={<Radio />} label="Male" />
          <FormControlLabel value="Female" control={<Radio />} label="Female" />
          <FormControlLabel value="Other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>

      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        {/* <FormLabel component="legend">Select Programming Languages</FormLabel>
        <FormGroup>
          {languages && languages.map((language, i) => (
            <FormControlLabel
              control={
                <Checkbox checked='language' onChange={handleChange} name='language' />
              }
              label="language"
            />
          ))}
          
        </FormGroup>
        <FormHelperText>Select as many languages as you know</FormHelperText> */}
        <br />

        <TextField
          className="form-control"
          name="age"
          type="number"
          onChange={handleChange}
          value={user.age}
        />

        <TextField
          onChange={handleChange}
          name="bio"
          value={user.bio}
          style={{ width: "100%" }}
          id="filled-multiline-static"
          label="Write about yourself"
          multiline
          rows={4}
          variant="filled"
        />
        <Button
          onClick={handleSubmit}
          style={{ backgroundColor: "purple", width: "100%" }}
          variant="contained"
        >
          SignUp
        </Button>
      </FormControl>
    </div>
  );
};

export default SignupView;

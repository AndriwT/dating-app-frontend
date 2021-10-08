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
  const { signupUser, loginUser, getUsers } = useContext(UserContext);
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
    await signupUser(user);
    await getUsers();
    alert("User successfully created!");
    await loginUser(user);
    goToPath(`/matches`);
  };

  const goToPath = async (path) => {
    await history.push(path);
  };

  return (
    <div className="signup-form">
      <div>
        <FormControl variant="filled">
          <label>Full Name</label>
        <TextField
          value={user.name}
          onChange={handleChange}
          name="name"
          style={{ marginRight: "10px" }}
          className="input-field"
          label="Full Name"
          variant="filled"
        />
        <label>Email</label>
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
        </FormControl>
        <FormControl variant="filled">
          <label>Password</label>
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
          <label style={{marginTop: 10, width: 225}}>Age</label>
        <TextField
          className="form-control"
          name="age"
          type="number"
          onChange={handleChange}
          value={user.age}
          style={{marginTop: 5, width: 225}}
        />
        </FormControl>

      </div>

      <br />
      <div>
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
      </div>
      <FormControl sx={{ width: 460 }} component="fieldset" variant="standard">
      <label>Bio</label>
        <TextField
          onChange={handleChange}
          name="bio"
          value={user.bio}
          id="filled-multiline-static"
          label="Write about yourself"
          multiline
          rows={4}
          variant="filled"
        />
        <Button
          onClick={handleSubmit}
          style={{ backgroundColor: "purple"}}
          variant="contained"
        >
          SignUp
        </Button>
      </FormControl>
    </div>
  );
};

export default SignupView;

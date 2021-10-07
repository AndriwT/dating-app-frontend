import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

const UserCard = ({ props: { name, gender, age, bio, uid } }) => {
  return (
    <Card sx={{ width: 250, height: 250}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {gender}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {age}
        </Typography>
        <Typography sx={{maxHeight: 80}} style={{lineClamp: 3, wordBreak: 'break-all', overflow: 'hidden'}} variant="body2" color="text.secondary">
          {bio}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={"/chatroom?id=" + uid}><Button size="small">Message</Button></Link>
      </CardActions>
    </Card>
  );
};

export default UserCard;

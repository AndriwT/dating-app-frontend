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
    <Card sx={{ width: 250 }} style={{ minHeight: "190px", padding: "16px" }}>
      <CardContent style={{ minHeight: "190px", padding: "16px" }}>
        <Typography gutterBottom variant="h5" component="div">
          {name}, {age}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>{gender}</b>
        </Typography>

        <Typography
          sx={{ maxHeight: 80 }}
          style={{ lineClamp: 3, wordBreak: "break-all", overflow: "scroll" }}
          variant="body2"
          color="text.secondary"
        >
          {bio}
        </Typography>
      </CardContent>

      <Link
        to={"/chatroom?id=" + uid}
        style={{ textDecoration: "none", justifyContent: "center" }}
      >
        <Button
          variant="contained"
          style={{
            background: "purple",
          }}
        >
          Message
        </Button>
      </Link>
    </Card>
  );
};

export default UserCard;

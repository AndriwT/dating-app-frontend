import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const UserCard = ({ props: { name, gender, age, bio } }) => {
  return (
    <Card sx={{ maxWidth: 250, maxHeight: 250}}>
      {/* <CardMedia
        component="img"
        alt="green iguana"
     
        image="/static/images/cards/contemplative-reptile.jpg"
      /> */}
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
        <Typography variant="body2" color="text.secondary">
          {bio}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default UserCard;

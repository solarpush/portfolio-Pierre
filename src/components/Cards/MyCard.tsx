import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function MyCard(props: {
  title: string;
  image: {
    src: string;
    title: string;
  };
  body: string;
  action: {
    function: (type: string) => void;
    text: string;
    type: string;
  };
}) {
  return (
    <div className="cardContainer">
      <Card className="card">
        <CardMedia
          sx={{ height: "60%", background: "contained" }}
          image={props.image.src}
          title={props.image.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {props.body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => props.action.function(props.action.type)}
          >
            {props.action.text}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default MyCard;

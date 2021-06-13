import React from "react";
import {
  withStyles,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Card,
} from "@material-ui/core";

import styles from "./styles";

const PokemonPageInfo = ({ classes, item, addItemToCart }) => {
  return (
    <Card className={classes.root}>
      {console.log(item, addItemToCart)}
      <CardMedia className={classes.media} image={item.image} />
      <CardContent>
        <Typography gutterBottom variant="h2" component="h2">
          {item.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.abilities.map(({ title, description }) => (
            <div>
              <Typography gutterBottom variant="h5" component="h2">
                {title}:
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </div>
          ))}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.stats}
        >
          {item.stats.map(({ title, value }) => (
            <div className={classes.statType}>
              <Typography variant="h5" component="h2">
                {title}
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                {value}
              </Typography>
            </div>
          ))}
        </Typography>
        <Typography gutterBottom variant="h4" component="h2">
          Price: ${item.price}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" color="primary" onClick={addItemToCart}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(PokemonPageInfo);

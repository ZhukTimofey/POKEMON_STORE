import React from "react";
import {
  withStyles,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import styles from "../pokemonCard/styles";

const PokemonCard = ({
  classes,
  name,
  image,
  price,
  handleGoToDetails,
  addItemToCart,
}) => {
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          ${price}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" color="primary" onClick={addItemToCart}>
          ADD to cart
        </Button>
        <Button size="small" color="primary" onClick={handleGoToDetails}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(PokemonCard);

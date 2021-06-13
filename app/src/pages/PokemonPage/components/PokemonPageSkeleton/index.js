import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { withStyles } from "@material-ui/core";

import styles from "./styles";

const PokemonPageSkeleton = ({ classes }) => {
  return (
    <div className={classes.rootSkeleton}>
      <Skeleton variant="rect" className={classes.skeletonImage} />
      <Skeleton variant="text" className={classes.skeletonHeader} />
      <Skeleton variant="text" className={classes.skeletonSubtitle} />
      <Skeleton variant="text" />

      <Skeleton variant="text" className={classes.skeletonSubtitle} />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" className={classes.skeletonSubtitle} />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" className={classes.skeletonHeader} />
    </div>
  );
};

export default withStyles(styles)(PokemonPageSkeleton);

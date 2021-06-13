import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { withStyles } from "@material-ui/core";

import styles from "./styles";
const numOfElemOnPage = 25;
const arraySkeleton = [];

for (let i = 0; i < numOfElemOnPage; i++) {
  arraySkeleton.push({});
}

const Skelet = ({ classes }) => {
  return (
    <div className={classes.root}>
      {arraySkeleton.map(({}) => (
        <div>
          <Skeleton variant="rect" className={classes.rootSkeleton} />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <div className={classes.skeletonButton}>
            <Skeleton variant="text" width="48%" />
            <Skeleton variant="text" width="48%" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(Skelet);

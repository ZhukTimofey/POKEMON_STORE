import React from "react";

import { Link } from "react-router-dom";
import { ROUTES } from "../../../../routes/routesNames";
import { Button, TextField, withStyles } from "@material-ui/core";
import { Formik } from "formik";
import PropTypes from "prop-types";

import styles from "./styles";

const LoginPageLayout = ({ classes, formik, errors }) => {
  return (
    <div>
      <Formik
        initialValues={formik.initialValues}
        validate={formik.validationSchema}
        onSubmit={formik.onSubmit}
      >
        <form onSubmit={formik.handleSubmit} className={classes.wrapper}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          {errors && <div className={classes.errors}>{errors}</div>}
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
          <Link to={ROUTES.SIGN_UP_PAGE}>
            <a>Go to sign up page</a>
          </Link>
        </form>
      </Formik>
    </div>
  );
};

LoginPageLayout.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
};

export default withStyles(styles)(LoginPageLayout);

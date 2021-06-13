import React from "react";

import {
  Button,
  TextField,
  withStyles,
  Checkbox,
  Select,
} from "@material-ui/core";
import { ROUTES } from "../../../../routes/routesNames";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import PropTypes from "prop-types";

import styles from "./styles";

const SignUpPageLayout = ({
  classes,
  handleChange,
  infoState,
  isAccountCreated,
  setInitialState,
  errors,
  formik,
}) => {
  return isAccountCreated ? (
    <div className={classes.link}>
      <p>you have been registered successfully</p>
      <Link to={ROUTES.LOGIN_PAGE}>
        <a onClick={setInitialState}>Go to login page</a>
      </Link>
    </div>
  ) : (
    <Formik
      initialValues={formik.initialValues}
      validate={formik.validationSchema}
      onSubmit={formik.onSubmit}
    >
      <form onSubmit={formik.handleSubmit} className={classes.wrapper}>
        <div className={classes.inputSection}>
          {console.log("\ninfo state ", infoState, "\nformik ", formik)}
          <div className={classes.column}>
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
              name="firstName"
              label="First name"
              type="text"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
              fullWidth
              name="lastName"
              label="Last name"
              type="text"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
            <Select
              fullWidth
              native
              name="gender"
              value={formik.gender}
              onChange={formik.handleChange}
            >
              <option value="male">male</option>
              <option value="female">female</option>
            </Select>
          </div>
          <div className={classes.column}>
            <TextField
              fullWidth
              name="phone"
              label="Phone"
              type="text"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <TextField
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
              fullWidth
              name="cPassword"
              label="Confirm your password"
              type="password"
              value={infoState.cPassword}
              onChange={handleChange}
            />
          </div>
        </div>
        {errors && <div className={classes.errors}>{errors}</div>}
        <div className={classes.inputSection}>
          <Checkbox
            onChange={handleChange}
            name={"isAgree"}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <Button color="primary" variant="contained" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Formik>
  );
};

SignUpPageLayout.propTypes = {
  handleChange: PropTypes.func.isRequired,
  infoState: PropTypes.shape({
    cPassword: PropTypes.string.isRequired,
    isAgree: PropTypes.bool.isRequired,
  }),
  isAccountCreated: PropTypes.bool.isRequired,
  setInitialState: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string),
};

export default withStyles(styles)(SignUpPageLayout);

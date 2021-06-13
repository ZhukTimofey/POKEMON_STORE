import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { ROUTES } from "./routesNames";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuth } = useSelector((state) => state.signIn);

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuth ? <Redirect to={ROUTES.LOGIN_PAGE} /> : <Component {...props} />
      }
    />
  );
};

PrivateRoute.propTypes = { component: PropTypes.node.isRequired };

export default PrivateRoute;

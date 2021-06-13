import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

import LoginPageLayout from "../components/LoginPageLayout";
import { LOGIN_REQUEST } from "../actions";
import { ROUTES } from "../../../routes/routesNames";

const LoginPageContainer = () => {
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.signIn);
  const history = useHistory();

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  useEffect(() => {
    if (loginStatus.isAuth === true) {
      history.push(`${ROUTES.MARKET_PAGE}`);
    }
  }, [loginStatus.isAuth]);

  const handleSubmit = useCallback(
    (values) => {
      dispatch(LOGIN_REQUEST(values));
    },
    [dispatch]
  );

  return <LoginPageLayout formik={formik} errors={loginStatus.errors} />;
};

export default LoginPageContainer;

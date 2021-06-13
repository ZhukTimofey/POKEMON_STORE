import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useCallback, useEffect } from "react";
import { SIGN_UP_REQUEST, SET_INITIAL_STATE } from "../actions";
import { useFormik } from "formik";
import * as yup from "yup";

import SingUpPageLayout from "../components/signUpPageLayout";

const SignUpPageContainer = () => {
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.signUp.success);
  const errors = useSelector((state) => state.signUp.errors);

  const [infoState, setInfoState] = useState({
    cPassword: "",
    isAgree: false,
  });

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    firstName: yup
      .string("Enter your first name")
      .min(2, "First name should be of minimum 2 characters length")
      .required("First name is required"),
    lastName: yup
      .string("Enter your last name")
      .min(3, "Last name should be of minimum 3 characters length")
      .required("Last name is required"),
    gender: yup
      .string("Enter your last name")
      .matches(/(male|female)/)
      .required("Gender is required"),
    phone: yup
      .string("Enter your last phone number")
      .matches(/^[+]+[0-9]+$/, "Is not correct format")
      .min(7, "Phone should be of minimum 7 characters length")
      .required("Phone number is required"),
    password: yup
      .string("Enter your password")
      .test("match", "passwords do not match", function (password) {
        return password === infoState.cPassword;
      })
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      gender: "male",
      password: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handlePostInfo(values);
    },
  });

  const handleChange = useCallback(
    (event, state) => {
      console.log(infoState);
      const { name: newName, value: newValue } = event.target;
      console.log(newName, newValue);
      if (event.target.name === "isAgree") {
        setInfoState((state) => {
          return {
            ...state,
            [newName]: !infoState.isAgree,
          };
        });
      } else {
        setInfoState((state) => {
          return {
            ...state,
            [newName]: newValue,
          };
        });
      }
    },
    [infoState]
  );

  const handlePostInfo = useCallback(
    (values) => {
      if (infoState.isAgree === true) {
        dispatch(SIGN_UP_REQUEST(values));
      }
    },
    [infoState, dispatch]
  );

  const setInitialState = useCallback(() => {
    console.log(loginStatus);
    dispatch(SET_INITIAL_STATE());
  }, [dispatch]);

  return (
    <SingUpPageLayout
      handleChange={handleChange}
      infoState={infoState}
      setInitialState={setInitialState}
      isAccountCreated={loginStatus.success}
      formik={formik}
      errors={errors}
    />
  );
};

export default SignUpPageContainer;

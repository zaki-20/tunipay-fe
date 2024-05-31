import React from "react";
import * as Components from "./Component";
import tunipayLogo1 from "../../../assets/tunipay-logo/Logo1.png";
import tunipayLogo2 from "../../../assets/tunipay-logo/Logo2.png";

import { toast } from "react-toastify";
import { useSignup } from "../../../hooks/useSignup";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLogin } from "../../../hooks/useLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";

function LoginSignup() {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from.pathname || "/";
  const signupValidationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNo: Yup.string().required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    password: Yup.string().required("Password is required"),
  });

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const {
    signup,
    isLoading: isSignupLoading,
    error: signupError,
  } = useSignup();

  const { login, isLoading: isLoginLoading, error: loginError } = useLogin();

  const signupFormik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phoneNo: "",
      address: "",
      password: "",
    },
    validationSchema: signupValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const message = await signup(values);
        toast.success(message);
        navigate(from, { replace: true });
      } catch (err) {
        toast.error(err.message);
      }
      setSubmitting(false);
    },
    validateOnChange: true,
    validateOnBlur: true,
  });

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const message = await login(values);
        toast.success(message);
        navigate(from, { replace: true });
      } catch (err) {
        console.log("login comp error", err.message);
        toast.error(err.message);
      }
      setSubmitting(false);
    },
    validateOnChange: true,
    validateOnBlur: true,
  });
  const [signIn, toggle] = React.useState(true);
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-[#8974F7] to-[#D25BF7] h-screen">
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form onSubmit={signupFormik.handleSubmit}>
            <Components.LogoWrapper>
              <Components.FormLogo
                src={tunipayLogo1}
                alt=""
              ></Components.FormLogo>
              <Components.FormLogo
                src={tunipayLogo2}
                alt=""
              ></Components.FormLogo>
            </Components.LogoWrapper>
            <Components.FormTitle>Sign Up</Components.FormTitle>
            <Components.FormSubTitle>
              Welcome back! Please enter your details.
            </Components.FormSubTitle>

            <Components.Label>Username*</Components.Label>
            <Components.Input
              type="text"
              name="username"
              placeholder={
                signupFormik.touched.username && signupFormik.errors.username
                  ? signupFormik.errors.username
                  : "Enter your username"
              }
              onChange={signupFormik.handleChange}
              onBlur={signupFormik.handleBlur}
              value={signupFormik.values.username}
              hasError={
                signupFormik.touched.username && signupFormik.errors.username
              }
            />

            <Components.Label>Email*</Components.Label>
            <Components.Input
              type="email"
              name="email"
              placeholder={
                signupFormik.touched.email && signupFormik.errors.email
                  ? signupFormik.errors.email
                  : "Enter your Emal"
              }
              onChange={signupFormik.handleChange}
              onBlur={signupFormik.handleBlur}
              value={signupFormik.values.email}
              hasError={signupFormik.touched.email && signupFormik.errors.email}
            />

            <Components.Label>Phone number*</Components.Label>
            <Components.Input
              type="tel"
              name="phoneNo"
              placeholder={
                signupFormik.touched.phoneNo && signupFormik.errors.phoneNo
                  ? signupFormik.errors.phoneNo
                  : "Enter your Phone Number"
              }
              onChange={signupFormik.handleChange}
              onBlur={signupFormik.handleBlur}
              value={signupFormik.values.phoneNo}
              hasError={
                signupFormik.touched.phoneNo && signupFormik.errors.phoneNo
              }
            />

            <Components.Label>Address*</Components.Label>
            <Components.Input
              type="text"
              name="address"
              placeholder={
                signupFormik.touched.address && signupFormik.errors.address
                  ? signupFormik.errors.address
                  : "Enter your address"
              }
              onChange={signupFormik.handleChange}
              onBlur={signupFormik.handleBlur}
              value={signupFormik.values.address}
              hasError={
                signupFormik.touched.address && signupFormik.errors.address
              }
            />

            <Components.Label>Password*</Components.Label>
            <Components.Input
              type="password"
              name="password"
              placeholder={
                signupFormik.touched.password && signupFormik.errors.password
                  ? signupFormik.errors.password
                  : "Enter your password"
              }
              onChange={signupFormik.handleChange}
              onBlur={signupFormik.handleBlur}
              value={signupFormik.values.password}
              hasError={
                signupFormik.touched.password && signupFormik.errors.password
              }
            />

            <Components.Button type="submit" disabled={isSignupLoading}>
              {isSignupLoading ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                "Sign Up"
              )}
            </Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form onSubmit={loginFormik.handleSubmit}>
            <Components.LogoWrapper>
              <Components.FormLogo
                src={tunipayLogo1}
                alt=""
              ></Components.FormLogo>
              <Components.FormLogo
                src={tunipayLogo2}
                alt=""
              ></Components.FormLogo>
            </Components.LogoWrapper>
            <Components.FormTitle>Sign in</Components.FormTitle>
            <Components.FormSubTitle>
              Welcome back! Please enter your details.
            </Components.FormSubTitle>
            <Components.Label>Email</Components.Label>
            <Components.Input
              type="email"
              name="email"
              placeholder={
                loginFormik.touched.email && loginFormik.errors.email
                  ? loginFormik.errors.email
                  : "Enter your email"
              }
              onChange={loginFormik.handleChange}
              onBlur={loginFormik.handleBlur}
              value={loginFormik.values.email}
              hasError={loginFormik.touched.email && loginFormik.errors.email}
            />
            <Components.Label>Password</Components.Label>
            <Components.Input
              type="password"
              name="password"
              placeholder={
                loginFormik.touched.password && loginFormik.errors.password
                  ? loginFormik.errors.password
                  : "Enter your password"
              }
              onChange={loginFormik.handleChange}
              onBlur={loginFormik.handleBlur}
              value={loginFormik.values.password}
              hasError={
                loginFormik.touched.password && loginFormik.errors.password
              }
            />
            <Link to={"/forgot-password"} className="text-blue-800">
              Forgot your password?
            </Link>
            <Components.Button type="submit" disabled={isLoginLoading}>
              {isLoginLoading ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                "Sign In"
              )}
            </Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Connect Worldwide</Components.Title>
              <Components.Paragraph>
                Register to your new account to access
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Back To Login
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Connect Worldwide</Components.Title>
              <Components.Paragraph>
                Login to your original account to access
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Back to Sigin Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  );
}

export default LoginSignup;

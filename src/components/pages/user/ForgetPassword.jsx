import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import img1 from "../../../assets/Dimond.png";
import { useForgotPassword } from "../../../hooks/useForgotPassword";

const schema = yup
  .object({
    email: yup.string().email("Invalid email").required("Email is required"),
  })
  .required();

const ForgotPassword = () => {
  const { forgotPassword, error, isLoading } = useForgotPassword();

  const initialValues = {
    email: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: schema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: async (values, action) => {
        try {
          const message = await forgotPassword(values);
          toast.success(message);
          action.resetForm();

        } catch (err) {
          toast.error(err.message);
          action.resetForm();
        }
      },
    });

  return (
    <>
      <div>
        <div className="min-w-screen min-h-screen bg-[#d0d1d1] flex items-center justify-center px-5 py-5">
          <div
            className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
            style={{ maxWidth: 1000 }}
          >
            <div className="md:flex items-center w-full">
              <div className="hidden md:block w-1/2 bg-gray-200 py-10 px-10 ">
                <img
                  src={img1}
                  alt="loginbike"
                  className="w-full rounded-3xl"
                />
              </div>
              <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div className="text-center mb-10">
                  <h1 className="font-bold text-3xl text-gray-900">
                    Forgot Password?{" "}
                  </h1>
                  <p>Enter your register email for password reset</p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="flex -mx-3 mb-4">
                    <div className="w-full px-3 ">
                      <label
                        htmlFor="true"
                        className="text-xs font-semibold px-1"
                      >
                        Email
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-email-outline text-gray-400 text-lg" />
                        </div>
                        <input
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="email"
                          id="email"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="johnsmith@example.com"
                        />
                      </div>
                      {errors.email && touched.email ? (
                        <p className="text-red-600 animate-pulse">
                          {errors.email}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex w-full">
                    <div className="w-full  mb-5">
                      <button
                        type="submit"
                        className="block w-full  mx-auto bg-[#122222] hover:bg-indigo-700  text-white rounded-lg px-3 py-2 font-semibold"
                      >
                        {isLoading ? (
                          <span className="loading loading-spinner loading-md"></span>
                        ) : (
                          "Submit"
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;

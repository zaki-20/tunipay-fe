import { useFormik } from "formik";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import img1 from "../../../assets/Dimond.png";
import { toast } from "react-toastify";
import { useResetPassword } from "../../../hooks/useResetPassword";

const schema = yup
  .object({
    newPassword: yup
      .string()
      .min(3, "Password must be at least 3 characters")
      .required("New Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("newPassword"), null], "Passwords must match")
      .required("Confirm Password is required"),
  })
  .required();

const ResetPassword = () => {
  const { token } = useParams();
  const { resetPassword, isLoading, error } = useResetPassword();

  const initialValues = {
    newPassword: "",
    confirmPassword: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: schema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: async (values, action) => {
        const message = await resetPassword(values, token);
        toast.success(message);
        action.resetForm();
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
              <div className="hidden md:block w-1/2 bg-gray-200 p-20 ">
                <img
                  src={img1}
                  alt="resetPass"
                  className="w-full rounded-3xl"
                />
              </div>
              <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div className="text-center mb-10">
                  <h1 className="font-bold text-3xl text-gray-900">
                    Reset Password
                  </h1>
                  <p>please enter your new password</p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="-mx-3">
                    <div className="w-full px-3 mb-5">
                      <label
                        htmlFor="true"
                        className="text-xs font-semibold px-1"
                      >
                        {" "}
                        New Password
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-email-outline text-gray-400 text-lg" />
                        </div>
                        <input
                          type="password"
                          name="newPassword"
                          id="newPassword"
                          value={values.newPassword}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        />
                      </div>
                      {errors.newPassword && touched.newPassword ? (
                        <p className="text-red-600 animate-pulse">
                          {errors.newPassword}
                        </p>
                      ) : null}
                    </div>
                    <div className="w-full px-3 mb-5">
                      <label
                        htmlFor="true"
                        className="text-xs font-semibold px-1"
                      >
                        Confirm Password
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-email-outline text-gray-400 text-lg" />
                        </div>
                        <input
                          type="password"
                          name="confirmPassword"
                          id="confirmPassword"
                          value={values.confirmPassword}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        />
                      </div>
                      {errors.confirmPassword && touched.confirmPassword ? (
                        <p className="text-red-600 animate-pulse">
                          {errors.confirmPassword}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex w-full mt-5">
                    <div className="w-full  mb-5">
                      <button
                        type="submit"
                        className="block w-full  mx-auto bg-[#122222] hover:bg-indigo-700  text-white rounded-lg px-3 py-3 font-semibold"
                      >
                        SUBMIT{" "}
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

export default ResetPassword;

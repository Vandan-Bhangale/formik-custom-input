import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomInput from "./CustomInput";

const SignupForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    age: "",
  };

  // Yup validation schema
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, "Must be at least 3 characters")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Must be at least 8 characters")
      .matches(/[0-9]/, "Must contain a number")
      .required("Required"),
    age: Yup.number()
      .min(18, "Must be at least 18")
      .max(60, "Must be at most 60")
      .required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form data:", values);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <CustomInput label="Username" name="username" type="text" />
            <CustomInput label="Email" name="email" type="email" />
            <CustomInput label="Password" name="password" type="password" />
            <CustomInput label="Age" name="age" type="number" />

            <button
              type="submit"
              className="w-full mt-6 bg-blue-600 text-white font-semibold py-2.5 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              Sign Up
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">
                Log in
              </span>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignupForm;

import React from "react";
import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-4">
      {/* Label */}
      <label htmlFor={props.name} className="block font-medium mb-1">
        {label}
      </label>

      {/* Input */}
      <input
        {...field}
        {...props}
        id={props.name}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
          meta.touched && meta.error ? "border-red-500" : "border-gray-300"
        }`}
      />

      {/* Error */}
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default CustomInput;

import React from "react";
import Buttons from "./Buttons";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function PersonalInfo(props) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      zipCode: "",
      state: "",
      country: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required("Can't be black"),
      lastName: Yup.string().required("Can't be black"),
      address: Yup.string().required("Can't be black"),
      city: Yup.string().required("Can't be black"),
      zipCode: Yup.string()
        .min(6, "Must be 6 characters")
        .max(6, "Must be 6 characters")
        .required("Can't be black"),
      state: Yup.string().required("Can't be black"),
      country: Yup.string().required("Can't be black"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className="flex-column" onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="Enter your firstname"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <span className="err-msg">{formik.errors.firstName}</span>
      ) : null}
      <input
        type="text"
        name="lastName"
        placeholder="Enter your lastname"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <span className="err-msg">{formik.errors.lastName}</span>
      ) : null}
      <input
        type="text"
        name="address"
        placeholder="Enter your address"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.address}
        required
      />
      {formik.touched.address && formik.errors.address ? (
        <span className="err-msg">{formik.errors.address}</span>
      ) : null}
      <input
        type="text"
        name="city"
        placeholder="Enter your city"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.city}
      />
      {formik.touched.city && formik.errors.city ? (
        <span className="err-msg">{formik.errors.city}</span>
      ) : null}
      <input
        type="number"
        name="zipCode"
        placeholder="Enter your zip code"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.zipCode}
        required
      />
      {formik.touched.zipCode && formik.errors.zipCode ? (
        <span className="err-msg">{formik.errors.zipCode}</span>
      ) : null}
      <input
        type="text"
        name="state"
        placeholder="Enter your state"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.state}
      />
      {formik.touched.state && formik.errors.state ? (
        <span className="err-msg">{formik.errors.state}</span>
      ) : null}
      <select
        name="country"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.country}
      >
        <option>Select</option>
        <option value="India">India</option>
        <option value="United States">United States</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="Japan">Japan</option>
        <option value="Russia">Russia</option>
      </select>
      {formik.touched.country && formik.errors.country ? (
        <span className="err-msg">{formik.errors.country}</span>
      ) : null}
      <Buttons
        prevStep={props.prevStep}
        nextStep={props.nextStep}
        step={props.step}
      />
    </form>
  );
}

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Buttons from "./Buttons";

export default function Profile(props) {
  const formik = useFormik({
    initialValues: {
      username: "",
      bio: "",
      image: "",
      email: "",
      phone: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(15, "Must be 6 characters or more")
        .required("Can't be blank"),
      bio: Yup.string()
        .min(20, "Must be 150 characters or more")
        .required("Can't be blank"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Can't be blank"),
      phone: Yup.string()
        .required("Can't be blank")
        .min(10, "Phone number is not valid short")
        .max(10, "Phone number is not valid long"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className="flex-column" onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Enter your username (minimum 6 characters)"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
      />
      {formik.touched.username && formik.errors.username ? (
        <span className="err-msg">{formik.errors.username}</span>
      ) : null}
      <textarea
        name="bio"
        cols="30"
        className="textarea"
        rows="10"
        placeholder="Enter bio (minimum 150 letter)"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.bio}
      ></textarea>
      {formik.touched.bio && formik.errors.bio ? (
        <span className="err-msg">{formik.errors.bio}</span>
      ) : null}
      <input
        type="file"
        name="image"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.image}
      />
      {formik.touched.image && formik.errors.image ? (
        <span className="err-msg">{formik.errors.image}</span>
      ) : null}
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <span className="err-msg">{formik.errors.email}</span>
      ) : null}
      <input
        type="number"
        name="phone"
        placeholder="Enter your phone"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.phone}
      />
      {formik.touched.phone && formik.errors.phone ? (
        <span className="err-msg">{formik.errors.phone}</span>
      ) : null}
      <Buttons
        prevStep={props.prevStep}
        nextStep={props.nextStep}
        step={props.step}
      />
    </form>
  );
}

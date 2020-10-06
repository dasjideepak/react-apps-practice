import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Buttons from "./Buttons";

export default function Qualifications(props) {
  const formik = useFormik({
    initialValues: {
      school: "",
      college: "",
      postGraduatation: "",
    },
    validationSchema: Yup.object({
      school: Yup.string().required("Can't be blank"),
      college: Yup.string().required("Can't be blank"),
      postGraduatation: Yup.string().required("Can't be blank"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className="flex-column" onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="school"
        placeholder="Enter your school details"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.school}
      />
      {formik.touched.school && formik.errors.school ? (
        <span className="err-msg">{formik.errors.school}</span>
      ) : null}
      <input
        type="text"
        name="college"
        placeholder="Enter your college details"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.college}
      />
      {formik.touched.college && formik.errors.college ? (
        <span className="err-msg">{formik.errors.college}</span>
      ) : null}
      <input
        type="text"
        name="postGraduatation"
        placeholder="Enter your post graduation details"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.postGraduatation}
      />
      {formik.touched.postGraduatation && formik.errors.postGraduatation ? (
        <span className="err-msg">{formik.errors.postGraduatation}</span>
      ) : null}
      <Buttons
        prevStep={props.prevStep}
        nextStep={props.nextStep}
        step={props.step}
      />
    </form>
  );
}

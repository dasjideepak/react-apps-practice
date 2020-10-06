import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Buttons from "./Buttons";

export default function Notification(props) {
  const formik = useFormik({
    initialValues: {
      notifPref: "",
      newsletter: "",
    },
    validationSchema: Yup.object({
      notifPref: Yup.string().required("Please select atleast one option"),
      newsletter: Yup.string().required("Please select atleast one option"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className="flex-column" onSubmit={formik.handleSubmit}>
      <label htmlFor="notifPref">Notification Preferences</label>
      <input
        type="checkbox"
        name="notifPref"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.notifPref}
      />
      {formik.touched.notifPref && formik.errors.notifPref ? (
        <span className="err-msg">{formik.errors.notifPref}</span>
      ) : null}
      <label htmlFor="newsletter">Newsletter</label>
      <input
        type="radio"
        name="newsletter"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.newsletter}
      />
      {formik.touched.newsletter && formik.errors.newsletter ? (
        <span className="err-msg">{formik.errors.newsletter}</span>
      ) : null}
      <Buttons
        prevStep={props.prevStep}
        nextStep={props.nextStep}
        step={props.step}
      />
    </form>
  );
}

// notification
// notification preferences (checkbox) (daily, weekly, monthly)
// push notifications (radio) yes, no

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addItem } from "../store/appSlice";
import { AppData } from "../global.interface";
import CustomInput from "./input";
import Link from "next/link";
import { useRouter } from "next/router";

const AppForm = ({ setAppObj }: any) => {
  //Input value
  const [name, setName] = useState("");
  const [region, setRegion] = useState("");
  const [environment, setEnvironment] = useState("");

  const newAppSchema = Yup.object().shape({});

  const formik = useFormik<AppData>({
    initialValues: {
      name: "",
      region: "",
      environment: "",
      url: "",
      created: "",
    },
    validationSchema: newAppSchema,
    onSubmit: async (values: AppData) => {
      let payload = {
        name,
        url: "",
        region,
        created: "",
        environment,
      };
      setAppObj(payload);
    },
  });

  const {
    handleChange,
    handleSubmit,
    isSubmitting,
    errors,
    handleBlur,
    touched,
  } = formik;
  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   if (name.trim().length === 0) {
  //     return;
  //   }
  //   const payload: AppData = {
  // name,
  // url: "",
  // region,
  // created: "",
  // environment,
  //   };
  //   dispatch(addItem(payload));
  // };

  return (
    <form className="container-fluid" onSubmit={handleSubmit}>
      <CustomInput
        type="text"
        label="App Name"
        placeholder="Enter app name"
        name="appName"
        id="name"
        classes=""
        onChange={handleChange}
        inputClass={`${
          errors.name && touched.name && "border border-[#DC1414] rounded-md"
        }`}
      />
      <CustomInput
        type="text"
        label="Region"
        placeholder="Enter region"
        name="region"
        id="region"
        classes="my-6"
        onChange={handleChange}
        inputClass={`${
          errors.region &&
          touched.region &&
          "border border-[#DC1414] rounded-md"
        }`}
      />
      <CustomInput
        type="text"
        label="Environment"
        placeholder="Enter environment"
        name="environment"
        id="environment"
        classes=""
        onChange={handleChange}
        inputClass={`${
          errors.environment &&
          touched.environment &&
          "border border-[#DC1414] rounded-md"
        }`}
      />
    </form>
  );
};

export default AppForm;

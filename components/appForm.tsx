import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AppData } from "../global.interface";
import CustomInput from "./input";

interface FormProps {
  setAppObj: Dispatch<SetStateAction<AppData>>;
  appObj: AppData;
  setErrors: Dispatch<SetStateAction<boolean>>;
}

const AppForm = ({ setAppObj, appObj, setErrors }: FormProps) => {
  //Input value
  const [name, setName] = useState(appObj?.name || "");
  const [region, setRegion] = useState(appObj?.region || "");
  const [environment, setEnvironment] = useState(appObj?.environment || "");

  useEffect(() => {
    if (name === "" || region === "" || environment === "") {
      setErrors(true);
    } else {
      const url = name.split(" ").join("").toLowerCase();
      setErrors(false);
      setAppObj({
        id: new Date().getTime().toString(),
        name,
        region,
        environment,
        created: new Date().toString(),
        url: `https://${url}-clouddley.app`,
      });
    }
  }, [name, region, environment]);

  return (
    <form className="container-fluid">
      <CustomInput
        type="text"
        label="App Name"
        placeholder="Enter app name"
        name="appName"
        id="name"
        classes=""
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <CustomInput
        type="text"
        label="Region"
        placeholder="Enter region"
        name="region"
        id="region"
        classes="my-6"
        onChange={(e) => {
          setRegion(e.target.value);
        }}
        value={region}
      />

      <CustomInput
        type="text"
        label="Environment"
        placeholder="Enter environment"
        name="environment"
        id="environment"
        classes=""
        onChange={(e) => {
          setEnvironment(e.target.value);
        }}
        value={environment}
      />
    </form>
  );
};

export default AppForm;

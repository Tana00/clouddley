import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { addItem } from "../store/appSlice";
import { AppData } from "../global.interface";
import { AppForm, ReviewApp } from "../components";

const steps = ["Fill Form", "Review and Create"];

export default function CreateAppStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      //   dispatch(addItem(payload));
      router.push("/apps");
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <div className="flex h-full flex-col items-center">
        <h2 className="font-bold text-2xl mt-6">Create Application</h2>
      </div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          return (
            <Step key={label} {...stepProps} className="mt-14">
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div className="md:w-9/12 w-full my-6 mx-auto p-8">
        {activeStep === steps.length - 1 ? (
          <>
            <div className="flex items-center justify-end w-full my-2">
              <button
                onClick={handleBack}
                className="flex border border-[#0481D2] rounded-md py-3 px-10 text-[#0481D2] text-sm"
              >
                Edit
              </button>
            </div>
            <ReviewApp handleNext={handleNext} />
          </>
        ) : (
          <AppForm previewApp={handleNext} />
        )}
        <div className="mt-8 mb-2 flex justify-end items-center">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex border-none border-[#BC2E80] bg-transparent text-[#BC2E80] rounded-md py-3 px-8 mr-4 text-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleNext}
            className="flex bg-[#BC2E80] rounded-md py-3 px-10 text-white text-sm"
          >
            {activeStep === steps.length - 1 ? "Create App" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

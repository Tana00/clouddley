import { AppForm } from ".";
import { AppData } from "../global.interface";

export default function ReviewApp({
  appObj,
}: {
  appObj: AppData | null | undefined;
}) {
  return (
    <div className="container-fluid">
      <h2 className="text-lg my-4">Preview</h2>
      <div className="bg-[#fafafa] border border-[#E8F3FB] rounded-sm py-4">
        <div className="my-2 border-b border-[#E8F3FB] px-10 py-4 flex flex-col gap-4">
          <p className="text-[#303030]">App Name</p>
          <p className="text-black font-semibold">{appObj?.name}</p>
        </div>
        <div className="my-2 border-b border-[#E8F3FB] px-10 py-4 flex flex-col gap-4">
          <p className="text-[#303030]">Region</p>
          <p className="text-black font-semibold">{appObj?.region}</p>
        </div>
        <div className="my-2 px-10 py-4 flex flex-col gap-4">
          <p className="text-[#303030]">Environment</p>
          <p className="text-black font-semibold">{appObj?.environment}</p>
        </div>
      </div>
    </div>
  );
}

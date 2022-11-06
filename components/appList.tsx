import React from "react";
import { useSelector } from "react-redux";
import AppTable from "./table";
import { AppReducer } from "../global.interface";

const AppList = () => {
  let appList: any = useSelector((state: AppReducer) => state.app);

  return (
    <div className="container-fluid my-3 w-full">
      <AppTable lists={appList} />
    </div>
  );
};

export default AppList;

import React from "react";
import { useSelector } from "react-redux";
import AppTable from "./table";
import { AppReducer } from "../global.interface";

const AppList = () => {
  const lists: any = useSelector((state: AppReducer) => state.app);

  //   if (list.length === 0) {
  //     return <h2 className="text-center my-3 text-danger">LIST IS EMPTY</h2>;
  //   }
  return (
    <div className="container-fluid my-3 w-full">
      <AppTable lists={lists} />
    </div>
  );
};

export default AppList;

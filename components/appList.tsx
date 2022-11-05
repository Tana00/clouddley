import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../store/store";
import AppTable from "./table";
import { clearList } from "../store/appSlice";
import { AppData } from "../global.interface";
import Head from "next/head";

const AppList = () => {
  const dispatch = useDispatch();

  const list = useSelector((state: AppData) => state);

  console.log("list", list);
  //   if (list.length === 0) {
  //     return <h2 className="text-center my-3 text-danger">LIST IS EMPTY</h2>;
  //   }
  return (
    <div className="container-fluid my-3 w-full">
      <AppTable list={list} />
    </div>
  );
};

export default AppList;

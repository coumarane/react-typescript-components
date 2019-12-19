import * as React from "react";
import "../assets/styles/home.css";
import BreadCrumb from "./layout/BreadCrumb";
import DatatableExample from "../components/datatable/client-side/DatatableExample";



const Datatable: React.FunctionComponent<{}> = () => {
  const datas: any[] = [];
  return (
    <div>
      <BreadCrumb title="Datatable" />

      <DatatableExample data={datas} />
    </div>
  );
};

export default Datatable;

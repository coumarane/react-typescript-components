import * as React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { AppRoutes } from "../../AppRoutes";

class MainLayout extends React.Component<{}, {}> {
  render() {
    return (
      <>
        {/* <Header />

        <div className="container-fluid">

          <div className="row">
            <Sidebar />

            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <section>
                <AppRoutes />
              </section>
            </main>
          </div>
        </div> */}

        <Header />

        <div className="container-fluid">
          <div className="row">
            <Sidebar />

            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <AppRoutes />
            </main>
          </div>
        </div>

        {/* Page Footer */}
        <footer style={{ marginTop: "10px", textAlign: "right" }}>
          Copyright 2019
        </footer>
      </>
    );
  }
}

export default MainLayout;

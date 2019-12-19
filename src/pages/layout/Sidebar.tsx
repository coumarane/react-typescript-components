import * as React from "react";

class Sidebar extends React.Component<{}, {}> {
  render() {
    return (
      <>
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="/datatable">
                  <i className="fa fa-list-alt">{``}</i> Datatable{` `}
                  {/* <span className="sr-only">(current)</span> */}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/contact">
                  <i className="fa fa-users">{``}</i> Contact form{` `}
                  <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Sidebar;

import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import ContactCreation from "../components/contact/contact.creation";
import ContactList from "../components/contact/contact.list";
import ContactLocalStorageService from "../services/contactLocalStorageService";
import { IContact } from "../models/contact";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";


interface IOwnState {
  contacts: IContact[];
  editContact: IContact;
}

type IUnionProps = RouteComponentProps<any>;

class Dashboard extends React.Component<IUnionProps, IOwnState> {
  constructor(props: IUnionProps) {
    super(props);

    const initialContcatState: IContact = {
      id: 0,
      name: "",
      email: "",
      dateOfBirth: ""
    };

    // const [contacts, setContacts] = React.useState({});
    this.state = {
      contacts: [],
      editContact: initialContcatState
    };
  }

  componentDidMount() {
    this.loadContacts();
  }

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
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  <h1 className="h2">Dashboard</h1>
                  <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group mr-2">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Share
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Export
                      </button>
                    </div>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary dropdown-toggle"
                    >
                      <span data-feather="calendar"></span>
                      This week
                    </button>
                  </div>
                </div>
  
  
  
                <h2>Section title</h2>
                <div className="table-responsive">
                  <table className="table table-striped table-sm">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Header</th>
                        <th>Header</th>
                        <th>Header</th>
                        <th>Header</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1,001</td>
                        <td>Lorem</td>
                        <td>ipsum</td>
                        <td>dolor</td>
                        <td>sit</td>
                      </tr>
                      <tr>
                        <td>1,002</td>
                        <td>amet</td>
                        <td>consectetur</td>
                        <td>adipiscing</td>
                        <td>elit</td>
                      </tr>
                      <tr>
                        <td>1,003</td>
                        <td>Integer</td>
                        <td>nec</td>
                        <td>odio</td>
                        <td>Praesent</td>
                      </tr>
                      <tr>
                        <td>1,003</td>
                        <td>libero</td>
                        <td>Sed</td>
                        <td>cursus</td>
                        <td>ante</td>
                      </tr>
                      <tr>
                        <td>1,004</td>
                        <td>dapibus</td>
                        <td>diam</td>
                        <td>Sed</td>
                        <td>nisi</td>
                      </tr>
                      <tr>
                        <td>1,005</td>
                        <td>Nulla</td>
                        <td>quis</td>
                        <td>sem</td>
                        <td>at</td>
                      </tr>
                      <tr>
                        <td>1,006</td>
                        <td>nibh</td>
                        <td>elementum</td>
                        <td>imperdiet</td>
                        <td>Duis</td>
                      </tr>
                      <tr>
                        <td>1,007</td>
                        <td>sagittis</td>
                        <td>ipsum</td>
                        <td>Praesent</td>
                        <td>mauris</td>
                      </tr>
                      <tr>
                        <td>1,008</td>
                        <td>Fusce</td>
                        <td>nec</td>
                        <td>tellus</td>
                        <td>sed</td>
                      </tr>
                      <tr>
                        <td>1,009</td>
                        <td>augue</td>
                        <td>semper</td>
                        <td>porta</td>
                        <td>Mauris</td>
                      </tr>
                      <tr>
                        <td>1,010</td>
                        <td>massa</td>
                        <td>Vestibulum</td>
                        <td>lacinia</td>
                        <td>arcu</td>
                      </tr>
                      <tr>
                        <td>1,011</td>
                        <td>eget</td>
                        <td>nulla</td>
                        <td>Class</td>
                        <td>aptent</td>
                      </tr>
                      <tr>
                        <td>1,012</td>
                        <td>taciti</td>
                        <td>sociosqu</td>
                        <td>ad</td>
                        <td>litora</td>
                      </tr>
                      <tr>
                        <td>1,013</td>
                        <td>torquent</td>
                        <td>per</td>
                        <td>conubia</td>
                        <td>nostra</td>
                      </tr>
                      <tr>
                        <td>1,014</td>
                        <td>per</td>
                        <td>inceptos</td>
                        <td>himenaeos</td>
                        <td>Curabitur</td>
                      </tr>
                      <tr>
                        <td>1,015</td>
                        <td>sodales</td>
                        <td>ligula</td>
                        <td>in</td>
                        <td>libero</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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

  renderDeleteAllButton = () => {
    const { contacts } = this.state
    if (contacts && contacts.length > 0) {
      return (
        <>
          <div className="row">
            <div className="col-md-12" style={{ marginBottom: "10px" }}>
              <button className="btn btn-warning" onClick={this.handleDeleteAll}>
                Delete all
              </button>
            </div>
          </div>
        </>
      );
    } else {
      return null
    }
  };


  loadContacts = () => {
    const dbcontacts = ContactLocalStorageService.fetchContacts();
    this.setState({ contacts: dbcontacts! });
  };

  handleCreateOrUpdate = (contact: IContact) => {
    if (contact.id > 0) {
      ContactLocalStorageService.updateContact(contact.id, contact);
    } else {
      ContactLocalStorageService.saveContact(contact);
    }
    // this.handleHideForm();
    this.loadContacts();
  };

  handleDelete = (id: number) => (e: React.MouseEvent) => {
    ContactLocalStorageService.deleteById(id);
    this.loadContacts();
  };

  handleEdit = (id: number) => (e: React.MouseEvent) => {
    const contact = ContactLocalStorageService.getById(id);
    if (contact) {
      // console.log(`handleEdit=>contact: ${JSON.stringify(contact)}`)
      this.setState({ editContact: contact });
    }
  };

  handleDeleteAll = () => {
    ContactLocalStorageService.clearData();
    this.loadContacts();
  };
}

export default Dashboard;

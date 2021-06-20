import React from "react";
import CreateContact from "./CreateContact";
import Contacts from "./Contacts";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      alldata: [],
      singledata: {
        name: "",
        firstname: "",
        email: "",
        birth: ""
      }
    };
    this.getContacts = this.getContacts.bind(this);
    this.getContact = this.getContact.bind(this);
    this.createContact = this.createContact.bind(this);
    this.updateContact = this.updateContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getContacts() {
    this.setState({ loading: true }, () => {
      fetch("http://localhost:3002/contacts")
        .then(res => res.json())
        .then(result =>
          this.setState({
            loading: false,
            alldata: result
          })
        )
        .catch(console.log);
    });
  }

  handleChange(event) {
    var name = this.state.singledata.name;
    var firstname = this.state.singledata.firstname;
    var email = this.state.singledata.email;
    var birth = this.state.singledata.birth;
    if (event.target.name === "name") name = event.target.value;
    else if (event.target.name === "firstname") firstname = event.target.value;
    else if (event.target.name === "email") email = event.target.value;
    else birth = event.target.value;

    this.setState({
      singledata: {
        name: name,
        firstname: firstname,
        email: email,
        birth: birth,
      }
    });
  }

  createContact() {
    fetch("http://localhost:3002/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.singledata)
    }).then(
      this.setState({
        singledata: {
          name: "",
          firstname: "",
          email: "",
          birth: ""
        }
      })
    );
  }

  getContact(event, id) {
    this.setState(
      {
        singledata: {
          name: "Loading...",
          firstname: "Loading...",
          email: "Loading...",
          birth: "Loading..."
        }
      },
      () => {
        fetch("http://localhost:3002/contacts/" + id)
          .then(res => res.json())
          .then(result => {
            this.setState({
              singledata: {
                name: result.name,
                firstname: result.firstname,
                email: result.email,
                birth: result.birth
              }
            });
          });
      }
    );
  }

  updateContact(event, id) {
    fetch("http://localhost:3002/contacts/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.singledata)
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          singledata: {
            name: "",
            firstname: "",
            email: "",
            birth: ""
          }
        });
        this.getContacts();
      });
  }

  deleteContact(event, id) {
    fetch("http://localhost:3002/contacts/" + id, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          singledata: {
            name: "",
            firstname: "",
            email: "",
            birth: ""
          }
        });
        this.getContacts();
      });
  }

  render() {
    const contactList = this.state.loading ? (
      <span>Loading...</span>
    ) : (
      <Contacts
        alldata={this.state.alldata}
        singledata={this.state.singledata}
        getContact={this.getContact}
        updateContact={this.updateContact}
        deleteContact={this.deleteContact}
        handleChange={this.handleChange}
      />
    );
    return (
      <div className="container">
        <span className="name-bar">
          <h1>Contact Book - Airey Jacques 4A CTO</h1>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.getContacts}
          >
            Load Contacts
          </button>
          <CreateContact
            singledata={this.state.singledata}
            createContact={this.createContact}
            handleChange={this.handleChange}
          />
        </span>
        <br />
        {contactList}
      </div>
    );
  }
}

export default App;


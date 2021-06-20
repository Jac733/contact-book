import React from "react";
import CreateContact from "./CreateContact";
import Contacts from "./Contacts";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      alldata: [],
      singledata: {
        title: "",
        author: ""
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
    var title = this.state.singledata.title;
    var author = this.state.singledata.author;
    if (event.target.name === "title") title = event.target.value;
    else author = event.target.value;

    this.setState({
      singledata: {
        title: title,
        author: author
      }
    });
  }

  createContact() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.singledata)
    }).then(
      this.setState({
        singledata: {
          title: "",
          author: ""
        }
      })
    );
  }

  getContact(event, id) {
    this.setState(
      {
        singledata: {
          title: "Loading...",
          author: "Loading..."
        }
      },
      () => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + id)
          .then(res => res.json())
          .then(result => {
            this.setState({
              singledata: {
                title: result.title,
                author: result.author ? result.author : ""
              }
            });
          });
      }
    );
  }

  updateContact(event, id) {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
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
            title: "",
            author: ""
          }
        });
        this.getContacts();
      });
  }

  deleteContact(event, id) {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          singledata: {
            title: "",
            author: ""
          }
        });
        this.getContacts();
      });
  }

  render() {
    const contactTable = this.state.loading ? (
      <span>Loading...Is usually slower than localhost...</span>
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
        <span className="title-bar">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.getContacts}
          >
            Get Contacts
          </button>
          <CreateContact
            singledata={this.state.singledata}
            createContact={this.createContact}
            handleChange={this.handleChange}
          />
        </span>
        <br />
        {contactTable}
      </div>
    );
  }
}

export default App;


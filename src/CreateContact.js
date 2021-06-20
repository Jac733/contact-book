import React from "react";

function CreateContact(props) {
  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-info"
        data-toggle="modal"
        data-target="#myModal"
      >
        New contact
      </button>
      <div
        className="modal fade"
        id="myModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" id="exampleModalLabel">
                New Contact
              </span>
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Nom
              <input
                required={true}
                type="text"
                placeholder="Nom"
                name="name"
                value={props.singledata.name}
                onChange={props.handleChange}
              />
              Prénom
              <input
                required={true}
                type="text"
                placeholder="Prénom"
                name="firstname"
                value={props.singledata.firstname}
                onChange={props.handleChange}
              />
              E-mail
              <input
                required={true}
                type="text"
                placeholder="Email"
                name="email"
                value={props.singledata.email}
                onChange={props.handleChange}
              />
              Date de naissance
              <input
                required={true}
                type="text"
                placeholder="Date de naissance"
                name="birth"
                value={props.singledata.birth}
                onChange={props.handleChange}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={props.createContact}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CreateContact;

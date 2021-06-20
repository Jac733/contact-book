import React from 'react';

function UpdateContact(props) {
    const modalIdentifier = 'update'+props.elementId
    const dataTarget = '#'+modalIdentifier
    return (
      <React.Fragment>
        
    <button type="button" className="update-contact" data-toggle="modal" data-target={dataTarget}
    onClick={(e)=>props.getContact(e,props.elementId)}></button>
        <div className="modal fade" id={modalIdentifier} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <span className="modal-title" id="exampleModalLabel">Update Contact</span>
                <button type="button" className="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </div>
                        <div className="modal-body">
                            Nom : 
                            <input type="text"
                                required={true}
                                placeholder="Nom"
                                name="name"
                                value={props.singledata.name}
                                onChange={props.handleChange}
                            />
                            Prénom : 
                            <input type="text"
                                required={true}
                                placeholder="Prénom"
                                name="firstname"
                                value={props.singledata.firstname}
                                onChange={props.handleChange}
                            />
                            E-mail : 
                            <input
                              required={true}
                              type="text"
                              placeholder="Email"
                              name="email"
                              value={props.singledata.email}
                              onChange={props.handleChange}
                            />
                            Date de naissance : 
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
                <button type="button"
                  className="btn btn-primary"
                  // Même en enlevant data-dismiss="modal" je n'ai pas pu trouver comment empêcher la modale de se fermer :(
                  data-dismiss="modal"
                  onClick={(event)=>props.updateContact(event,props.elementId)}>Update</button>
                <button type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  onClick={(event)=>props.deleteContact(event,props.elementId)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
  
        </React.Fragment>
    )
    
  }

  export default UpdateContact;
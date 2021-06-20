import React from 'react'
import UpdateContact from './UpdateContact';
import DeleteContact from './DeleteContact';

function Contacts(props) {
    var contacts = [];
    props.alldata.forEach(element => {
        contacts.push(
        <div key={element.id}>
            <td>{element.id}</td>
            <td>{element.name}</td>
            <td>{element.firstname}</td>
            <td><UpdateContact
                elementId={element.id}
                singledata={props.singledata}
                getContact={props.getContact}
                updateContact={props.updateContact}
                handleChange={props.handleChange}></UpdateContact></td>
            <td>
                <DeleteContact
                elementId={element.id}
                singledata={props.singledata}
                getContact={props.getContact}
                deleteContact={props.deleteContact}></DeleteContact>
            </td>
        </div>)
    });
    return(
      <div>
        {contacts}
      </div>
    )
}

export default Contacts;
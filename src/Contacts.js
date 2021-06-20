import React from 'react'
import UpdateContact from './UpdateContact';

function Contacts(props) {
    var contacts = [];
    props.alldata.forEach(element => {
        contacts.push(
        <div key={element.id} className="contact">
            <div className="names">
                <div className="lastname">{element.name}</div>
                <div className="firstname">{element.firstname}</div>
            </div>
            <div className="info">
                <div className="email">{element.email}</div>
                <div className="birth">{element.birth}</div>
            </div>
            <UpdateContact
                elementId={element.id}
                singledata={props.singledata}
                getContact={props.getContact}
                updateContact={props.updateContact}
                deleteContact={props.deleteContact}
                handleChange={props.handleChange}>
            </UpdateContact>
        </div>)
    });
    return(
      <div id="contact-list">
        {contacts}
      </div>
    )
}

export default Contacts;
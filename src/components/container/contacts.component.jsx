import React, { useState } from "react";
import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/contact.component";
import ContactFormComponent from "../pure/forms/contactForm.component";

const ContactsComponent = () => {
    const defaultContact1 = new Contact(
        "Luis",
        "Lavado",
        "luis.lavado.llaro@gmail.com",
        false
    );
    const defaultContact2 = new Contact(
        "Rita",
        "Mendoza",
        "rita.mendoza@gmail.com",
        false
    );
    const defaultContact3 = new Contact(
        "Jorge",
        "Mendieta",
        "jorge.mendieta@gmail.com",
        false
    );

    const [contacts, setContacts] = useState([
        defaultContact1,
        defaultContact2,
        defaultContact3,
    ]);
    
    const contactConnectAndDisconnect = (contact) => {
        console.log("Connect And Disconnect this contact:", contact);
        contact.connected = (!contact.connected);
        const tempContacts = [...contacts];
        setContacts(tempContacts);
    }

    const deleteContact = (contact) => {
        console.log("Delete this contact:", contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index, 1);
        setContacts(tempContacts);
    };

    const addContact = (contact) => {
        console.log('Add this contact:', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    } 

    return (
        <div id="contactList">
            <div className="row">
                <div className="col-12 mt-5 mb-4">
                    <h1>Contact list</h1>
                </div>
                <div className="col-12 mb-3">
                    <ContactFormComponent add={addContact}></ContactFormComponent>
                </div>
                <div className="col-12">
                    <div className="d-flex justify-content-center align-items-center">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Connected</th>
                                    <th scope="col">Actons</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact, index) => {
                                    return (
                                        <ContactComponent
                                            key={index}
                                            contact={contact}
                                            connectAndDisconnect={contactConnectAndDisconnect}
                                            remove={deleteContact}
                                        ></ContactComponent>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactsComponent;

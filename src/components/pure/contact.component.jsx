import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

const ContactComponent = ({ contact, connectAndDisconnect, remove }) => {

    const contactConnectedBadge = () => {
        let text = contact.connected ? "Online Contact" : "Contact Not Available";
        let classIcon = contact.connected ? "badge bg-primary" : "badge bg-warning";
        return (
            <h6 className="mb-0">
                <span className={classIcon}>{text}</span>
            </h6>
        );
    }
    
    const contactConnectAndDisconnectIcon = () => {
        if ( contact.connected ) {
            return (<i onClick={() => connectAndDisconnect(contact)} className="bi-toggle2-on task-action" style={{color: "green"}}></i>)
        } else {
            return (<i onClick={() => connectAndDisconnect(contact)} className="bi-toggle2-off task-action" style={{color: "gray"}} ></i>)
        }
    }

    return (
        <tr>
            <td>{contact.name}</td>
            <td>{contact.last_name}</td>
            <td>{contact.email}</td>
            <td>{contactConnectedBadge()}</td>
            <td>
                {/* <button onClick={changeState}>Connect</button> */}
                {contactConnectAndDisconnectIcon()}
                <i className="bi-trash task-action" onClick={() => remove(contact)} style={{ color: "tomato"}} ></i>
            </td>
        </tr>
    );
};

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    remove: PropTypes.func.isRequired
};

export default ContactComponent;

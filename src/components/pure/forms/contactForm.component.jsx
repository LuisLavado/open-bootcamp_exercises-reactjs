import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Contact } from "../../../models/contact.class";

const ContactFormComponent = ({ add }) => {

    const [showform, setShowform] = useState(false);

    const nameRef = useRef('');
    const lastNameRef = useRef('');
    const emailRef = useRef('');

    const addContact = (e) => {
        e.preventDefault();

        if(nameRef.current.value === '') {
            alert('Complete the Name.');
            return false;
        }
        if(lastNameRef.current.value === '') {
            alert('Complete the Last Name.');
            return false;
        }
        if(emailRef.current.value === '') {
            alert('Complete the Email.');
            return false;
        }

        const newContact = new Contact(
            nameRef.current.value,
            lastNameRef.current.value,
            emailRef.current.value,
            false
        );
        add(newContact);
        nameRef.current.value = '';
        lastNameRef.current.value = '';
        emailRef.current.value = '';
    };

    return (
        <form onSubmit={addContact}>
            <div className="d-flex" style={showform ? {flexDirection: 'row'} : {flexDirection: 'row-reverse'}}>
                <div className="row wrap-adding" style={showform ? {display: 'flex'} : {display: 'none'}}>
                    <div className="col-4 mb-3">
                        <label htmlFor="Name" className="form-label">
                            Name
                        </label>
                        <input ref={nameRef}
                            type="text"
                            className="form-control"
                            id="Name"
                            placeholder="Name"
                        />
                    </div>
                    <div className="col-4 mb-3">
                        <label htmlFor="LastName" className="form-label">
                            Last Name
                        </label>
                        <input ref={lastNameRef}
                            type="text"
                            className="form-control"
                            id="LastName"
                            placeholder="Last Name"
                        />
                    </div>
                    <div className="col-4 mb-3">
                        <label htmlFor="Email" className="form-label">
                            Email address
                        </label>
                        <input ref={emailRef}
                            type="email"
                            className="form-control"
                            id="Email"
                            placeholder="name@example.com"
                        />
                    </div>
                </div>
                <div className="wrap-btn-create">
                    <button type="button" onClick={() => {setShowform(true)}} className="btn btn-success m-1" style={showform ? {display: 'none'} : {display: 'inline-block'}}>
                        Create
                    </button>
                    <button type="submit" className="btn btn-primary m-1" style={showform ? {display: 'inline-block'} : {display: 'none'}}>
                        Add
                    </button>
                    <button type="button" onClick={() => {setShowform(false)}} className="btn btn-secondary m-1" style={showform ? {display: 'inline-block'} : {display: 'none'}}>
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    );
};

ContactFormComponent.propTypes = {
    add: PropTypes.func.isRequired,
};

export default ContactFormComponent;

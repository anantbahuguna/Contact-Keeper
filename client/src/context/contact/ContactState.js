import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './ContactContext'
import ContactReducer from './ContactReducer'

import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'dsfsf',
                email: 'fdsf',
                phone: '423424',
                type: 'personal'
            },
            {
                id: 2,
                name: 'dsfsf',
                email: 'fdsf',
                phone: '423424',
                type: 'professional'
            }
        ]
    };

    const [state, dispatch] = useReducer(ContactReducer, initialState);

    // ******ACTIONS*********

    // Add contact
    const addContact = contact => {
        contact.id = uuidv4();
        dispatch({ type: ADD_CONTACT, payload: contact })
    }

    // Delete Contact

    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id })
    }

    // Set Current contact

    // Clear current contact

    // Update contract

    // filter contact

    // clear filter

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                addContact,
                deleteContact
            }}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState;
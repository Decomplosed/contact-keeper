import React, { useReducer } from 'react'
import uuid from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types'

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jill@gmail.com',
        phone: '111-111-1111',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Lucky Luke',
        email: 'luke@gmail.com',
        phone: '113-121-1143',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Harry Potter',
        email: 'hpotter@gmail.com',
        phone: '112-431-1431',
        type: 'professional'
      }
    ],
    current: null
  }

  const [state, dispatch] = useReducer(contactReducer, initialState)

  // Add contact

  const addContact = contact => {
    contact.id = uuid.v4()
    dispatch({ type: ADD_CONTACT, payload: contact })
  }

  // Delete Contact

  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id })
  }

  // Set current contact

  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact })
  }

  // Clear current contact

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }

  // Update Contact

  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact })
  }

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        updateContact,
        deleteContact,
        setCurrent,
        clearCurrent
      }}>
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState
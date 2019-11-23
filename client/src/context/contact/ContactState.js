import React, { useRedeucer } from 'react'
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
    ]
  }
}
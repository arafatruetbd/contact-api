'use strict';

const handlers = require('../handlers/root');
const validations = require('../validations/contact_data');

module.exports = [
  {
    path: '/',
    method: 'GET',
    handler: handlers.getAllContact,
    options: { auth: false },
  },
  {
    path: '/add/contact/',
    method: 'POST',
    handler: handlers.addContact,
    options: {
      auth: false,
      validate: validations.post
    },
  },
  {
    path: '/edit/contact/{id}/',
    method: 'PATCH',
    handler: handlers.updateContact,
    options: {
      auth: false,
      validate: validations.update
    },
  },
  {
    path: '/delete/contact/{id}/',
    method: 'DELETE',
    handler: handlers.deleteContact,
    options: { auth: false },
  },
  {
    path: '/search/contact/{searchText}/',
    method: 'GET',
    handler: handlers.getContactBySearch,
    options: { auth: false },
  },
];

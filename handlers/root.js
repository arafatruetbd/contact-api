'use strict';

const Contact = require('../models/contact');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


module.exports = {

  //Get All Contact
  getAllContact: async (request, h) => {
    try {
      return await Contact.findAll({});
    } catch (error) {
      return h.response({ message: 'Server Error!', success: false }).code(500);
    }
  },

  //Add a Contact
  addContact: async (request, h) => {
    try {
      await Contact.create({ ...request.payload });
      return h.response({ message: 'Contact Created Successfully!', success: true }).code(200);
    } catch (error) {
      return h.response({ message: 'Server Error!', success: false }).code(500);
    }
  },

  //Update a Contact
  updateContact: async (request, h) => {
    try {
      await Contact.update({ ...request.payload }, { where: { id: request.params.id } });
      return h.response({ message: 'Contact Updated Successfully!', success: true }).code(201);
    } catch (error) {
      console.log(error);
      return h.response({ message: 'Server Error!', success: false }).code(500);
    }
  },

  //Delete a Contact
  deleteContact: async (request, h) => {
    try {
      await Contact.destroy({ where: { id: request.params.id } });
      return h.response({ message: 'Contact Deleted Successfully!', success: true }).code(201);
    } catch (error) {
      return h.response({ message: 'Server Error!', success: false }).code(500);
    }
  },

  //Get Contact by Search
  getContactBySearch: async (request, h) => {
    try {
      return await Contact.findAll({ where: { phone: { [Op.iLike]: `${request.params.searchText}%` } } });
    } catch (error) {
      console.log(error);
      return h.response({ message: 'Server Error!', success: false }).code(500);
    }
  },
};

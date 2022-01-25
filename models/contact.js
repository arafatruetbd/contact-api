'use strict';

const Sequelize = require('sequelize');
const sequelize = require('./common');

const Contact = sequelize.define('contact', {
  // attributes
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    unique: {
      args: true,
      msg: 'Phone already in use.'
    },
    allowNull: true,
    defaultValue: null,
    validate: {
      customValidator(value) {
        const validatePhone = /[!@#$% ^&*()_+\-=\[\]{};':"\\|,.<>\/?A-Za-z]/;
        if ((validatePhone.test(value) || value.length !== 11) && value !== null) {
          throw new Error("Invalid phone number");
        }
      }
    }
  }
});

Contact.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
}


module.exports = Contact;

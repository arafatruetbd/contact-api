'use strict';

const Joi = require('@hapi/joi');

// const phoneRegExp = /^(?:\+88|88)?(01[3-9]\d{8})$/

module.exports = {
  post: {
    payload: Joi.object({
      name: Joi.string().min(2).max(128).required(),
      phone: Joi.string().min(11).max(15).required()
    }),
  },
  update: {
    payload: Joi.object({
      name: Joi.string().min(2).max(128).optional(),
      phone: Joi.string().min(11).max(15).optional()
    }),
  },

};

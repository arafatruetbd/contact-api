const Contact = require('./contact');

exports.sync = async function () {
    await Contact.sync({ alter: true });
};

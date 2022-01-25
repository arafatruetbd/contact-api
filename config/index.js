'use strict';

module.exports = {
    db: {
        dbName: 'contact_book',
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASS || 'postgres',
        host: process.env.DB_HOST || '127.0.0.1',
        port: process.env.DB_PORT || 5432,
        logging: query => console.log(query)
    },
    server: {
        port: 8000,
        host: '0.0.0.0',
        debug: {
            request: ['error'],
        },
    }
};

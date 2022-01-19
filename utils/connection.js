const knex = require('knex')(
    {
        client: 'mysql',
        connection: process.env.db4free,
        asyncStackTraces: false,
        debug: false
    });

module.exports = knex;
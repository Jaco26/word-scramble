const pg = require('pg');
const url = require('url');
let config = {};

if(process.env.DATABASE_URL) {
    const params = url.parse(process.env.DATABASE_URL);
    const auth = params.auth.split(':');

    config = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: true,
        max: 10,
        idleTimeoutMillis: 30000,
    };
} else {
    config = {
        user: process.env.PG_USER || null,
        password: process.env.DATABASE_SECRET || null,
        host: process.env.DATABASE_SERVER || 'localhost',
        database: process.env.DATABASE_NAME || 'word_scramble',
        max: 10,
        idleTimeoutMillis: 30000,
    };
}

module.exports = new pg.Pool(config);
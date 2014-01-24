expressjs-app
=============

with sequelize.js as an ORM and gulb.js for tasks

#### add your database config attr

- Navigate to your app root directory
- `mkdir config && touch local.js`
- Confugure your database, and refer to sequelize.js usage/options for more details
``` Javascript
// local.js
module.exports = {
        dbname:'DB_NAME',
        username: 'YOUR_USRNAME',
        password: 'YOUR_PSWD',
        host: "YOUR_HOST",
        port: YOUR_PORT,
        dialect: 'postgres' // Sequelize.js currently supported: 'mysql', 'sqlite', 'postgres'
};

```

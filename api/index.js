const app = require('./config/expressConfig');
const sequelize = require('./database');
const Diet = require('./src/domains/diets/models/Diet');
const User = require('./src/domains/users/models/User');


app.get('/', async(req, res,next) => {
    await sequelize.sync
})
// sequelize.sync();

app.listen(console.log(sequelize.sync()));
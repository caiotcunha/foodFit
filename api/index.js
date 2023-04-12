const app = require('./config/expressConfig');
const sequelize = require('./database');
const Diet = require('./src/domains/diets/models/Diet');
const User = require('./src/domains/users/models/User');


app.get('/', async(req, res,next) => {
    await sequelize.sync()
})

// Se você não comentar, vai resetar o banco toda vez que o app rodar
// sequelize.sync();

app.listen(process.env.PORT, console.log('Server running in port 3030'));
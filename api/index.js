const app = require('./config/expressConfig');
const sequelize = require('./database');
const Diet = require('./src/domains/diets/models/Diet');
const User = require('./src/domains/users/models/User');
const user = require("./routes/user")
const diet = require("./routes/diet")

app.get('/', async(req, res,next) => {
    await sequelize.sync()
})

// Rotas
    app.use('/user', user)
    app.use('/diet', diet)


// Se você não comentar, vai resetar o banco toda vez que o app rodar
// sequelize.sync();

app.listen(process.env.PORT, console.log('Server running in port 3030'));
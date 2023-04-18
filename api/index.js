const app = require('./config/expressConfig');

// Se você não comentar, vai resetar o banco toda vez que o app rodar
// sequelize.sync();

app.listen(process.env.PORT, console.log('Server running in port 3030'));
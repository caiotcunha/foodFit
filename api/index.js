const app = require('./config/expressConfig');

// sequelize.sync();

app.listen(process.env.PORT, console.log(`Server running on port ${process.env.PORT}`));
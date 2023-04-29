const User = require("../models/User");
const bcrypt = require('bcrypt');
const randtoken = require('rand-token');
const statusCodes = require("../../../../utils/constants/statusCodes");
const sendEmail = require("../../../../utils/functions/sendEmail");
const message = require('../../../../utils/constants/message');

const QueryError = require("../../../../errors/QueryError");
const InternalServerError = require("../../../../errors/InternalServerError");
const generalConstants = require('../../../../utils/constants/generalConstants');

class UserService {
    async create(body){
        const user = {
            name: body.name,
            email: body.email,
            password: body.password,
            weight: body.weight,
            height: body.height,
            age: body.age
        }

        user.password = await bcrypt.hash(body.password, generalConstants.SALT_ROUNDS);

        await User.create(user);
    }

    async getAll(){
        const users =  await User.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });
        
        if (!users){
            throw new QueryError("Não há usuários no banco de dados!");
        }

        return users;
    }

    async myProfile(userId){
        const user =  await User.findByPk(userId, {
            attributes: {
                exclude: ['createdAt', 'updated_at', 'password']
            }
        });

        if(!user){
            throw new QueryError("Usuário não encontrado!");
        }
        
        return user;
    }

    async update(id, body){
        const user =  await User.findByPk(id);

        if (!user) {
            throw new QueryError('Usuário não encontrado!');
        }

        if (body.password) {
            body.password = await bcrypt.hash(body.password, generalConstants.SALT_ROUNDS);
        }

        await user.update(body);
    }
}

module.exports = new UserService;
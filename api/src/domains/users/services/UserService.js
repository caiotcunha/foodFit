const User = require("../models/User");
const bcrypt = require('bcrypt');
const randtoken = require('rand-token');
const sendEmail = require("../../../../utils/functions/sendEmail");
const message = require('../../../../utils/constants/message');

const QueryError = require("../../../../errors/QueryError");
const InternalServerError = require("../../../../errors/InternalServerError");
const generalConstants = require('../../../../utils/constants/generalConstants');

class UserService {
    async userExists (email) {
        const user = await User.findOne({
            where: {
                email: email
            }
        });

        if(user){
            throw new QueryError('Usuário já cadastrado');
        }

    }

    async create(body){
        const user = {
            name: body.name,
            email: body.email,
            password: body.password,
            weight: body.weight,
            height: body.height,
            age: body.age
        }

        await this.userExists(body.email);

        user.password = await bcrypt.hash(body.password, generalConstants.SALT_ROUNDS);

        await User.create(user);
    }

    async getAll(){
        const users =  await User.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'password', 'passwordToken']
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
                exclude: ['createdAt', 'updatedAt', 'password', 'passwordToken']
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

    async forgotPassword(email){
        const user = await User.findOne({
            where: {
                email: email
            }
        });
        
        if (!user) {
            throw new QueryError('Confira o email fornecido.');
        }

        var token = randtoken.generate(6);
        var sent = await sendEmail(email, token, message.PASSWORD_SUBJECT, message.HTML_PASSWORD);

        if (sent === true) {
            user.passwordToken = token;
            await user.save();
        } else {
            throw new InternalServerError('Erro interno do servidor no envio do email com o token.');
        }
    }

    async validateToken(token){
        const user = await User.findOne({
            where: {
                passwordToken: token
            }
        });

        if (!user) {
            throw new QueryError('Confira se o token usado é semelhante ao que foi enviado ao seu email.');
        }

        return user.id;
    }

    async resetPassword(id, password){
        const user = await User.findByPk(id);

        if (!user) {
            throw new QueryError('Usuário não encontrado!');
        }

        if(user.passwordToken == null){
            throw new PermissionError('Você não possui permissão para realizar essa ação');
        }

        const newPassword = await bcrypt.hash(password, generalConstants.SALT_ROUNDS);

        user.passwordToken = null;
        user.password = newPassword;
        await user.save();
    }
}

module.exports = new UserService;
const Diet = require("../models/Diet");
const User = require("../../users/models/User");
const generateDiet = require('../../../../utils/functions/generateDiet');
const message = require('../../../../utils/constants/message');

const QueryError = require("../../../../errors/QueryError");
const PermissionError = require("../../../../errors/PermissinError");
const sendEmailDiet = require("../../../../utils/functions/sendEmailDiet");

class DietService {
    async create(body, userId) {
        const diet = {
            diet: body.diet,
            weight: body.weight,
            goal: body.goal,
            calories: body.calories,
            restrictions: body.restrictions,
            UserId: userId
        }

        diet.diet = await generateDiet(diet.weight, diet.goal, diet.calories, diet.restrictions);
        await Diet.create(diet);
    }

    async getAllUserDiets(userId) {
        const user = User.findByPk(userId);

        if (!user) {
            throw new ('Id de usuário não encontrado no banco.');
        }

        const diets = await Diet.findAll({
            where: {
                UserId: userId
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });

        if (!diets) {
            throw new QueryError('Não há dietas para esse usuário.');
        }

        return diets;
    }

    async getUserDiet(dietId, userId) {
        const diet =  await Diet.findByPk(dietId, {
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });
        
        if (!diet) {
            throw new QueryError('Confira o id de dieta fornecido.');
        }

        if (diet.UserId != userId) {
            throw new PermissionError('Esta dieta não pertence ao usuário fornecido.');
        }

        return diet;
    }

    async sendEmail(dietId, userId) {
        const user = User.findByPk(userId);

        if (!user) {
            throw new ('Id de usuário não encontrado no banco.');
        }

        const diet = await Diet.findByPk(dietId);

        if (!diet) {
            throw new QueryError('Confira o id de dieta fornecido.');
        }

        const sent = await sendEmailDiet(user.email, message.DIET_SUBJECT, message.DIET_TEXT, diet.diet);

        if (sent === true) {
            user.passwordToken = token;
            await user.save();
        } else {
            throw new InternalServerError('Erro interno do servidor no envio do email com o token.');
        }        
    }
}

module.exports = new DietService;
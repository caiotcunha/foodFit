const Diet = require("../models/Diet");
const User = require("../../users/models/User");
const generateDiet = require('../../../../utils/functions/generateDiet');

const QueryError = require("../../../../errors/QueryError");


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

    async getUserDiets(userId) {
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
}

module.exports = new DietService;
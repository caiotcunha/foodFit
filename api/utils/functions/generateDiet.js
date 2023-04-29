const { Configuration, OpenAIApi } = require('openai');

async function generateDiet (weight, goal, calories, restrictions) {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    
    const openai = new OpenAIApi(configuration);

    const diet = `Eu tenho ${weight}kg e quero uma dieta com 5 refeições com objetivo de ${goal}. Sendo que minhas restrições são que ela tenha ${calories} calorias e ${restrictions}`;

    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: diet,
        max_tokens: 2047,
        temperature: 0.75
    });

    return (response.data.choices[0].text);
}

module.exports = generateDiet;
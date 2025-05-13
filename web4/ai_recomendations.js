const openai = require("openai");
async function getAIRecommendation(input) {
    const response = await openai.chat({ prompt: input });
    console.log("AI Response:", response);
}
getAIRecommendation("Give me a Web4 strategy.");


const openai = require("openai");

async function getAIRecommendation(input) {
    const response = await openai.chat({ prompt: input });
    console.log("AI suggestion for AR UI:", response);
}

getAIRecommendation("How can AR enhance Web4 user experience?");



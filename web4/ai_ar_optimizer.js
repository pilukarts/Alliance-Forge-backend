async function adaptARInterface(userPreference) {
    const response = await openai.chat({ prompt: `Generate AR interface suggestions for ${userPreference}` });

    const arElements = document.querySelectorAll(".ar-object");
    arElements.forEach(element => {
        element.style.opacity = response.data.includes("high visibility") ? "1" : "0.5";
    });

    console.log("AI-driven AR UI adjustments applied:", response.data);
}

adaptARInterface("immersive finance experience");

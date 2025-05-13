async function showWalletAssetsInAR(walletAddress) {
    const response = await openai.chat({ prompt: `Suggest AR visualization for crypto wallet: ${walletAddress}` });

    console.log("AR-enhanced wallet view:", response.data);
    document.querySelector("#wallet-display").innerText = response.data;
}

showWalletAssetsInAR("0x123456789abc...");

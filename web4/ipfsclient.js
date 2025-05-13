const ipfsClient = require("ipfs-http-client");
const ipfs = ipfsClient("https://ipfs.infura.io:5001");

async function uploadFile(content) {
    const result = await ipfs.add(content);
    console.log("File uploaded to IPFS:", result.path);
}
uploadFile("Web4 data stored in IPFS.");


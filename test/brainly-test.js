const brainly = require("../index")

async function test() {
const logs = await brainly("indonesia", 20)
return logs
}

test().then(b => console.log(b))
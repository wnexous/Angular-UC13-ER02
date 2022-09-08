let fetch = require("node-fetch");
let url = "http://nexcld.sytes.net:3001/login"
export function post(usuario) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

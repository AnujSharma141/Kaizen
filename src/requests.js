
const https = require('https')

const request = async

https.get('https://myanimelist.net/topanime.php', res =>{

    res.on('data', data => console.log(process.stdout.write(data)))
    
})
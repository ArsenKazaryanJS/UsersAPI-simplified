const sendRespons = require('./sendRespons.js')
const createPath = require('../createPathFunc.js')
const fs = require('fs').promises


const handleUpdateUserName = (req,res) => {
let body = [];

req.on('data', (chunk) => body.push(chunk))

req.on('end', () => {
    body = JSON.parse(body.toString())
    const id = req.url.split('/')[3]

    fs.readFile(createPath('db', 'users.json'),'utf-8')
    .then((data) => {
        const users = JSON.parse(data)
        const updateUserName = users.map((user) => {
            if(user.id === +id){
                user.firstName = body.firstName
            }
            return user
        })


    fs.writeFile(createPath('db','users.json'),JSON.stringify(updateUserName))
    .then(()=> sendRespons(req,res,'userName','application/json'))    
    }) 
    
})
}


module.exports = handleUpdateUserName
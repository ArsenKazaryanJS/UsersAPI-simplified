const createPath = require("../createPathFunc.js");
const sendResponse = require("./sendRespons.js");
const fs = require("fs").promises;

const handleDeletUser = (req,res) => {

const id = req.url.split('/')[3]
 fs.readFile(createPath('db','users.json'),'utf-8')
 .then((data) => {
    const users = JSON.parse(data)
    const deletingUser = users.filter((el) => el.id !== +id)

 fs.unlink(createPath('db','users.json'),JSON.stringify(users))
 fs.writeFile(createPath('db','users.json'),JSON.stringify(deletingUser))
 sendResponse(req,res,`User${id}-id In Delet`,'application/json')   
 })

}

module.exports = handleDeletUser;
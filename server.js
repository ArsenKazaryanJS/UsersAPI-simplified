const http = require("http");
const {handleGetRoot,handleGetUsers,handleGetUserId,handleGetUsersName} = require('./serverFunctions/getFunc.js')
const handlePostNewUser = require('./serverFunctions/postFunc.js')
const port = 3001;


const server = http.createServer((req,res)=>{
  switch(true){
    case req.url === '/' && req.method === 'GET':
      handleGetRoot(req,res)
    break
    case req.url === '/api/users' && req.method === 'GET':
      handleGetUsers(req,res)
    break
    case req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET':
      handleGetUserId(req,res)
    break 
    case req.url.includes('?') && req.method === 'GET':
      handleGetUsersName(req,res)
    break
    case req.url === '/api/users' && req.method === 'POST':
    handlePostNewUser(req,res)
    break
  }
})


server.listen(port, (err) => err ? console.log(err) : console.log(`Server Is Runing ${port} PORT`)
);

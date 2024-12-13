const sendResponse = (req, res, data, contentType) => {
  if (req.method === "GET") {
    res.writeHead(200, { "content-type": contentType });
    res.write(data);
    res.end();
  } else if (req.method === "PATCH" || req.method === 'PUT') {
    res.writeHead(200,{ "content-type": contentType });
    res.write(`${data} Update Completed Successfully `);
    res.end();
  }else if (req.method === "DELETE") {
    res.writeHead(200,{ "content-type": contentType });
    res.write(data);
    res.end();
  } else if(req.method === 'POST'){
    res.writeHead(201, { "content-type": contentType });
    res.write(data);
    res.end();
  } else {
    res.writeHead(404, { "content-type": contentType });
    res.write("NOT FOUND" + data.mesage);
    res.end();
  }
};


module.exports = sendResponse;

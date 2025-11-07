import http = require("http");

async function init() { 

    const httpServer = http.createServer();
    const PORT = process.env.PORT ? process.env.PORT :8000;

    httpServer.listen(PORT, () =>{
        console.log("Server is running on port 8000")
    })
    
    
}

init();
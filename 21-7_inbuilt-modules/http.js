//Stops the server from accepting new connections and closes all connections connected to this server which are not sending a request or waiting for a response. See net.Server.close().


// const http = require('node:http');

// const server = http.createServer({ keepAliveTimeout: 100000 }, (req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({
//     data: 'Hello World!',
//   }));
// });

// server.listen(8000);
// // Close the server after 10 seconds
// setTimeout(() => {
//   server.close(() => {
//     console.log('server on port 8000 closed successfully');
//   });
// }, 10000);


///////////////////////////////////////////////////////

// const http = require('node:http');

// const server = http.createServer({ keepAliveTimeout: 10000 }, (req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({
//     data: 'Hello World!',
//   }));
// });

// server.listen(8000);

// // Close the server after 10 seconds
// setTimeout(() => {
//   server.close(() => {
//     console.log('server on port 8000 closed successfully');
//   });
//   // Closes all connections, ensuring the server closes successfully
//   server.closeAllConnections();
// }, 10000);


////////////////////////////////////

// CLOSE IDLE CONNECTIONS 

// const http = require('node:http');

// const server = http.createServer({ keepAliveTimeout: 5000 }, (req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({
//     data: 'Hello World!',
//   }));
// });

// server.listen(8000);
// // Close the server after 10 seconds
// setTimeout(() => {
//   server.close(() => {
//     console.log('server on port 8000 closed successfully');
//   });
//   // Closes idle connections, such as keep-alive connections. Server will close
//   // once remaining active connections are terminated
//   server.closeIdleConnections();
// }, 6000);


//////////////////////////////////////////////////////


// HTTP SERVER 


const http = require("node:http");


/// SERVER INSTANCE

let blogPosts = [
    {
        "blogTitle": "TITLE OF MY BOOK",
        "blogDescription": "THIS IS DESCRIPTION",
        "author": "RACHIT WALIA",
        "date": "21 JULY"
    }
]


const server = http.createServer((req, res) => {
    try {
        if (req.method == "GET" && req.url == "/") {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end("HELLO THIS IS THE HOMEPAGE");
        }
        if (req.method == "GET" && req.url == "/something") {
            try {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end("HELLO THIS IS THE SOMETHING PAGE");
            }
            catch (err) {
                console.log("ERROR", err)
            }
        }
        if (req.method == "GET" && req.url == "/blogs") {
            try {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(blogPosts));
            }
            catch (err) {
                console.log("ERROR", err)
            }
        }
    }
    catch (err) {
        console.log("ERRORR", err)
    }
    // else{
    //     console.log("ERROR OCCURRED");
    // }
})

server.listen(8000, () => {
    console.log("YOUR SERVER IS RUNNING ON 8000");
})
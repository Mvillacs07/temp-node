const http = require('http')

const server = http.createServer((req, res) => {  /** first param incoming request object.. next response sent bsck */
if(req.url === '/') {
    res.end('Welcome to our home page')  // end our respose
}
if(req.url === '/about') {
    res.end('Here is our short history')
}
res.end(         /** if resouce is not available */
`<h1>Oops!</h1>
<p>We can't seem to find the page you are looking for</p>
<a href="/"> back home</a>
`) 
})

server.listen(5000)              /**port number is arbituary */ // web servers keep on listening for requests
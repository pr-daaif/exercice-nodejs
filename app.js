const https = require('https')
const http = require('http')
const fs = require('fs').promises

const server = http.createServer()

server.on('request', async (req, res) => {
    console.log(req.url)
    res.setHeader('content-type', 'text/html')
    if(req.url === '/') {
        const content = await fs.readFile('index.html')
        res.end(content)
        
    } else if(req.url === "/about") {
        const content = fs.readFileSync(('about.html'))
        res.end(content)
    } else {
        res.statusCode = 404
        res.end('<h1>Not found :  404</h1>')
    }
    

})

server.on('listening', () => console.log("server started") )

server.listen(3000, () => console.log("server started!!!!!!!!"))

// https.get('https://api.daaif.net/products', (res) => {
//     let content = ""

//     res.on('data', (chunk) => {
//         content += chunk
//     })
//     res.on('end', () => {
//         console.log(JSON.parse(content))
//     })
    
// })

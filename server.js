const express = require('express')
const app = express()
let port = 3000

app.get('/docker-test', (req, res) => {
    res.send('Hello World! we are baby Developers. I hope you are happy to see us.')
})

if(process.env.PORT){
  port = process.env.PORT
}
app.listen(port, () => {
    console.log("My server is Here  http://localhost/:$%7Bport%7D")
})
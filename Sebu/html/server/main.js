const express = require('express')
const app = express()
const port = 3000

app.get('/:mail/:pass',(req, res) => {
    console.log(req.params.mail + " : " + req.params.pass)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
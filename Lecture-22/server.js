const express = require('express')
const app = express()

app.use('/',express.static(__dirname+'/public'))

app.get('/fare',(req,res)=>{
    let km = req.query.km
    let min = req.query.min

    let fare = 25
    if(km>2) fare+=(km-2)*8
    if(min>15) fare+=(min-15)
    res.send({
        fare
    })
})

module.exports = {
    app
}
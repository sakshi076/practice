const express = require('express')
const path = require('path')
const app= express()

const port =8081

app.use(express.static(path.join(__dirname,'public')))

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.get('/',function(req,res){
    res.render('demo')
})

app.listen(port,function(error){
    if(error)throw error
    console.log(`server created successfully on port: ${port}`)
})
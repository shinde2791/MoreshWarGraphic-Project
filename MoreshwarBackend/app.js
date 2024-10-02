 
const express=require('express')
const app=express()
const port=4000
const cors=require('cors')
const route=require('./Routes/contact1')
require('./Database/Database')

app.use(express.json())
app.use(cors())
app.use('/api',route)



app.listen(port,()=>{
    console.log(`i am running on ${port}`)
})
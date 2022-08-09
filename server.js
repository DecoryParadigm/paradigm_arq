

const express = require('express')
const path = require('path');
const app = express()




// app registry
app.use(express.static(path.join(__dirname, 'public/pages')))



// Routes 
app.get('/', (req,res)=>{
    
res.sendFile(path.join(__dirname, 'index.html'));
})



app.listen(3000 , () => {
    console.log(`Example app listening on port change`)
})

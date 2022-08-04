import app from "./app.js"

const port = process.env.PORT || 2020

app.listen(port, ()=>{
    console.log(`http://localhost:${port}/`)
})
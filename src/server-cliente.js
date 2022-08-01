import app from "./app-cliente.js"

const port = 2020

app.listen(port, ()=>{
    console.log(`http://localhost:${port}/`)
})

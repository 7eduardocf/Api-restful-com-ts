import express from "express"
import config from "config"

const app = express()

//JSON middleware
app.use(express.json())

//APP port
const port = config.get<number>("port")

app.listen(3000, async()=>{
    console.log("Aplicação funcionando");
    
})
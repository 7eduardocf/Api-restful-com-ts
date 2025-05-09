import express from "express"
import config from "config"
import router from "./router"
import connect from "../config/db"
require("dotenv").config()


const app = express()

//JSON middleware
app.use(express.json())
app.use("/api/",router)

//APP port
const port = config.get<number>("port")

app.listen(3000, async()=>{
    console.log("Aplicação funcionando");
    await connect()
})
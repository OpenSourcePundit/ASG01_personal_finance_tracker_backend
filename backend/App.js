import express from "express"
import cors from "cors"
import {config} from "dotenv"
import helmet from "helmet"



import { errorHandler } from "./middlewares/errorHandler.js";

config({path:"backend/config/config.env"})

const app = express()

//using middlewares
app.use(helmet())
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/api/v1',IncomeRouter)

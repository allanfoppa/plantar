import express from "express"
import helmet from "helmet"
import cors from "cors"
import path from 'path'
import { fileURLToPath } from 'url';
import morgan from "morgan"
import { createStream } from "rotating-file-stream"

// APPLICATION ROUTES
import listRoutes from "./components/v1/list/list.routes.js"
import { errorHandler } from "./middlewares/error-handler.js";

// INSTANTIATE APP
const app = express()

// __DIRNAME TO PROVIDE ASSETS
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// CORE USES
app.use(cors())
app.use(helmet())
app.use(express.json())

// CREATE A ROTATING WRITE STREAM
var accessLogStream = createStream('requests.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'logs')
})

// SETUP THE LOGGER
app.use(morgan('combined', { stream: accessLogStream }))

// GET IMAGES FROM DIRECTORY
app.use('/images', express.static(path.join(__dirname, 'uploads')))

// MIDDLEWARE IN ALL ROUTES
app.use(errorHandler)

// HOME ROUTE
app.get('/api/v1/welcome', function (_req, res) {
	res.json({
    message: "Olá, eu sou uma das APIs do Plantar."
  })
})

// LIST OF APP ROUTES V1
app.use("/api/v1", listRoutes)

export default app

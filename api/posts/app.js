import express from "express"
import routes from "./routes.js"
import helmet from "helmet"
import cors from "cors"
import path from 'path'
import { fileURLToPath } from 'url';
import morgan from "morgan"
import { createStream } from "rotating-file-stream"

const app = express()
const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(routes)

// CREATE A ROTATING WRITE STREAM
var accessLogStream = createStream('requests.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'logs')
})

// SETUP THE LOGGER
app.use(morgan('combined', { stream: accessLogStream }))

// GET IMAGES FROM DIRECTORY
app.use('/images', express.static(path.join(__dirname, 'uploads')))

// HOME ROUTE
app.get('/', function (_req, res) {
	res.json({
    message: "Olá, eu sou uma das APIs do Plantar."
  })
})

export default app

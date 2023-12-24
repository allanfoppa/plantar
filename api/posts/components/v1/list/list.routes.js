import { Router } from 'express'

import ListController from './list.controller.js'

// INITIATE ROUTES
const listRoutes = Router()

// ROUTES
listRoutes.get('/list-of-plants', ListController.getAll)

// EXPORT
export default listRoutes

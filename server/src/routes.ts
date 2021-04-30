import { Router } from 'express'
const routes = Router()

import ClassesController from './controllers/classesController'
import ConnetionController from './controllers/connectionsController'

const classesController = new ClassesController()
const connetionController = new ConnetionController()


routes.get('/classes', classesController.index)
routes.post('/classes', classesController.create)
routes.get('/connections', connetionController.index)
routes.post('/connections', connetionController.create)

export default routes
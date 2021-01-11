import express from 'express'

import WorkspaceController from './controllers/WorkspaceController.js'

const routes = express.Router()

routes.get('/skills', WorkspaceController.index)
    .delete('/skills', WorkspaceController.delete)

export default routes
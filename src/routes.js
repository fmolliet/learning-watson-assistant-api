import express from 'express';
// controllers
import WorkspaceController from './controllers/WorkspaceController.js';

const workspace = new WorkspaceController();

const routes = express.Router();

routes.get('/skills', workspace.index)
    .delete('/skills', workspace.delete);

export default routes;
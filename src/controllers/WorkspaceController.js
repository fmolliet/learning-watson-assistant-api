import _workspace from '../services/WorkspaceServices.js';

export default class WorkspaceController {
    
    async index(req, res){
        try{
            const result = await _workspace.indexWorkspaces();
            return res.status(200).json(result.result.workspaces);
        }catch (err){
            return res.status(400).json({Error: err.message});
        }
    }
    
    async delete(req, res){
        try{
            const result = await _workspace.deleteWorkspace(req.body);
            return res.status(200).json(result.result);
        }catch (err){
            return res.status(400).json({Error: err.message});
        }
    }
}
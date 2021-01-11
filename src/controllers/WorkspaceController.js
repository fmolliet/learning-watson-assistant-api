import WorkspaceServices from '../services/WorkspaceServices.js'

export default {
    
    async index(req, res){
        try{
            const result = await WorkspaceServices.indexWorkspaces()
            return res.status(200).json(result.result)
        }catch (err){
            return res.status(400).json({Error: err.message})
        }
    },
    
    async delete(req, res){
        try{
            const result = await WorkspaceServices.deleteWorkspace(req.body)
            return res.status(200).json(result.result)
        }catch (err){
            return res.status(400).json({Error: err.message})
        }
    }
}
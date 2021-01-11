import WorkspaceServices from '../services/WorkspaceServices.js'

export default {
    
    async index(req, res){
        try{
            const result = await WorkspaceServices.indexWorkspaces()
            return res.status(200).json(result.result)
        }catch (err){
            return res.status(400).json(err)
        }
    },
    
    async delete(req, res){
        try{
            if ( !req.body.workspaceId ) throw new Error("Ausencia de parâmetros")
            const result = await WorkspaceServices.deleteWorkspace(req.body)
            return res.status(200).json(result.result)
        }catch (err){
            console.error(err)
            return res.status(400).json({"Error":err})
        }
    }
}
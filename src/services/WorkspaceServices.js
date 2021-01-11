import assistant from '../utils/AssistantV1.js'
    
class WorkspaceServices {
    
    
    async indexWorkspaces(){
        return await assistant.listWorkspaces();
    }
    
    async deleteWorkspace( params ){
        return await assistant.deleteWorkspace(params);
    }
}

export default new WorkspaceServices();


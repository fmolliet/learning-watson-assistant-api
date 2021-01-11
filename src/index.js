require('dotenv').config();

const assistant = require('./utils/AssistantV1')
    
const params = {
    workspaceId: process.env.IBM_WORKSPACE_ID,
};

assistant.listIntents(params)
    .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
    })
    .catch(err => {
        console.log(err)
    });
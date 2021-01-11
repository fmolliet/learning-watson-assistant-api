const AssistantV1 = require('ibm-watson/assistant/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const auth = {
    version: process.env.IBM_VERSION,
    authenticator: new IamAuthenticator({
        apikey: process.env.IBM_KEY,
    }),
    serviceUrl: process.env.IBM_URL,
    disableSslVerification: true,
}

module.exports = new AssistantV1(auth);

import AssistantV1   from'ibm-watson/assistant/v1.js';
import authenticator from 'ibm-watson/auth/index.js';
import dotenv from 'dotenv';
dotenv.config();

const { IamAuthenticator } = authenticator;

const auth = {
    version: process.env.IBM_VERSION,
    authenticator: new IamAuthenticator({
        apikey: process.env.IBM_KEY,
    }),
    serviceUrl: process.env.IBM_URL,
    disableSslVerification: true,
};

export default new AssistantV1(auth);

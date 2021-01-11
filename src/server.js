import app from './app.js';
const port = process.env.SERVICE_PORT || 3000;

app.listen(port, () =>{
    console.log(`Node server listening on port ${port}!`);
});
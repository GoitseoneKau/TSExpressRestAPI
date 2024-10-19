//created in cmd by typing 'type NUL > index.js'
//insert "type":"module" in package.json in order to use imports
import express from 'express';
import cors from 'cors'
import api_routes from './routes/api_routes.js'
import path from 'path'
import { fileURLToPath } from 'url';


const PORT =process.env.PORT || 8080;
const app = express();


const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory



app.use(cors())

app.use("/api",api_routes);

app.use("/",api_routes,(request,response)=>{
    response.sendFile(__dirname+"/index.html")
});



app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

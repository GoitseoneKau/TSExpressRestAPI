
//created in cmd by typing 'type NUL > index.js'
//insert "type":"module" in package.json in order to use imports
import express from 'express';
import cors from 'cors'
import api_routes from './src/routes/api_routes.js'
import path from 'path'
import { fileURLToPath } from 'url';
import fs from 'fs'

const PORT =process.env.PORT || 8000;
const app = express();


const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

app.use(express.static(path.join(__dirname,'public')))

app.use(cors())

app.use("/api",api_routes);
app.use("/",(req,res)=>{
    res.render('index.html')
})


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

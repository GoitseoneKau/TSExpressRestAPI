//created in cmd by typing 'type NUL > index.js'
//insert "type":"module" in package.json in order to use imports
import express, { Request, Response } from 'express';
import cors from 'cors'
import apiRoutes from './routes/api_routes.js'


const PORT =process.env.PORT|| 3001;
const app = express()


app.use(cors())
app.use("/api",apiRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

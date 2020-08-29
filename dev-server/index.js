import express from 'express';
import { registerRoutes } from "./routes";
import { setEnvironment } from './config/env'
import { connectDB } from "./config/db";

const app = express();
setEnvironment(app);

connectDB();

const port = 8080;
registerRoutes(app);

app.get('/', (req, res) => {
    if (process.env.NODE_ENV.trim() !== 'production') {
        return res.send('Running server in development mode')
    } else {
        return res.sendFile('index.html', {root: __dirname + '/../dist/'})
    }
});

app.listen(port, () => console.log(`Scraper app listening on port ${port} in ${process.env.NODE_ENV} mode.`));
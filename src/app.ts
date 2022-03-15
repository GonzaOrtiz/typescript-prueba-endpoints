import express from 'express';
import { log } from 'debug';
import expressWinston from 'express-winston';
import winston from 'winston';
import CommonRoutes from "./http/routes/common.routes";
import UserRoutes from "./http/routes/user/user.routes"
import mongoose from 'mongoose';
import userSchema from '../src/models/user.model';
// @ts-ignore
// import cors from 'cors';

const app: express.Application = express();

app.get('/', (_req: express.Request, res: express.Response) => {
    res.send('que onda perritasss');
})

const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
};

if (!process.env.DEBUG) {
    loggerOptions.meta = false; // when not debugging, log requests as one-liners
}

app.use(expressWinston.logger(loggerOptions));
const routes: Array<CommonRoutes> = [];
app.use(express.json());
routes.push(new UserRoutes(app));

mongoose.connect('mongodb://localhost:27017/test',{
}, ()=>{
    console.log('database connected')
})

app.listen(3000, () => {
    routes.forEach((route: CommonRoutes) => {
        log(`Routes configured for ${route.getName()}`);
    });
    log('Server listening on port 3000');
});

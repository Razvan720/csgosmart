import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';


import updatesRoutes from './routes/updateRoutes';
import usuariosRoutes from './routes/usuariosRoutes';
import armasRoutes from './routes/armasRoutes';


class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.port || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(): void {
        this.app.use('/updates', updatesRoutes);
        this.app.use('/usuarios', usuariosRoutes);
        this.app.use('/armas', armasRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () =>
            console.log('El servidor escucha por el puerto ', this.app.get('port'))

        );
    }
}

const server = new Server();

server.start();

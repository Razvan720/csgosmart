import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';


import updatesRoutes from './routes/updateRoutes';
import usuariosRoutes from './routes/usuariosRoutes';
import armasRoutes from './routes/armasRoutes';
import cajasRoutes from './routes/cajasRoutes';
import mapasRoutes from './routes/mapasRoutes';
import skinsRoutes from './routes/skinsRoutes';
import utilidadesRoutes from './routes/utilidadesRoutes';
import categoriasRoutes from './routes/categoriasRoutes';
import tipogranadasRoutes from './routes/tipogranadasRoutes';


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
        this.app.use('/cajas', cajasRoutes);
        this.app.use('/mapas', mapasRoutes);
        this.app.use('/skins', skinsRoutes);
        this.app.use('/utilidades', utilidadesRoutes);
        this.app.use('/categorias', categoriasRoutes);
        this.app.use('/tipogranadas', tipogranadasRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () =>
            console.log('El servidor escucha por el puerto ', this.app.get('port'))

        );
    }
}

const server = new Server();

server.start();

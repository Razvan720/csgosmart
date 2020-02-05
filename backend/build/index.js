"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const updateRoutes_1 = __importDefault(require("./routes/updateRoutes"));
const usuariosRoutes_1 = __importDefault(require("./routes/usuariosRoutes"));
const armasRoutes_1 = __importDefault(require("./routes/armasRoutes"));
const cajasRoutes_1 = __importDefault(require("./routes/cajasRoutes"));
const mapasRoutes_1 = __importDefault(require("./routes/mapasRoutes"));
const skinsRoutes_1 = __importDefault(require("./routes/skinsRoutes"));
const utilidadesRoutes_1 = __importDefault(require("./routes/utilidadesRoutes"));
const categoriasRoutes_1 = __importDefault(require("./routes/categoriasRoutes"));
const tipogranadasRoutes_1 = __importDefault(require("./routes/tipogranadasRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.port || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use('/updates', updateRoutes_1.default);
        this.app.use('/usuarios', usuariosRoutes_1.default);
        this.app.use('/armas', armasRoutes_1.default);
        this.app.use('/cajas', cajasRoutes_1.default);
        this.app.use('/mapas', mapasRoutes_1.default);
        this.app.use('/skins', skinsRoutes_1.default);
        this.app.use('/utilidades', utilidadesRoutes_1.default);
        this.app.use('/categorias', categoriasRoutes_1.default);
        this.app.use('/tipogranadas', tipogranadasRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => console.log('El servidor escucha por el puerto ', this.app.get('port')));
    }
}
const server = new Server();
server.start();

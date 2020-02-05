import { Router } from 'express';
import { tipogranadasController } from '../controllers/tipogranadasController';


class TipogranadasRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/',tipogranadasController.read);
        this.router.get('/:id', tipogranadasController.readOne); 
    }
}

const tipogranadasRoutes = new TipogranadasRoutes();
export default tipogranadasRoutes.router;



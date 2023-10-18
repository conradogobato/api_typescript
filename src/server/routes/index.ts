import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ControllerCidades } from '../../controllers';
import bodyParser from 'body-parser';

const router = Router();


router.post('/cidades', bodyParser.json() , ControllerCidades.createValidation, ControllerCidades.create);

export { router };
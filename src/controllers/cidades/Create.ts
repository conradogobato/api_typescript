import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { Validation } from '../../shared/middlewares/validation';

interface ICidade{
    nome:string;
    estado:string;
}

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
    nome: yup.string().required().min(3),
    estado: yup.string().required().min(3),
});

export const createValidation = Validation(bodyValidation);



export const create:RequestHandler = (req, res, next) =>{
    const validetedData = req.body;
    res.status(StatusCodes.ACCEPTED).json(validetedData);
};


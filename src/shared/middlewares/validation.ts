import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

type TValidation = (scheme: yup.Schema) => RequestHandler;

export const Validation:TValidation = (scheme: yup.Schema)=>async(req, res, next)=>{
    try{
        await scheme.validate(req.body, { abortEarly : false });
        return next();
    }catch(err){
        const yupError = err as yup.ValidationError;

        const validationErrors: Record<string, string> = {};

        yupError.inner.forEach(error => {
            if(error.path == undefined) return;
            validationErrors[error.message] = error.path;
        });

        return res.status(StatusCodes.BAD_REQUEST).json(validationErrors);
    }
};



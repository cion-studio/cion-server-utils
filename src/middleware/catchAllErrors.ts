import {Request, Response, NextFunction} from 'express'
import { printLog } from '..'

type ErrorHandler = (req:Request, res:Response, next:NextFunction, err:any) => any

const defaultErrorHandler = (_req:Request, res:Response, _next:NextFunction, err:any) => {
	printLog(err)
	return res.status(500).json({ error: 'Something went wrong!' })
}

const catchAllErrors = (onError:ErrorHandler = defaultErrorHandler) => (req:any, res: any, next:any) => {
	try {
		next()
	} catch (err) {
		onError(req, res, next, err)
	}
}

export default catchAllErrors
const catchAllErrors = (defaultErrorMessage:string = 'Something went wrong!') => (_req:any, res: any, next:any) => {
	try {
		next()
	} catch (err) {
		return res.status(500).json({ error: defaultErrorMessage })
	}
}

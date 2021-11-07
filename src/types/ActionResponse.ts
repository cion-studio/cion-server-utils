export default interface ActionResponse<DataType = any, ErrorType = string> {
	status: number,
	data?: DataType,
	error?: ErrorType,
}

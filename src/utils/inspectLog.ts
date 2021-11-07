import util from 'util'

//A better version of console.log
export function inspectLog(v: any) {
	console.log(util.inspect(v, false, null,))
}

import util from 'util'

//A better version of console.log
export default function printLog(v: any) {
	console.log(util.inspect(v, false, null,))
}
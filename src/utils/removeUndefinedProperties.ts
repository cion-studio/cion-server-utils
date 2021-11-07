export default function removeUndefinedProperties(obj: any) {
	const cleanObj: any = {}

	Object.keys(obj).forEach(k => {
		if (obj[k] !== undefined) {
			cleanObj[k] = obj[k]
		}
	})

	return cleanObj
}

const database = require('../modules/database');

exports.handler = async event => {
	const auftragsnummer = event.queryStringParameters.auftragsnummer;
	try {
		const result = await database.getAnschlussadresse(auftragsnummer);
		return {
			statusCode: 200,
			body: JSON.stringify(result)
		}
	} catch (e) {
		return {
			statusCode: 404,
			body: JSON.stringify({anschlussadresseGefunden: false})
		}
	}
};

const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccount.json');

admin.initializeApp({
  	credential: admin.credential.cert(serviceAccount),
  	databaseURL: "https://chatbot-database-dc942.firebaseio.com"
});

const db = admin.database();
const ref = db.ref('auftraege');

const testCall = new Promise((resolve, reject) => {
	ref.on('value', (snapshot) => {
		resolve(snapshot.val());
	}, (error) => {
		reject('The read failed: ' + error.code);
	});
});

module.exports = {testCall};

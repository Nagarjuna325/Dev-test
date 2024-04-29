
console.log('Initializing Firebase Admin SDK...');
const admin = require('firebase-admin');



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
console.log('Firebase Admin SDK initialized successfully.');
const db = admin.firestore();

module.exports = { admin, db };

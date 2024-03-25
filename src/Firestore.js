const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
const serviceAccount = require('./path/to/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function insertTestData() {
    try {
        const data = { name: "Testy" };
        await db.collection('pets').add(data);
        console.log('Test data inserted successfully');
    } catch (error) {
        console.error('Error inserting test data:', error.message);
    }
}

async function main() {
    await insertTestData();
}

main(); 

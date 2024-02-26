const mongoose = require('mongoose');

async function connectToDatabase() {
    try {
        await mongoose.connect("mongodb+srv://jcapwell:177654321Jc@cluster0.ovz9x6x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
    }
}

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const Pets = mongoose.model('Pets', petSchema);

async function insertTestData() {
    try {
        const data = { name: "Testy" };
        await Pets.insertMany([data]);
        console.log('Test data inserted successfully');
    } catch (error) {
        console.error('Error inserting test data:', error.message);
    }
}

async function main() {
    await connectToDatabase();
    await insertTestData();
}

main();

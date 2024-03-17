const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://jcapwell:177654321Jc@cluster0.ovz9x6x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log('mongodb connected');
})
.catch(()=>{
    console.log('error');
})

const petSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    petfrence1:{
        type:Number,

    },
    petfrence2:{
        type:Number,

    },
    petfrence3:{
        type:Number,

    }
})

const collection = new mongoose.model('Pets', petSchema)

data={
    username:"Testy",
    password:"Password",
    petfrence1: 1,
    petfrence2: 2,
    petfrence3: 3

}

collection.insertMany([data])


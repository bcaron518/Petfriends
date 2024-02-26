const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://jcapwell:177654321Jc@cluster0.ovz9x6x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log('mongodb connected');
})
.catch(()=>{
    console.log('error');
})

const petSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model('Pets', petSchema)

data={
    name:"Testy"
}

collection.insertMany([data])

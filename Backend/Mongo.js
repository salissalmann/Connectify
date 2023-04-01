const mongoose = require('mongoose');

const DBstring = "mongodb://127.0.0.1:27017/Connectify"
mongoose.set('strictQuery',true)

const ConnectToMongo = ()=>
{
    mongoose.connect(DBstring , ()=> { console.log("CONNECTED TO DATABASE SUCCESSFULLY") })
}

module.exports = ConnectToMongo;
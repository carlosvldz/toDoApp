const mongoose = require('mongoose');

const URI = 'mongodb://platzi-admin:Pq5HLvhdvBpXJX1d@curso-platzi-shard-00-00.o7zlc.mongodb.net:27017,curso-platzi-shard-00-01.o7zlc.mongodb.net:27017,curso-platzi-shard-00-02.o7zlc.mongodb.net:27017/toDoApp?ssl=true&replicaSet=atlas-bju3bo-shard-0&authSource=admin&retryWrites=true&w=majority';

//DB connection
mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;
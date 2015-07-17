import mongo from 'mongodb';

export default {
    connect(callback) {
        mongo.MongoClient.connect('mongodb://localhost:27017/test', callback); 
    }
}
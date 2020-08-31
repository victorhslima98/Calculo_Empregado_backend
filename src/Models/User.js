const moongose = require('mongoose');

const UserSchema = new moongose.Schema({
    name: String, 
    username: String,
    password: String
})

module.exports = moongose.model('User', UserSchema);
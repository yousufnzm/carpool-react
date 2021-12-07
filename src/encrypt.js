var bcrypt = require('bcryptjs');

exports.cryptPassword = function(password) {
    return bcrypt.hashSync(password, 10);
};

exports.comparePassword = function(plainPass, hashword) {
   return bcrypt.compareSync(plainPass, hashword);
};
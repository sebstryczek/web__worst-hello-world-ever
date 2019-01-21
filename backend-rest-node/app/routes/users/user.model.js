const bcrypt = require('bcrypt');
const handleErrorsAsync = require('../../utils/handleErrorsAsync');

const userModel = mongoose => {
  const userSchema = new mongoose.Schema({
    email: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true }
  });

  userSchema.pre('save', async function (next) {
    const user = this;

    if (user.isModified('password')) {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(user.password, salt);
      user.password = hash;
    }

    return next();
  });

  userSchema.statics.getAuthenticated = async function(email, password) {
    const userModel = this;
    const user = await userModel.findOne({ email: email });
    
    if (!user) {
      throw Error('User not found');
    }
    
    const [error, valid] = await handleErrorsAsync(bcrypt.compare(password, user.password));
    if (error) {
      throw Error(error);
    }

    if (!valid) {
      throw Error('Invalid password');
    }

    return user;
  }

  return mongoose.models.User || mongoose.model('User', userSchema);
};

module.exports = userModel;

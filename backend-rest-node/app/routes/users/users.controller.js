const usersController = db => {
  const userModel = require('../users/user.model')(db);

  const index = async (req, res, next) => {
    const users = await userModel.find();
    const usersWithoutPassword = users.map(x => ({ id: x._id, email: x.email }));
    return res.status(200).json(usersWithoutPassword);
  };
  
  //moved to auth.SignUp
  //const create = async (req, res, next) => {
  //  const { email, password } = req.body;
  //  const result = await userModel.create({ email, password });
  //  return res.status(200).json(result);
  //};
  
  const get = async (req, res, next) => {
    const userId = req.params.id;
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ error: '' } );
    }

    const userWithoutPassword = { id: user._id, email: user.email };
    return res.status(200).json(userWithoutPassword);
  };
  
  const update = async (req, res, next) => {
    const userId = req.params.id;
    const { email } = req.body;
    const user = await userModel.findOneAndUpdate({ _id: userId }, { email }, { new: true });

    if (!user) {
      return res.status(404).json({ error: 'not found' } );
    }

    const userWithoutPassword = { id: user._id, email: user.email };
    return res.status(200).json(userWithoutPassword);
  };
  
  const destroy = async (req, res, next) => {
    const userId = req.params.id;
    const result = await userModel.deleteOne({ _id: userId });

    return res.status(200).json({ message: `Deleted: ${result.n}` });
  };

  return { index, /*create,*/ get, update, destroy }
}

module.exports = usersController;

const Dev = require('../models/Dev');

module.exports = {
  async store(req, res){
    const { user } = req.headers;
    const { devId } = req.params;

    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(devId);
    if(!targetDev) return res.status(400).json({ error: 'Dev not exists '});
    if(loggedDev.likes.includes(devId)){
      return res.json({ error: 'you did already liked this user '})
    }
    if(targetDev.likes.includes(loggedDev._id)){
      return console.log('Deu match');
    }

    loggedDev.likes.push(targetDev._id);
    await loggedDev.save();
    return res.json(loggedDev)
  }
}
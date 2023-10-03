const User = require('../service/model/user');

const index = async(req, res)=>{
    const users = await User.findAll();
    const records = users.map((v)=> v.dataValues)
    res.render('index', {records});
};

const home = async(req, res)=>{
    const {first_name, last_name, age} = req.body;

    await User.create({first_name, last_name, age});
    res.redirect('/');

}


module.exports = {
    index,
    home
}
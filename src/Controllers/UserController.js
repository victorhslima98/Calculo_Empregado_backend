const User = require("../Models/User");
const { update } = require("../Models/User");

module.exports = {
    async index(req, res) {
        users = await User.find();
        return res.json(users);
    },

    async store(req, res) {
        const { name, username, password } = req.body;
        let user = await User.findOne({ username });
        if (!user) {
            user = await User.create({ name, username, password });
        } else {
            return res.status(400).json({ error: "erro" });
        }

        return res.json(user);
    },

    async destroy(req, res) {
        const { _id } = req.body;
        user = await User.findByIdAndDelete({ _id });
        return res.json({ message: "Deletado cm sucesso!" });
    },

    async update(req, res) {
    const { _id, name, username, password_old, password_new } = req.body;

    user = await User.findById(_id)
    
    if (name !== undefined) {
      user.set({ name });
    }

    if (username !== undefined) {
      user.set({ username });
    }

    if (password_old !== undefined && password_new === undefined) {
        return res.status(400).json({ error: "faltou a senha nova" });
    }

    if (password_old === undefined && password_new !== undefined) {
        return res.status(400).json({ error: "faltou a senha antiga" });
    }

    if (password_old !== undefined && password_new !== undefined) {
        if(password_old === user.password && password_new !== password_old){
            user.set({ "password": password_new });
        } else {
            return res.status(400).json({ error: "senha diferente da anterior..." });
        }
    }


    await user.save();

        return res.json(user);
    },
};
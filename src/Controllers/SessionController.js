const User = require ('../Models/User');


module.exports = {
    async store(req, res){
        const { username, password } = req.body
        let user = await User.findOne({ username, password });
        if(user){
            return res.json( user ); 
        }else{
            return res.status(400).json({ error: "erro"})
        }
    

        
       
    }
}

import User from '../model/user-schema.js';
export const userSignup = async (req,res) => {
    try {
        const exit = await User.findOne({ username : req.body.Username });
        if(exit){
            return res.status(401).json({message: 'Username already exist'});
        }

        const user = req.body;
        const newUser = new User(user);
        await newUser.save();

        res.status(200).json({message:user});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

export const userLogin = async (req, res) => {
    try {
        const username = req.body.Username;
        const password = req.body.Password;

        let user = await User.findOne({ Username: username, Password: password});
        if(user) {
            return res.status(200).json({data: user});
        }else{
            return res.status(401).json('Invalid login');
        }
    } catch (error) {
        res.status(500).json('Error: ',error.message);
    }
}
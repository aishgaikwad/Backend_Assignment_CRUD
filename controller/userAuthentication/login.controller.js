import User from "../../model/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(400).json({ error: "User with this email does not exist." });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ error: "Invalid password." });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, email: user.email },
            'your_secret_key', 
            { expiresIn: '1h' } 
        );

       
        res.status(200).json({ user: user, token });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
}
export default loginUser;
const bcrypt = require('bcrypt');

const hashPassword = async (req, res, next) => {
    try {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10); 
            req.body.password = await bcrypt.hash(req.body.password, salt); 
        }
        next();
    } catch (error) {
        return res.status(500).json({ message: "Parolni hash qilishda xatolik" });
    }
};

module.exports = hashPassword;

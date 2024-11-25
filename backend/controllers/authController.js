const { signUp, LogIn } = require("../services/authService");
const { validatePassword, validateEmail } = require("../middleware/auth/validData");
const signUpUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const validEmailResponse = validateEmail(email);
        if (!validEmailResponse.valid) {
            throw Error(validEmailResponse.message);
        }

        const validatePasswordResponse = validatePassword(password);
        if (!validatePasswordResponse.valid) {
            throw Error(validatePasswordResponse.message);
        }

        const result = await signUp(email, password);
        res.status(201).json({ success: true, data: result });
    } catch (error) {
        next(error);
    }
};

const logIn = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const result = await LogIn(email, password);
        res.status(201).json({ success: true, data: result });
    } catch (error) {
        next(error);
    }
};

module.exports = { signUpUser, logIn };

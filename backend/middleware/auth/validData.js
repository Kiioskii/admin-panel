const validatePassword = (password) => {
    // Sprawdzanie długości hasła
    if (password.length < 6) {
        return { valid: false, message: "Password must be at least 6 characters long." };
    }

    // Sprawdzanie, czy hasło zawiera przynajmniej jedną dużą literę
    if (!/[A-Z]/.test(password)) {
        return { valid: false, message: "Password must contain at least one uppercase letter." };
    }

    // Sprawdzanie, czy hasło zawiera przynajmniej jedną cyfrę
    if (!/\d/.test(password)) {
        return { valid: false, message: "Password must contain at least one number." };
    }

    return { valid: true };
};

const validateEmail = (email) => {
    // Wyrażenie regularne do sprawdzania poprawności adresu e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        return { valid: false, message: "Email is required." };
    }

    if (!emailRegex.test(email)) {
        return { valid: false, message: "Invalid email format." };
    }

    return { valid: true };
};

module.exports = { validatePassword, validateEmail };

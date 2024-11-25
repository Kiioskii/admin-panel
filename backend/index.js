require("dotenv").config(); // Ładowanie zmiennych środowiskowych z pliku .env
const app = require("./app"); // const supabase = require("./config/supabase");
const PORT = process.env.PORT || 3000;

// Uruchomienie serwera
app.listen(PORT, () => {
    console.log(`Serwer działa na http://localhost:${PORT}`);
});

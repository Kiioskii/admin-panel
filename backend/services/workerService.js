const supabase = require("../config/supabase");

const addWorkerDB = async (queryParams) => {
    const { data, error } = await supabase.from("workers").insert([queryParams]).select();
};

module.exports = { addWorkerDB };

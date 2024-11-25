const supabase = require("../config/supabase");

const getAllRolesDB = async (queryParams) => {
    const { data: roles, error } = await supabase.from("roles").select("*");

    console.log("data", data);
};

module.exports = { getAllRolesDB };

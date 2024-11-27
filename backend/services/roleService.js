const supabase = require("../config/supabase");

const getAllRolesDB = async (queryParams) => {
    const out = { status: 1 };
    const rolesDB = await supabase.from("roles").select("*");

    if (rolesDB.error) {
        out.status = 0;
        out.message = rolesDB.error;
    } else {
        out.data = rolesDB.data;
    }

    return out;
};

module.exports = { getAllRolesDB };

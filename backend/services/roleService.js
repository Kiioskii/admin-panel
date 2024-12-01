const supabase = require("../config/supabase");

const getAllRolesDB = async () => {
    console.log("xxxx");

    const out = { status: 1 };
    const rolesDB = await supabase.from("roles").select("*");

    console.log("rolesDB", rolesDB);

    if (rolesDB.error) {
        out.status = 0;
        out.message = rolesDB.error;
    } else {
        out.data = rolesDB.data;
    }

    return out;
};

module.exports = { getAllRolesDB };

const { getAllRolesDB } = require("../../services/roleService");

const validWorkerData = async (data) => {
    const out = { status: 1 };
    try {
        // Get all role
        const rolesDB = await getAllRolesDB();

        if (!rolesDB.status) {
            throw new Error(rolesDB.message);
        }

        //Check that role id is in database
        const roleIdArr = rolesDB.data.map((item) => item.id);

        console.log("roleIdArr", roleIdArr);
        console.log("data", data);

        if (!roleIdArr.includes(data.role_id)) {
            throw new Error("Nie można znaleźć takiej roli w bazie danych");
        }
    } catch (err) {
        console.log("err", err);
        out.status = 0;
        out.message = err.message;
    }

    return out;
};

module.exports = { validWorkerData };

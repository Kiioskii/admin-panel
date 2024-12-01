const { getAllRolesDB } = require("../services/roleService");

const getAllRoles = async (req, res, next) => {
    console.log("xxxxxxxxxxx");

    try {
        console.log("xdd");
        const result = await getAllRolesDB();

        console.log("result", result);

        if (!result.status) {
            throw new Error(result.message);
        }
        res.status(201).json({ success: true, data: result });
    } catch (error) {
        next(error);
    }
};

module.exports = { getAllRoles };

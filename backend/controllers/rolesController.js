const { getAllRolesDB } = require("../services/roleService");

const getAllRoles = async (req, res, next) => {
    try {
        const result = await getAllRolesDB();
        if (!result.status) {
            throw new Error(result.message);
        }
        res.status(201).json({ success: true, data: result });
    } catch (error) {
        next(error);
    }
};

module.exports = { getAllRoles };

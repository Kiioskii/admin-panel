const { getRolesDB } = require("../../services/roleService");

const validWorkerData = async (data) => {
    const out = { status: 1 };
    try {
    } catch (err) {
        out.status = 0;
        out.message = err.message;
    }

    return out;
};

module.exports = { validWorkerData };

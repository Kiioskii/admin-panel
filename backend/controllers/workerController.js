const { addWorkerDB, editWorkerDB, getAllWorkersDB, getWorkerByIdDB } = require("../services/workerService");
const { validWorkerData } = require("../middleware/workers/validWorkers");

const addWorker = async (req, res, next) => {
    try {
        const data = req.body;

        const queryParams = {
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            role_id: 1,
        };

        const validation = await validWorkerData(queryParams);

        if (!validation.status) {
            throw new Error(validation.message);
        }

        const result = await addWorkerDB(queryParams);
        if (!result.status) {
            throw new Error(result.message);
        }
        res.status(201).json({ success: true, data: result });
    } catch (error) {
        next(error);
    }
};

const editWorkers = async (req, res, next) => {
    try {
        const { workerData, workerId } = req.body;

        const queryParams = {
            first_name: workerData.firstName,
            last_name: workerData.lastName,
            email: workerData.email,
            role_id: +workerData.roleId,
        };

        const validation = await validWorkerData(queryParams);

        if (!validation.status) {
            throw new Error(validation.message);
        }

        const result = await editWorkerDB({ queryParams: queryParams, workerId: workerId });
        if (!result.status) {
            throw new Error(result.message);
        }
        res.status(201).json({ success: true, data: result });
    } catch (error) {
        next(error);
    }
};

const getAllWorkers = async (req, res, next) => {
    try {
        const result = await getAllWorkersDB();
        if (!result.status) {
            throw new Error(result.message);
        }
        // Create proper data
        const workersArr = result.data.map((item) => {
            return {
                workerId: item.id,
                firstName: item.first_name,
                lastName: item.last_name,
                email: item.email,
                roleId: item.role_id,
                roleName: item.roles.role,
            };
        });

        res.status(201).json({ success: true, data: workersArr });
    } catch (error) {
        next(error);
    }
};

const getWorkerById = async (req, res, next) => {
    try {
        console.log("req.query", req.query); // Debugowanie parametrów
        const { workerId } = req.query;

        if (!workerId) {
            throw new Error("Nie ma takiego pracownika");
        }

        const result = await getWorkerByIdDB(workerId);
        if (!result.status) {
            throw new Error(result.message);
        }

        const workerDataDB = result.data[0];

        // Create proper data
        const workerData = {
            firstName: workerDataDB.first_name,
            lastName: workerDataDB.last_name,
            email: workerDataDB.email,
            roleId: workerDataDB.role_id,
            roleName: workerDataDB.roles.role,
        };

        res.status(201).json({ success: true, data: workerData });
    } catch (error) {
        next(error);
    }
};

module.exports = { addWorker, editWorkers, getAllWorkers, getWorkerById };

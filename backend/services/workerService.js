const supabase = require("../config/supabase");

const addWorkerDB = async (queryParams) => {
    const out = { status: 1 };
    const { data, error } = await supabase.from("workers").insert([queryParams]).select();

    if (error) {
        out.status = 0;
        out.message = error.message;
    }

    return out;
};

const editWorkerDB = async ({ queryParams, workerId }) => {
    const out = { status: 1 };
    // const { data, error } = await supabase.from("workers").insert([queryParams]).select();

    const { data, error } = await supabase.from("workers").update(queryParams).eq("id", workerId).select();

    if (error) {
        out.status = 0;
        out.message = error.message;
    }

    console.log("out edit xxx", out);

    return out;
};

const getAllWorkersDB = async () => {
    const out = { status: 1 };

    const { data: workers, error } = await supabase.from("workers").select(` * ,roles ( id, role ) `);

    if (error) {
        out.status = 0;
        out.message = error.message;
    } else {
        out.data = workers;
    }

    return out;
};

const getWorkerByIdDB = async (workerId) => {
    const out = { status: 1 };

    const { data: workers, error } = await supabase
        .from("workers")
        .select(` * ,roles ( id, role ) `)
        .eq("id", workerId);

    if (error) {
        out.status = 0;
        out.message = error.message;
    } else {
        out.data = workers;
    }

    return out;
};

module.exports = { addWorkerDB, editWorkerDB, getAllWorkersDB, getWorkerByIdDB };

import { getAllRoles } from "../api/api";

export const rolesLoader = async () => {
    const out = { status: 1 };

    try {
        const response = await getAllRoles();
        out.data = response.data.data.data;
    } catch (err) {
        out.status = 0;
        out.message = err.response.data.message;
    }

    console.log("role out", out);

    return out;
};

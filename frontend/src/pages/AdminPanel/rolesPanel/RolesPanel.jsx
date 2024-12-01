import { Suspense } from "react";

import { useLoaderData, Await } from "react-router-dom";
import RolesList from "../../../components/RolesList";

const RolesPanel = () => {
    const { data } = useLoaderData();

    console.log("data", data);

    return (
        <div className=" flex-grow p-4 bg-white rounded-lg shadow-md min-h-screen ">
            <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
                <Await resolve={data}>{(rolesData) => <RolesList rolesData={rolesData} />}</Await>
            </Suspense>
        </div>
    );
};

export default RolesPanel;

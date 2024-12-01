import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import WorkerEditPanel from "../../../components/WorkerEditPanel";
const AddWorkerPanel = () => {
    const { data } = useLoaderData();
    console.log("data", data);

    return (
        <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
            <Await resolve={data}>{(loadedRolesData) => <WorkerEditPanel rolesData={loadedRolesData} />}</Await>
        </Suspense>
    );
};

export default AddWorkerPanel;

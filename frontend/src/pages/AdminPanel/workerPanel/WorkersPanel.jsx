import { Suspense } from "react";

import { useLoaderData, Await } from "react-router-dom";
import WorkerList from "../../../components/WorkerList";
const WorkersPanel = () => {
    const { data } = useLoaderData();
    return (
        <div className=" flex-grow p-4 bg-white rounded-lg shadow-md min-h-screen ">
            <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
                <Await resolve={data}>{(loadedWorkers) => <WorkerList WorkerList={loadedWorkers} />}</Await>
            </Suspense>
        </div>
    );
};

export default WorkersPanel;

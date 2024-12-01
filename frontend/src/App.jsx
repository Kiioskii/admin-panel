import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePgae";
import AuthenticationPage, { authAction } from "./pages/AuthenticationPage";
import WorkersPanel from "./pages/AdminPanel/workerPanel/WorkersPanel";
import AddWorkerPanel from "./pages/AdminPanel/workerPanel/AddWorkerPanel";
import EditWorkerPanel from "./pages/AdminPanel/workerPanel/EditWorkerPanel";
import AdminLayout from "./layouts/AdminLayout";
import WorkersLayout from "./layouts/WorkersLayout";
import Dashboard from "./pages/AdminPanel/Dashboard";

//ACTIONS & LOADERS
import { addWorkerLoader, addWorkerAction, workerLoader, workerEditLoader, workerEditAction } from "./actions/workers";
import RolesLayout from "./layouts/RolesLayout";
import RolesPanel from "./pages/AdminPanel/rolesPanel/RolesPanel";
import { rolesLoader } from "./actions/roles";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            children: [
                { index: true, element: <HomePage /> },
                { path: "auth", element: <AuthenticationPage />, action: authAction },
                {
                    path: "admin-panel",
                    element: <AdminLayout />,
                    children: [
                        { index: true, element: <Dashboard /> },
                        {
                            path: "workers",
                            element: <WorkersLayout />,
                            children: [
                                { index: true, element: <WorkersPanel />, loader: workerLoader },
                                {
                                    path: "add-new-worker",
                                    element: <AddWorkerPanel />,
                                    loader: addWorkerLoader,
                                    action: addWorkerAction,
                                },
                                {
                                    path: ":workerId",
                                    children: [
                                        {
                                            path: "edit-worker",
                                            element: <EditWorkerPanel />,
                                            loader: workerEditLoader,
                                            action: workerEditAction,
                                        },
                                        // { path: "delete-worker", element: <AddWorkerPanel />, action: addWorkerAction },
                                    ],
                                },
                            ],
                        },
                        {
                            path: "roles",
                            element: <RolesLayout />,
                            children: [
                                {
                                    index: true,
                                    element: <RolesPanel />,
                                    loader: rolesLoader,
                                },
                            ],
                        },
                    ],
                    // loader: AdminPanelLoader,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;

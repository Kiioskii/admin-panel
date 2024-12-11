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
import ProductsLayout from "./layouts/ProductsLayout";
import ProductsPanel from "./pages/AdminPanel/products/ProductsPanel";
import MessagesLayout from "./layouts/MessagesLayout";
import MessagesPanel from "./pages/AdminPanel/messages/messagesPanel";

import ClientsLayout from "./layouts/ClientsLayout";
import ClientsPanel from "./pages/AdminPanel/clients/ClientsPanel";
import { clientsTabData } from "./data/clients/tabData";

const userData = {
    id: 3,
    firstName: "Dariusz",
    lastName: "Quebo",
    time: "17:32",
    message: "Osiem kobiet, każda z nich to gwiazdka, jakbym jebał PiS",
    image: "https://i.gremicdn.pl/image/free/66e3c9c31149995ccf535f36a1806853/?t=crop:905:561:nowe:60:0,resize:fill:948:592,enlarge:1",
    orders: 0,
    clientNumber: 1231,
    new: true,
};

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
                        {
                            path: "products",
                            element: <ProductsLayout />,
                            children: [
                                {
                                    index: true,
                                    element: <ProductsPanel />,
                                    // loader: rolesLoader,
                                },
                            ],
                        },
                        {
                            path: "messages",
                            element: <MessagesLayout />,
                            children: [
                                {
                                    index: true,
                                    element: <MessagesPanel userData={userData} />,
                                    // loader: rolesLoader,
                                },
                            ],
                        },
                        {
                            path: "clients",
                            element: <ClientsLayout name={"Klienci"} data={clientsTabData} />,
                            children: [
                                {
                                    index: true,
                                    element: <ClientsPanel />,
                                    // loader: rolesLoader,
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

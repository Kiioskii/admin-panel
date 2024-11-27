import { Link } from "react-router-dom";

const WorkerList = ({ WorkerList }) => {
    console.log(" data  data ", WorkerList);

    return (
        <table className="w-full table-auto border-collapse border border-gray-200">
            <thead>
                <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-4 py-2 text-left">Imię</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Nazwisko</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Email</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Stanowisko</th>
                    <th className="border border-gray-200 px-4 py-2 text-center">Akcje</th>
                </tr>
            </thead>
            <tbody>
                {WorkerList.map((employee) => (
                    <tr key={employee.id} className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-4 py-2">{employee.firstName}</td>
                        <td className="border border-gray-200 px-4 py-2">{employee.lastName}</td>
                        <td className="border border-gray-200 px-4 py-2">{employee.email}</td>
                        <td className="border border-gray-200 px-4 py-2">{employee.roleName}</td>
                        <td className="border border-gray-200 px-4 py-2 text-center">
                            <Link to={`${employee.workerId}/edit-worker`}>
                                <button
                                    //   onClick={() => handleEdit(employee.id)}
                                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
                                >
                                    Edytuj
                                </button>
                            </Link>
                            <button
                                //   onClick={() => handleDelete(employee.id)}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                                Usuń
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default WorkerList;

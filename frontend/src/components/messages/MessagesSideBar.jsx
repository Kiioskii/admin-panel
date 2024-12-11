import Search from "../ui/Search";
import Button from "../ui/Button";
const MessagesSideBar = ({ messagesData }) => {
    return (
        <section className="rounded border-gray-100 h-full flex flex-col ">
            <div className="w-full p-6 h-40  border-2 flex flex-col items-start">
                <h2 className="text-2xl mb-6 font-bold tracking-tight text-gray-900">Messenger</h2>
                <input className="border rounded bg-slate-100 w-full p-2" placeholder={`Wyszukaj...`}></input>
            </div>
            <div className="w-full  border-2 border-t-0 flex-1 overflow-y-auto flex-col items-start">
                {messagesData.map((item) => (
                    <div
                        className="border-b-1 w-full h-32 flex row-auto cursor-pointer hover:bg-gray-100"
                        key={item.id}
                    >
                        <div className="h-auto w-fit p-3 pr-0">
                            <img src={item.image} alt="Profile" className="w-10 h-10 rounded-full mx-auto" />
                        </div>
                        <div className="h-auto w-5/6 flex-col p-3">
                            <div className="h-auto w-full flex row-auto justify-between ">
                                <div className="h-auto w-full flex row-auto items-center ">
                                    <span className="font-bold mr-3">
                                        {item.firstName} {item.lastName}
                                    </span>
                                    <p className="text-xs text-gray-400 h-auto">{item.time}</p>
                                </div>
                                {item.new && <div className="bg-blue-500 h-2 w-2 rounded-full" />}
                            </div>
                            <div className={`h-auto w-full text-sm truncate text-start ${item.new && "font-bold"}`}>
                                {item.message}
                            </div>
                            <div className={`h-auto w-full text-sm text-start p-3 pl-0`}>
                                <button className="w-32 border rounded h-8 font-bold text-gray-500">
                                    {item.orders} zamówienia
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MessagesSideBar;

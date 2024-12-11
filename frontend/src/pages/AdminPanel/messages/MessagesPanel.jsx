import { MdFormatListBulleted } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { TiCancel } from "react-icons/ti";
import { IoIosSend } from "react-icons/io";

import IconButton from "../../../components/ui/iconButton";
import Button from "../../../components/ui/Button";

const messages = [
    {
        from: "me",
        type: "order",
        items: [
            {
                id: 1,
                code: "X123423",
                name: "Kurtka ocieplana",
                price: 20,
            },
            {
                id: 2,
                code: "X6384242",
                name: "Spodnie narciarskie",
                price: 400,
            },
            {
                id: 3,
                code: "X834045",
                name: "Rekawice narciarskie",
                price: 150,
            },
        ],
        orderSum: 570,
    },
];

const MessagesPanel = ({ userData }) => {
    return (
        <div className=" flex-grow bg-white h-full flex flex-co">
            <section className="h-auto w-full flex flex-col flex-grow">
                <div className="w-full flex justify-between h-40 border-b-2 border-gray-200">
                    <div className="flex row-auto w-2/3 h-full justify-start items-center p-5">
                        <div className="w-fit mr-1">
                            <img src={userData.image} alt="Profile" className="w-10 h-10 rounded-full mx-auto" />
                        </div>
                        <div className="flex flex-col text-start">
                            <p className="text-2xl font-bold">
                                {userData.firstName} {userData.lastName}
                            </p>
                            <p className="text-sm text-gray-500 font-semibold">
                                Numer klienta: {userData.clientNumber}
                            </p>
                        </div>
                    </div>
                    <div className="flex row-auto w-1/3 h-full items-center gap-6 justify-end p-10">
                        <IconButton>
                            <TiCancel className="w-2/3 h-2/3 " />
                        </IconButton>
                        <IconButton>
                            <FaPlus className="w-2/3 h-2/3" />
                        </IconButton>
                        <IconButton>
                            <FaCartShopping className="w-2/3 h-2/3" />
                        </IconButton>
                        <IconButton>
                            <MdFormatListBulleted className="w-2/3 h-2/3" />
                        </IconButton>
                    </div>
                </div>
                <div className="flex flex-col flex-grow p-4">
                    {/* CHAT */}
                    <div className="w-full flex-1 ">
                        <div className="flex-1 h-full w-full col-auto overflow-y-auto">

                            {messages.map((message)=>(
                                
                            ))}
                            {/* xxxx */}
                            <div className="relative bg-blue-500 text-white p-4 rounded-lg max-w-sm">
                                <p>Przesyłamy podsumowanie:</p>
                                <ul className="list-disc ml-5">
                                    <li>XD290 ocieplacze na ręce • C • 19 zł</li>
                                    <li>XD296 skarpety w paczce • 1 • 39 zł</li>
                                    <li>XD312 zapachy do auta • 2 • 15 zł</li>
                                    <li>XD312 zapachy do auta • 14 • 15 zł</li>
                                    <li>XD312 zapachy do auta • 3 • 15 zł</li>
                                    <li>XD312 zapachy do auta • 3 • 15 zł</li>
                                </ul>
                                <p className="font-bold mt-3">Suma: 118 zł</p>
                                <button className="bg-white text-blue-500 mt-3 py-2 px-4 rounded-md font-semibold">
                                    Przejdź do zamówienia
                                </button>

                                <div className="absolute bottom-0 left-0 w-4 h-4 bg-blue-500 -translate-x-1/2 translate-y-1/2 rotate-45"></div>
                            </div>
                            {/*  xxxx  */}
                        </div>
                    </div>
                    {/* INPUT BAR */}
                    <div className="flex row-auto items-center h-14 w full rounded border-2 border-gray-200 gap-5 p-4">
                        <button className="border-2 rounded border-gray-200 hover:bg-gray-100 w-6 h-6 flex justify-center items-center cursor-pointer ">
                            <FaPlus className="w-2/3 h-2/3" />
                        </button>
                        <input className="h-full flex-1 border-b-1 border-gray-100 focus:outline-none border-0 text-gray-500" />
                        <button className="border-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 w-10 h-10 flex justify-center items-center cursor-pointer ">
                            <IoIosSend className="w-2/3 h-2/3 text-white" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MessagesPanel;

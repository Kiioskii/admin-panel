import { Outlet } from "react-router-dom";
import MessagesSideBar from "../components/messages/MessagesSideBar";

const messagesData = [
    {
        id: 1,
        firstName: "Agnieszka",
        lastName: "Masuke",
        time: "15:12",
        message: "Dziękuję",
        image: "https://spidersweb.pl/_next/image?url=https%3A%2F%2Focs-pl.oktawave.com%2Fv1%2FAUTH_2887234e-384a-4873-8bc5-405211db13a2%2Fspidersweb%2F2022%2F12%2Fthe-witcher-3-ps5-age-rating-release-date.large_-1024x576-1.jpeg&w=1200&q=75",
        orders: 23,
        new: true,
    },
    {
        id: 2,
        firstName: "Anna",
        lastName: "Maria",
        time: "23:03",
        message: "Dziękuję",
        image: "",
        orders: 10,
        new: false,
    },
    {
        id: 3,
        firstName: "Dariusz",
        lastName: "Quebo",
        time: "17:32",
        message: "Osiem kobiet, każda z nich to gwiazdka, jakbym jebał PiS",
        image: "https://i.gremicdn.pl/image/free/66e3c9c31149995ccf535f36a1806853/?t=crop:905:561:nowe:60:0,resize:fill:948:592,enlarge:1",
        orders: 0,
        new: true,
    },
    {
        id: 4,
        firstName: "Agnieszka",
        lastName: "Masuke",
        time: "15:12",
        message: "Dziękuję",
        image: "https://spidersweb.pl/_next/image?url=https%3A%2F%2Focs-pl.oktawave.com%2Fv1%2FAUTH_2887234e-384a-4873-8bc5-405211db13a2%2Fspidersweb%2F2022%2F12%2Fthe-witcher-3-ps5-age-rating-release-date.large_-1024x576-1.jpeg&w=1200&q=75",
        orders: 23,
        new: true,
    },
    {
        id: 5,
        firstName: "Anna",
        lastName: "Maria",
        time: "23:03",
        message: "Dziękuję",
        image: "",
        orders: 10,
        new: false,
    },
    {
        id: 6,
        firstName: "Dariusz",
        lastName: "Quebo",
        time: "17:32",
        message: "Osiem kobiet, każda z nich to gwiazdka, jakbym jebał PiS",
        image: "https://i.gremicdn.pl/image/free/66e3c9c31149995ccf535f36a1806853/?t=crop:905:561:nowe:60:0,resize:fill:948:592,enlarge:1",
        orders: 0,
        new: true,
    },
    {
        id: 7,
        firstName: "Agnieszka",
        lastName: "Masuke",
        time: "15:12",
        message: "Dziękuję",
        image: "https://spidersweb.pl/_next/image?url=https%3A%2F%2Focs-pl.oktawave.com%2Fv1%2FAUTH_2887234e-384a-4873-8bc5-405211db13a2%2Fspidersweb%2F2022%2F12%2Fthe-witcher-3-ps5-age-rating-release-date.large_-1024x576-1.jpeg&w=1200&q=75",
        orders: 23,
        new: true,
    },
    {
        id: 8,
        firstName: "Anna",
        lastName: "Maria",
        time: "23:03",
        message: "Dziękuję",
        image: "",
        orders: 10,
        new: false,
    },
    {
        id: 9,
        firstName: "Dariusz",
        lastName: "Quebo",
        time: "17:32",
        message: "Osiem kobiet, każda z nich to gwiazdka, jakbym jebał PiS",
        image: "https://i.gremicdn.pl/image/free/66e3c9c31149995ccf535f36a1806853/?t=crop:905:561:nowe:60:0,resize:fill:948:592,enlarge:1",
        orders: 0,
        new: true,
    },
];

const MessagesLayout = () => {
    return (
        <div className=" bg-gray-100 flex-grow min-h-screen p-10 ">
            <div className=" flex bg-white rounded-lg shadow-md min-h-screen ">
                <div className="w-1/4">
                    <MessagesSideBar messagesData={messagesData} />
                </div>
                <div className="flex-grow p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MessagesLayout;

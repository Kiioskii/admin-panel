const MessageFromMe = ({ children }) => {
    return (
        <div className="relative bg-blue-500 text-white p-4 rounded-lg max-w-sm">
            {children}
            <div className="absolute bottom-0 left-0 w-4 h-4 bg-gray-400 -translate-x-1/2 translate-y-1/2 rotate-45"></div>
        </div>
    );
};
const MessageFromClient = ({ children }) => {
    return (
        <div className="relative bg-blue-500 text-white p-4 rounded-lg max-w-sm">
            {children}
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-blue-500 -translate-x-1/2 translate-y-1/2 rotate-90"></div>
        </div>
    );
};

const MessageComponent = ({ message }) => {
    return message.from === "me" ? (<MessageFromMe></MessageFromMe>) : (<MessageFromClient></MessageFromClient>;
};

export default MessageComponent;

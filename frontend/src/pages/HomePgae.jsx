import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <Link to={"/auth?mode=signup"}>
                <button>Sign Up</button>
            </Link>
            <Link to={"/auth?mode=login"}>
                <button>Log In</button>
            </Link>
        </>
    );
};

export default HomePage;

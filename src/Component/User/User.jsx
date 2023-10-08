import { Link } from "react-router-dom";

const User = ({user}) => {
    const { id, name, phone, Email, website } = user;
    return (
        <div className=" p-3 m-3 border-2 border-solid border-amber-950 rounded-lg">
            <h5>{name}</h5>
            <h5>{phone}</h5>
            <h5>{Email}</h5>
            <h5>{website}</h5>
            {/* create user data Dynamically */}
            <div className="m-2">
                <Link className='text-sky-500 pt-4' to={`/user/${id}`}>Show Details</Link>
                <Link className='text-sky-500 pt-4' to={`/user/${id}`}>
                    <button className="btn btn-sm ml-4 bg-amber-900 border-0">Click Me</button>
                </Link>
            </div>

        </div>
    );
};

export default User;
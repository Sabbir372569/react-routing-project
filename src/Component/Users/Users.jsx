import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {

    const users = useLoaderData();
    //state--> data
    //state--> load
    //use effect
    //fetch --> state set\
    return (
        <div className="bg-cyan-900 rounded-lg w-auto p-4 m-5 text-center">
            <div className="p-3">
                <h4 className="text-xl font-medium">Our Users {users.length}</h4>
                <p className="text-l font-medium">This is our User Details</p>
            </div>
            <div className="user">
                {
                    users.map(user => <User key={user.id} user={user}  > </User>)
                }
            </div>
        </div>
    );
};

export default Users;
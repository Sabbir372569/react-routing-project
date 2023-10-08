import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();  //data ta ke load korar jonno useLoderData
    const {name,username,email,phone,website} = user            // distructure in user
    return (
        <div className="bg-cyan-900 rounded-lg w-auto p-8 m-6 text-center">
            <h2 className="font-semibold text-lg">Details about User {name}</h2>
            <p>{username}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{website}</p> 
        </div>
    );
};

export default UserDetails;
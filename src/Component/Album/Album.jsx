
import { Link, useNavigate } from "react-router-dom"
const Album = ({ album }) => {
    const { id, title } = album;

    const navigate = useNavigate();    //use navigate hook

    const handleShow = () =>{
        navigate(`/album/${id}`);       //make dynamic navigation
    }

    return (

        <div className="border-2 border-indigo-950 p-3 m-3 rounded-lg">
            <div>
                <h1 className="text-2xl font-semibold">Id No {id}</h1>
                <h1><span className="text-amber-400">Title</span> : {title}</h1>
            </div>
            <div className="mt-3">
                {/* <Link to={`/album/${id}`}>
                    <button className="btn btn-sm ml-4 bg-amber-900 border-0">Show Albums</button>
                </Link> */}
                <button onClick={handleShow} className="btn btn-sm ml-4 bg-amber-900 border-0">Details</button>
                {/* add event handler */}
            </div>
        </div>
    );
};

export default Album;
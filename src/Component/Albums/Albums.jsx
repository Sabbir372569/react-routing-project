import { useLoaderData } from "react-router-dom"
import Album from "../Album/Album";

const Albums = () => {

    const albums = useLoaderData();

    return (
        <div className="bg-cyan-900 rounded-lg w-auto p-4 m-5 text-center">  
            <div className="p-4">
                <h2 className="text-xl font-semibold">Count Albums {albums.length}</h2>
                <p className="text-l font-medium">This is Lot of Albums</p>
            </div>
            <div className="post">
                {
                    albums.map(album => <Album key={album.id} album={album}></Album>)
                }
            </div>
        </div>
    );
};

export default Albums;
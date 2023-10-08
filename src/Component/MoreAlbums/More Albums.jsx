import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const MoreAlbums = () => {

    const album = useLoaderData();       // data ta ke load korar jonno useLoderData hook use kora hoy.
    const {albumId} = useParams();       // use a useParams hook.
    /*
        Chaile params take hook baboher na koreo nicer moto kore use kora jay
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/albums/${params.albumId}`),     
    */
    const navigate = useNavigate();      // use useNavigate hook to navigate other Router.
    const { id, title } = album;         // distructure in user.

    console.log(albumId);

    const handleGoBack = () =>{
        navigate(-1);                    // minus 1 means go back one step
    }

    return (
        <div className="bg-cyan-900 rounded-lg w-auto p-8 m-6 text-center">
            <h1 className="text-2xl font-semibold">Album Id : <span className="text-rose-200">{id}</span></h1>
            <h1 className="text-xl font-semibold"><span className="text-amber-400">Title : </span> {title} .</h1>
            <button onClick={handleGoBack} className="btn btn-sm mt-4 bg-amber-900 border-0">Go back</button>
            {/* add a event handler */}
        </div>
    );
};

export default MoreAlbums;




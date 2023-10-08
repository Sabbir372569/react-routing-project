import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id,title,body} = post;
    return (
        <div className="bg-cyan-900 rounded-lg w-auto p-8 m-6 text-center">
            <h2 className="text-2xl font-semibold">Post Details : <span className="text-rose-200">{id}</span></h2>
            <h2 className="text-xl font-semibold"><span className="text-amber-400">Title</span> : {title}</h2>
            <p>{body} .</p>
        </div>
    );
};

export default PostDetails;
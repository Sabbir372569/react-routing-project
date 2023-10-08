import { Link } from "react-router-dom";

const Post = ({ post }) => {
    const {id, title, body} = post;
    return (
        <div className=" p-3 m-3 border-2 border-solid border-amber-950 rounded-lg">
            <h2 className=" font-semibold text-xl">Post Id {id}</h2>
            <h5 className="text-xl font-semibold"><span className="text-amber-400">Title : </span> {title} .</h5>
            <p className="pt-2"><span className="text-amber-400">Description</span> : {body}.</p>
            <div className="mt-5 place-items-stretch">
                <Link className="text-sky-500 pt-4" to={`/post/${id}`}>Post Details</Link>
                <Link className='text-sky-500 pt-4' to={`/post/${id}`}>
                    <button className="btn btn-sm ml-4 bg-amber-900 border-0 ">Click Me</button>
                </Link>
            </div>
        </div>
    );
};

export default Post;
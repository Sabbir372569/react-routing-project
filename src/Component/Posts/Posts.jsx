import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import './Posts.css'
                                                                    
const Posts = () => {
    const posts = useLoaderData();
    return (
        <div className="bg-cyan-900 rounded-lg w-auto p-4 m-5 text-center">
            <div className="p-3">
                <h2 className="text-xl font-semibold">Posts {posts.length}</h2>
                <p className="text-l font-medium">This is our Post Details</p>
            </div>
            <div className="post">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;
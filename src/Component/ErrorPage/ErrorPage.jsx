import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();     // use react useRouteError hook 
    console.log(error);                                    // error page baboher korar jonno main.jsx file er parent er vitor errorElement namok property
    return (
        <div>
            <h2>Oops!!!</h2>
            <p>{error.statusText || error.message}</p>    {/* jodi statusText na thake tobe message dekhabe */}
            {
                error.status === 404 &&    //jodi kono karone status 404 dekhai tobe nicer moto kore alada message dekhabe
                <div>
                    <h2>There is a no Content here</h2>
                    <p>please check the route or something else</p>
                    <Link to="/">
                        <button className="btn btn-sm mt-4 bg-amber-900 border-0">Go back</button>
                    </Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    const navigation = useNavigation();
    /* useNavigation hook form submitting er khetre khub kaje dey 
        amra loading er khetre use korechi */
    const location = useLocation();
    console.log(location); // side effect er jonno khubi kajer ekta jinis useLocation hook
    return (
        <div className="mx-32 my-6 text-center">
            <Header></Header>
            {
                navigation.state === 'loding' ? 
                <p>loading....</p>:
                <Outlet></Outlet>
            }     
            <Footer></Footer>
        </div>
    );
};

export default Home;
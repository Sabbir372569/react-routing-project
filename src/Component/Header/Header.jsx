import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="text-xl font-medium  text-lime-800 flex justify-between">
                <div>
                    <span className="text-3xl font-semibold  text-orange-700 ml-6">Article BD</span>
                </div>
                <div className="mr-6 ">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="users">User Details</NavLink>
                    <NavLink to="posts">Posts</NavLink>
                    <NavLink to="albums">Albums</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="contact">Contact</NavLink>
                </div>
                {/* 
                                              ### 
                                  {Anchor tag VS Link Vs Navlink} 

                    # anchor tag er poriborte react ea (a=Link) baboher kora hoi.
                    # href er bodole (href=to) baboher kora hoy.
                    # to property diye kon route ea jabo ta defined kore.
                        Ultimately browser ea eta anchor tag ei hoye jabe. 
                    # anchor tag er theke better hocce Link, 
                        anchor baboher korle reload marbe. 
                    # Link use korle spa(single page application) ea reaload korbe na.
                    # Navlink er subida holo chaile custom  style oo babohar kora jay.
                            
                        <NavLink to="albums"
                            style={({ isActive, isPending })}=> {
                                return {
                                    fontweight: isActive ? "bold" : " ",
                                    color: isPending ? "red" : "black",
                                };
                            }}
                            >
                            Albums
                        </NavLink>
                
                    
                //Anchor Tag <a> 
                <a href="/">Home</a>
                <a href="about">About</a>
                <a href="contact">Contact</a>

                //Link
                <Link to="/">Home</Link>
                <Link to="users">User Details</Link>
                <Link to="posts">Posts</Link>

                //NavLink
                <NavLink to="albums"
                style={({ isActive, isPending })}=> {
                    return {
                        fontweight: isActive ? "bold" : " ",
                        color: isPending ? "red" : "black",
                    };
                }}
                >
                Albums</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="contact">Contact</NavLink> 
                   
                */}
            </nav>
        </div>
    );
};

export default Header;
import React from "react";
import { Link } from "react-router-dom";


class Header extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar">
                        <ul>
                            <Link to="/Home" className="NavLink"><li>Home</li></Link>
                            <Link to="/AboutReact" className="NavLink"><li>About React</li></Link>
                            <Link to="/BestReactTutorials" className="NavLink"><li>Best React Tutorials</li></Link>
                        </ul>
                    </nav>
                </header>
            </div>
        )        
    }
}

export default Header

// Here I have added the className "navbar" to the nav so I can style it
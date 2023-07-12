import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();


    const logout = () => {
        localStorage.clear();
        navigate('/SignUp')
    }


    return (

        <div>
            <img src="https://png.pngtree.com/template/20191017/ourmid/pngtree-letter-n-logo-vector-designs-initials-n-logo-image_320358.jpg" alt="logo" className="logo"></img>
            {auth ? <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update"> Update Products</Link></li>

                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="signup">Logout ({JSON.parse(auth).name})</Link></li>



            </ul>
                :
                <ul className="nav-ul nav-right">
                    <li> <Link to="/SignUp" > SignUp  </Link></li>
                    <li> <Link to="/Login" > Login  </Link></li>
                </ul>

            }

        </div>

    )


}

export default Nav;
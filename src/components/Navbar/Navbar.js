import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <header class="header">
            <div class="left">
                <h3>LOGO</h3>
            </div>

            <div class="mid">
                <ul class="navbar">
                   <li> <NavLink className="" to='/' end activeClassNem="active">Home</NavLink></li>
                   <li> <NavLink className="" to='/about' end activeClassNem="active">About Us</NavLink></li>
                   <li> <NavLink className="" to='/timeline' end activeClassNem="active">Timeline</NavLink></li>
                   <li> <NavLink className="" to='/contact' end activeClassNem="active">Contact Us</NavLink></li>
                </ul>
            </div>

            <div class="right">
                <a href="tel:9188500270"><button class="btn">Call us Now</button></a>
                <a href="mailto:jaisondennis090@gmail.com"><button class="btn">Email us</button></a>
            </div>
        </header>
    )
}

export default Navbar;
import profile from "../assets/icons/avatar.png"
import facebook from "../assets/icons/facebook.png"
import email from "../assets/icons/gmail.png"
import line from "../assets/icons/line.png"

const Navbar = () =>{
    return(
<div className="flex justify-between item-center">
        <img src={profile} alt="profile" width={120} className="cursor-pointer"/>
        <ul className="hidden md:flex">
            <li className="px-2.5">
                <a href="https://www.facebook.com/" target=" blank">
                <img src={facebook} alt="facebook" width={100}/>
                </a>
            </li>
            <li className="px-2.5">
                <a href="https://mail.google.com" target=" blank">
                <img src={email} alt="email" width={100}/>
                </a>
            </li>
            <li className="px-2.5">
                <a href="https://line.me/en/" target=" blank">
                <img src={line} alt="line" width={100}/>
                </a>
            </li>
        </ul>
</div>
    )
}

export default Navbar;
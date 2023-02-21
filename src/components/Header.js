import { Link } from "react-router-dom";

const Header = () => {

    return (
        <section id="header">
            <Link to="/" id="l-header">Dave Burkhart</Link>
            <div id="r-header">Full Stack Developer</div>
        </section>
    )
}


export default Header;
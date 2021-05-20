import logoBlack from '../images/logo-black.png';

function Footer() {
    return (
        <footer>
            <div className="footer">
            <a href="/"><img className="logo" alt='logo' src={logoBlack}></img></a>

            <div className="about footer-info">
                <h3>
                    About
                </h3>
                <p>
                    The Team
                </p>
            </div>

            <div className="account footer-info">
                <h3>
                    Account
                </h3>
                <p>
                    Settings
                </p>
                <p>
                    Favourites
                </p>
            </div>

            <div className="community footer-info">
                <h3>
                    Community
                </h3>
                <p>
                    Forum
                </p>
                <p>
                    Reviews
                </p>
            </div>

            <div className="contact footer-info">
                <h3>
                    Contact
                </h3>
                <p>
                    Facebook
                </p>
                <p>
                    Instagram
                </p>
            </div>
            </div>
        </footer>
    )
}

export default Footer;

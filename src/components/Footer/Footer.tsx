import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <a href="#">
                    <img src="/images/logo.png" id="foto-logo"/>
                </a>
                <p>&copy; Michela Sin T.A.C.C.</p>
            </div>
            <div className="redes-sociales">
                <a href="https://wa.me/02615544092">
                    <img src="/icons/wpp.png"/>
                </a>
                <a href="https://www.instagram.com/michela.sintacc/">
                    <img src="/icons/instagram.png"/>
                </a>
                <a href="https://www.facebook.com/michelasintacc/">
                    <img src="/icons/facebook.png"/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;
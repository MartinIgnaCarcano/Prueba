import './ContactoForm.css';

const ContactForm = () => {
    return (
        <div className="pantallaContacto">

            <div className="contacto">

                <div className="titulo">
                    <h1>Contáctenos</h1>
                </div>

                <div className="texto">
                    <p>Nuestra ubicación:</p>
                    <p>Rondeau, Adolfo Calle y, M5519 Guaymallén, Mendoza</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13398.5589897842!2d-68.7911508!3d-32.9076919!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x688eae166ccd5c1%3A0xb5833f2e4858aa3c!2sMichela%20Sin%20Tacc!5e0!3m2!1ses-419!2sar!4v1679147894272!5m2!1ses-419!2sar"
                        height="450"
                    ></iframe>
                    <div className="horarios">
                        <h3>Horarios</h3>
                        <p>Lunes a Sabado</p>
                        <p>9:00-13:00</p>
                        <p>18:00-21:00</p>
                        <p>Domingo</p>
                        <p>9:00-13:00</p>
                    </div>
                </div>

                <div className="redes-sociales">
                    <a href="https://wa.me/02615544092">
                        <img src="/icons/wpp.png" />
                    </a>
                    <a href="https://www.instagram.com/michela.sintacc/">
                        <img src="/icons/instagram.png" />
                    </a>
                    <a href="https://www.facebook.com/michelasintacc/">
                        <img src="/icons/facebook.png" />
                    </a>
                </div>

            </div>

            <div className="formularioContacto">

            </div>
        </div>
    )
}
export default ContactForm;
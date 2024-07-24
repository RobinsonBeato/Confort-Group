const Contact = () => {

    return (
        <section className="contact margin" id="contact">

            <div className="contact-content section-content">

                <p className="section-subtitle">Contactos</p>

                <h2 className="h3 section-title">¿Tienes alguna pregunta? <br /> ¡Contáctanos!</h2>

                <p className="section-text">
                    Ponte en contacto y déjame saber cómo puedo ayudarte. Completa el formulario y me pondré en contacto contigo lo antes posible.
                </p>

                <ul className="contact-list">

                    <li className="contact-list-item">

                        <div className="contact-item-icon">
                            <ion-icon name="location-outline"></ion-icon>
                        </div>

                        <div className="wrapper">
                            <h3 className="h4 contact-item-title">Dirección</h3>

                            <address style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }} className="contact-info">
                                Avenida Garzón 973
                            </address>

                        </div>


                    </li>

                    <li className="contact-list-item">

                        <div className="contact-item-icon">
                            <ion-icon name="call-outline"></ion-icon>
                        </div>

                        <div className="wrapper">
                            <h3 className="h4 contact-item-title">Teléfono:</h3>
                            <a href="tel:+598094942434" className="contact-info">(+598) 094 942 434</a>

                            <a href="tel:+598094666352" className="contact-info">(+598) 094 666 352</a>


                        </div>

                    </li>

                    <li className="contact-list-item">

                        <div className="contact-item-icon">
                            <ion-icon name="mail-outline"></ion-icon>
                        </div>

                        <div className="wrapper">
                            <h3 className="h4 contact-item-title">Email:</h3>

                            <a href="mailto:residencial.renacer@hotmail.com" className="contact-info">residencial.renacer@hotmail.com</a>

                            <a href="mailto:residencial.renacer@hotmail.com" className="contact-info">residencial.renacer@hotmail.com</a>
                        </div>

                    </li>

                    <li>
                        <ul className="contac-social-list">

                            <li>
                                <a href="https://www.facebook.com/profile.php?id=100063217932172" className="contact-social-link">
                                    <div className="tooltip">Facebook</div>

                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="contact-social-link">
                                    <div className="tooltip">Twitter</div>

                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="contact-social-link">
                                    <div className="tooltip">Linkedin</div>

                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="https://www.instagram.com/residencial.renacer/" className="contact-social-link">
                                    <div className="tooltip">Instagram</div>

                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                            </li>

                        </ul>
                    </li>

                </ul>

            </div>

            <form action="" className="contact-form">

                <div className="form-wrapper">

                    <label htmlFor="name" className="form-label">Nombre</label>

                    <div className="input-wrapper">

                        <input type="text" name="name" id="name" required placeholder="Nombre Completo" className="input-field" />

                        <ion-icon name="person-circle"></ion-icon>

                    </div>

                </div>

                <div className="form-wrapper">

                    <label htmlFor="email" className="form-label">Email</label>

                    <div className="input-wrapper">

                        <input type="email" name="email" id="email" required placeholder="ejemplo@gmail.com"
                            className="input-field" />

                        <ion-icon name="mail"></ion-icon>

                    </div>

                </div>

                <div className="form-wrapper">

                    <label htmlFor="phone" className="form-label">Teléfono</label>

                    <div className="input-wrapper">

                        <input type="tel" name="phone" id="phone" required placeholder="Número de Teléfono" className="input-field" />

                        <ion-icon name="call"></ion-icon>

                    </div>

                </div>

                <div className="form-wrapper">

                    <label htmlFor="message" className="form-label">Mensaje</label>

                    <div className="input-wrapper">

                        <textarea name="message" id="message" required placeholder="Escriba su consulta..."
                            className="input-field"></textarea>

                        <ion-icon name="chatbubbles"></ion-icon>

                    </div>

                </div>

                <button type="submit" className="btn btn-primary">Enviar</button>

            </form>

        </section>


    )
};

export default Contact;


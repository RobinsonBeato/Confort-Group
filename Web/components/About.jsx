
const About = () => {

    return (
        <section className="about" id="about">

            <figure className="about-banner">
                <img src="./assets/images/about.png" alt="A man in a alice blue shirt with a thinking expression"
                    className="w-100"/>
            </figure>

            <div className="about-content section-content">

                <p className="section-subtitle margin">Sobre Nosotros</p>

                <h2 className="h3 section-title margin">¿Necesita cuidado especializado para adultos mayores en Montevideo? ¡Podemos ayudar!</h2>

                <p className="section-text margin">
                  ¡Hola! Somos Confort-Group, un grupo dedicado al cuidado de adultos mayores en Montevideo, con más de tres residenciales. Nos apasiona proporcionar un ambiente seguro y confortable para nuestros residentes, asegurando atención de calidad y bienestar. Estamos comprometidos en ofrecer soluciones creativas y efectivas para el cuidado integral de los adultos mayores, adaptándonos constantemente para satisfacer sus necesidades cambiantes.
                </p>

                <div className="btn-group">
                    <button className="btn btn-secondary">Hire me</button>

                    <button className="btn btn-primary">Download cv</button>
                </div>

            </div>

        </section>
    )
};

export default About;
import { Link } from 'react-router-dom';
const Centros = () => {

    return (
        <section className="project margin" id="centros">

            <ul className="project-list">

                <li >
                    <div className="project-content section-content">

                        <p className="section-subtitle">Centros</p>

                        <h2 className="h3 section-title">Conoce nuestros Residenciales</h2>

                        <p className="section-text">
                            Te invitamos a conocer nuestros centros residenciales para adultos mayores, donde ofrecemos un entorno acogedor, seguro y cómodo. Descubre nuestras instalaciones diseñadas para el bienestar y la felicidad de tus seres queridos.
                        </p>

                    </div>
                </li>

                <li>
                    <Link to="/residencial-renacer" className="project-card" >


                        <figure className="card-banner">
                            <img src="./assets/images/r1.jpeg" className="w-100" alt="A macintosh on a yellow background." />
                        </figure>

                        <div className="card-content">
                            <h3 className="h4 card-title">Residencial Renacer</h3>


                        </div>

                    </Link>
                </li>

                <li>
                    <Link to="/residencial-gala" className="project-card" >

                        <figure className="card-banner">
                            <img src="./assets/images/r2.jpeg" className="w-100" alt="On a Blue background, a Wacom and a mouse." />
                        </figure>

                        <div className="card-content">
                            <h3 className="h4 card-title">Residencial Gala</h3>


                        </div>

                    </Link>
                </li>

                <li>
                    <Link to="/residencial-monaco" className="project-card" >  

                        <figure className="card-banner">
                            <img src="./assets/images/r3.jpeg" className="w-100"
                                alt="A Cassette tape on a mellow apricot background." />
                        </figure>

                        <div className="card-content">
                            <h3 className="h4 card-title">Residencial Mónaco</h3>


                        </div>

                    </Link>
                </li>





            </ul>

        </section>
    )
};

export default Centros;
import { Link } from 'react-router-dom';
import Logo from './Logo';
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
                    <div className="project-card" >


                        <figure className="card-banner">
                            <img src="./assets/images/renacer1.webp" className="w-100" alt="A macintosh on a yellow background." />
                        </figure>
                        <Link to="/residencial-renacer" style={{ width: '100x', position: 'absolute', bottom: '15px', right: '15px', zIndex: '2', color: 'white', border: '1px solid white', borderRadius: '10px' }} className="btn btn-secondary ">Conocer</Link>
                        <div className="card-content">
                            <h3 className="h4 card-title">Residencial Renacer</h3>


                        </div>

                    </div>
                </li>

                <li>
                    <div className="project-card" >

                        <figure className="card-banner">
                            <img  src="./assets/images/g11.webp" className="w-100" alt="On a Blue background, a Wacom and a mouse." />
                        </figure>
                        <Logo style={{ width: '35%', position: 'absolute', top: '15px', left: '15px', zIndex: '2'}} />
                        <Link to="/residencial-gala" style={{ width: '100x', position: 'absolute', bottom: '15px', right: '15px', zIndex: '2', color: 'white', border: '1px solid white', borderRadius: '10px' }} className="btn btn-secondary ">Conocer</Link>
                        <div className="card-content">
                            <h3 className="h4 card-title">Residencial Gala</h3>


                        </div>

                    </div>
                </li>

                <li>
                    <div className="project-card" >

                        <figure className="card-banner">
                            <img  src="./assets/images/m1.webp" className="w-100"
                                alt="A Cassette tape on a mellow apricot background." />
                        </figure>
                        <Link to="/residencial-monaco" style={{ width: '100x', position: 'absolute', bottom: '15px', right: '15px', zIndex: '2', color: 'white', border: '1px solid white', borderRadius: '10px' }} className="btn btn-secondary ">Conocer</Link>
                        <div className="card-content">
                            <h3 className="h4 card-title">Residencial Mónaco</h3>


                        </div>

                    </div>
                </li>





            </ul>

        </section>
    )
};

export default Centros;
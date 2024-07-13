import { Link } from "react-router-dom";

const Stats = () => {

  return (
    <section className="stats margin" id="stats">
      <ul className="stats-list">

        <li>
          <a href="#about" className="stats-card">

            <div className="card-icon">
              <img src="./assets/images/stats-card_icon-1.png" alt="Badge icon" />
            </div>

            <h2 className="h2 card-title">
              10+ <strong>De experiencia</strong>
            </h2>

            <ion-icon name="chevron-forward-outline"></ion-icon>

          </a>
        </li>

        <li>
          <Link to="/servicios" className="stats-card">

            <div className="card-icon">
              <img src="./assets/images/stats-card_icon-2.png" alt="Checkmark icon" />
            </div>

            <h2 className="h2 card-title">
              15+ <strong>Servicios de bienestar</strong>
            </h2>

            <ion-icon name="chevron-forward-outline"></ion-icon>

          </Link>
        </li>

        <li>
          <a href="#rates" className="stats-card">

            <div className="card-icon">
              <img src="./assets/images/stats-card_icon-3.png" alt="Peoples rating icon" />
            </div>

            <h2 className="h2 card-title">
             150+ <strong>Clientes Satisfechos</strong>
            </h2>

            <ion-icon name="chevron-forward-outline"></ion-icon>

          </a>
        </li>

      </ul>
    </section>
  )
};

export default Stats;
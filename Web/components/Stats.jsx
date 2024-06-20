const Stats = () => {

  return (
    <section className="stats" id="stats">
      <ul className="stats-list">

        <li>
          <a href="#" className="stats-card">

            <div className="card-icon">
              <img src="./assets/images/stats-card_icon-1.png" alt="Badge icon" />
            </div>

            <h2 className="h2 card-title">
              12+ <strong>De experiencia</strong>
            </h2>

            <ion-icon name="chevron-forward-outline"></ion-icon>

          </a>
        </li>

        <li>
          <a href="#" className="stats-card">

            <div className="card-icon">
              <img src="./assets/images/stats-card_icon-2.png" alt="Checkmark icon" />
            </div>

            <h2 className="h2 card-title">
              30+ <strong>Servicios de bienestar</strong>
            </h2>

            <ion-icon name="chevron-forward-outline"></ion-icon>

          </a>
        </li>

        <li>
          <a href="#" className="stats-card">

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
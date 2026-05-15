const combos = [
  { name: "Twitch + Yuumi", style: "Scaling", games: 0, wr: "—", confidence: "Théorique" },
  { name: "Jinx + Leona", style: "All-in", games: 0, wr: "—", confidence: "Théorique" },
  { name: "Zeri + Yuumi", style: "Hypercarry", games: 0, wr: "—", confidence: "Théorique" },
  { name: "Senna + Maokai", style: "Catch / contrôle", games: 0, wr: "—", confidence: "Théorique" },
  { name: "Jinx + Renata", style: "Teamfight", games: 0, wr: "—", confidence: "Théorique" },
];

export default function Home() {
  return (
    <div className="page">
      <aside className="sidebar">
        <div className="logo">Botlane Lab</div>
        <div className="subtitle">
          Coach personnel pour PepitoGT ADC et Joks support.
        </div>

        <nav className="nav">
          <div className="nav-item active">Dashboard</div>
          <div className="nav-item">Draft Assistant</div>
          <div className="nav-item">Combos</div>
          <div className="nav-item">Matchups</div>
          <div className="nav-item">Game History</div>
          <div className="nav-item">Settings Riot</div>
        </nav>
      </aside>

      <main className="main">
        <header className="header">
          <div>
            <h1 className="h1">Duo Botlane Intelligence</h1>
            <p>
              Analyse fiable, recommandations traçables, et progression duoQ.
            </p>
          </div>

          <div className="sync-card">
            <div className="sync-title">Connexion Riot — V2 prête</div>
            <div className="form-row">
              <input className="input" placeholder="PepitoGT" />
              <input className="input" placeholder="TAG" />
            </div>
            <div className="form-row">
              <input className="input" placeholder="Joks" />
              <input className="input" placeholder="TAG" />
            </div>
            <button className="button">Synchroniser les games</button>
          </div>
        </header>

        <section className="grid">
          <div className="card">
            <div className="card-label">Combo recommandé</div>
            <div className="card-value">Twitch + Yuumi</div>
            <div className="card-note">Scaling, late game, teamfight</div>
          </div>

          <div className="card">
            <div className="card-label">Winrate duo</div>
            <div className="card-value">—</div>
            <div className="card-note">En attente de sync Riot</div>
          </div>

          <div className="card">
            <div className="card-label">Games analysées</div>
            <div className="card-value">0</div>
            <div className="card-note">La data réelle arrive en V3</div>
          </div>

          <div className="card">
            <div className="card-label">Fiabilité</div>
            <div className="card-value">Base</div>
            <div className="card-note">Théorique tant que Riot n’est pas connecté</div>
          </div>
        </section>

        <section className="section">
          <div className="card">
            <div className="card-label">Combo Library</div>
            <div className="combo-list">
              {combos.map((combo) => (
                <div className="combo" key={combo.name}>
                  <div>
                    <div className="combo-name">{combo.name}</div>
                    <div className="card-note">{combo.style}</div>
                  </div>
                  <div><span className="badge">{combo.confidence}</span></div>
                  <div>{combo.games} games</div>
                  <div>{combo.wr} WR</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card reco">
            <div className="card-label">Plan de game recommandé</div>
            <div className="big-reco">Jouer scaling propre</div>
            <ol className="steps">
              <li>Éviter les trades longs avant le premier back.</li>
              <li>Ward rivière vers 2:45 pour protéger le bot.</li>
              <li>Jouer autour du spike niveau 6.</li>
              <li>Forcer les fights après 2 items ADC.</li>
              <li>Review automatique après sync Riot.</li>
            </ol>
          </div>
        </section>

        <p className="footer-note">
          V2 PC : base stable. Prochaine étape : brancher Riot API, Supabase, puis les recommandations réelles.
        </p>
      </main>
    </div>
  );
}

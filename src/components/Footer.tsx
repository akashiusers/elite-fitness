import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h2>ELITE <span>FITNESS</span></h2>
            <p>La référence en matière de performance, d'équipement et de coaching. Dépassez vos limites avec nous.</p>
          </div>
          
          <div className={styles.linksGroup}>
            <h3>Liens Rapides</h3>
            <ul>
              <li><a href="#home">Accueil</a></li>
              <li><a href="#gallery">Galerie</a></li>
              <li><a href="#plans">Forfaits</a></li>
              <li><a href="#trainers">Entraîneurs</a></li>
            </ul>
          </div>
          
          <div className={styles.linksGroup}>
            <h3>Légal</h3>
            <ul>
              <li><a href="#">Conditions d'utilisation</a></li>
              <li><a href="#">Politique de confidentialité</a></li>
              <li><a href="#">Règlement intérieur</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Elite Fitness. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

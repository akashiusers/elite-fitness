import styles from './Stats.module.css';

export default function Stats() {
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <h3>5000+</h3>
            <p>Membres Actifs</p>
          </div>
          <div className={styles.statCard}>
            <h3>50+</h3>
            <p>Entraîneurs Certifiés</p>
          </div>
          <div className={styles.statCard}>
            <h3>15+</h3>
            <p>Années d'Excellence</p>
          </div>
          <div className={styles.statCard}>
            <h3>24/7</h3>
            <p>Accès Illimité</p>
          </div>
        </div>
      </div>
    </section>
  );
}

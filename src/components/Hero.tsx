import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.overlay}></div>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.headline}>
            REPOUSSEZ VOS <span className={styles.accentText}>LIMITES</span>
          </h1>
          <p className={styles.subhead}>
            L'expérience de remise en forme ultime, avec un équipement de pointe et des experts dédiés à vos objectifs.
          </p>
          <div className={styles.ctaGroup}>
            <a href="#plans" className={styles.primaryBtn}>Commencer Aujourd'hui</a>
            <a href="#gallery" className={styles.secondaryBtn}>Découvrir le Club</a>
          </div>
        </div>
      </div>
    </section>
  );
}

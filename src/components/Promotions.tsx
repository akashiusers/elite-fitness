import styles from './Promotions.module.css';

export default function Promotions() {
  return (
    <section id="promotions" className={styles.section}>
      <div className="container">
        <div className={styles.promoWrapper}>
          <div className={styles.promoContent}>
            <div className={styles.badge}>Offre Limitée</div>
            <h2>TRANSFORMEZ VOTRE ÉTÉ</h2>
            <p>Rejoignez Elite Fitness aujourd'hui et bénéficiez de <strong>50% de réduction</strong> sur votre premier mois pour tout abonnement Premium ou VIP.</p>
            <a href="#plans" className={styles.btn}>En Profiter Maintenant</a>
          </div>
          <div className={styles.promoImage}>
            {/* Using a background image in CSS instead to make it sleek */}
          </div>
        </div>
      </div>
    </section>
  );
}

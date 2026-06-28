import styles from './Trainers.module.css';

const trainers = [
  { id: 1, name: 'Marcus R.', role: 'Head Coach', specialty: 'Force & Conditionnement', img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop' },
  { id: 2, name: 'MOSTAFA ELHANAFI', role: 'Coach Personnel', specialty: 'Musculation & Suivi', img: '/mostafa.jpg' },
  { id: 3, name: 'David K.', role: 'Spécialiste', specialty: 'Mobilité & Récupération', img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1974&auto=format&fit=crop' }
];

export default function Trainers() {
  return (
    <section id="trainers" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2>NOTRE <span>ÉQUIPE</span></h2>
          <p>Des experts dédiés à repousser vos limites.</p>
        </div>

        <div className={styles.grid}>
          {trainers.map(t => (
            <div key={t.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={t.img} alt={t.name} loading="lazy" />
                <div className={styles.socialOverlay}>
                  <span>Voir le profil</span>
                </div>
              </div>
              <div className={styles.info}>
                <h3>{t.name}</h3>
                <p className={styles.role}>{t.role}</p>
                <p className={styles.specialty}>{t.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

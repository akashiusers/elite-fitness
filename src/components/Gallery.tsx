import styles from './Gallery.module.css';

const gallery = [
  'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop'
];

export default function Gallery() {
  return (
    <section id="gallery" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2>NOTRE <span>CLUB</span></h2>
          <p>Des installations premium conçues pour la performance absolue.</p>
        </div>
        <div className={styles.masonry}>
          {gallery.map((img, idx) => (
            <div key={idx} className={`${styles.imageWrapper} ${idx === 0 || idx === 3 ? styles.large : ''}`}>
              <img src={img} alt={`Gym Facility ${idx + 1}`} loading="lazy" />
              <div className={styles.overlay}>
                <span>Aperçu</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

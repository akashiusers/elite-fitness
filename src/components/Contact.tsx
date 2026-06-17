import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.info}>
            <h2>PASSEZ À <span>L'ACTION</span></h2>
            <p className={styles.desc}>Notre équipe est là pour répondre à toutes vos questions et vous aider à démarrer votre transformation.</p>
            
            <div className={styles.contactDetails}>
              <div className={styles.detailItem}>
                <div className={styles.icon}>📍</div>
                <div>
                  <h4>Adresse</h4>
                  <p>123 Boulevard de la Forme, Paris</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <div className={styles.icon}>📞</div>
                <div>
                  <h4>Téléphone</h4>
                  <p>+33 1 23 45 67 89</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <div className={styles.icon}>✉️</div>
                <div>
                  <h4>Email</h4>
                  <p>contact@elitefitness.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.formWrapper}>
            <form className={styles.form}>
              <h3>Envoyez-nous un message</h3>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="Votre Nom" required className={styles.input} />
              </div>
              <div className={styles.inputGroup}>
                <input type="email" placeholder="Votre Email" required className={styles.input} />
              </div>
              <div className={styles.inputGroup}>
                <textarea placeholder="Comment pouvons-nous vous aider ?" required rows={5} className={styles.textarea}></textarea>
              </div>
              <button type="submit" className={styles.btn}>Envoyer le Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from 'react';
import styles from './page.module.css';

const plans = [
  { id: 1, name: 'Forfait de Base', price: 29.99, features: ['Accès à la salle de sport', 'Équipement standard', 'Accès aux vestiaires'] },
  { id: 2, name: 'Forfait Premium', price: 59.99, features: ['Accès à la salle de sport', 'Cours collectifs', 'Consultation avec un entraîneur personnel', 'Accès aux vestiaires'] },
  { id: 3, name: 'Forfait VIP', price: 99.99, features: ['Accès complet', 'Entraîneur personnel', 'Conseils en nutrition', 'Support prioritaire'] },
];

const gallery = [
  'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop'
];

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = (plan: any) => {
    setSelectedPlan(plan);
    setIsSuccess(false);
  };

  const handlePayment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProcessing(true);
    
    const formData = new FormData(e.currentTarget);
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    
    try {
      await fetch('/api/subscriptions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          planName: selectedPlan.name,
          planPrice: selectedPlan.price
        })
      });
      
      setIsProcessing(false);
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      setIsProcessing(false);
    }
  };

  const closeModal = () => {
    setSelectedPlan(null);
    setIsSuccess(false);
  };

  return (
    <main className={styles.main}>
      <nav className={styles.navbar}>
        <div className="container">
          <div className={styles.navContent}>
            <h1 className={styles.logo}>ELITE <span>FITNESS</span></h1>
            <ul className={styles.navLinks}>
              <li><a href="#gallery">Galerie</a></li>
              <li><a href="#plans">Forfaits</a></li>
              <li><a href="#promotions">Promotions</a></li>
              <li><a href="#trainers">Entraîneurs</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section className={styles.hero} id="home">
        <div className={styles.heroContent}>
          <h2>REPOUSSEZ VOS LIMITES</h2>
          <p>L'expérience de remise en forme ultime adaptée à vos objectifs. Rejoignez Elite Fitness dès aujourd'hui.</p>
          <a href="#plans" className={styles.joinButton}>S'inscrire</a>
        </div>
      </section>

      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3>5000+</h3>
              <p>Membres</p>
            </div>
            <div className={styles.statCard}>
              <h3>50+</h3>
              <p>Entraîneurs Experts</p>
            </div>
            <div className={styles.statCard}>
              <h3>15+</h3>
              <p>Années d'expérience</p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Notre <span>Galerie</span></h2>
          <div className={styles.galleryGrid}>
            {gallery.map((img, idx) => (
              <img key={idx} src={img} alt={`Galerie ${idx}`} className={styles.galleryImage} />
            ))}
          </div>
        </div>
      </section>

      <section id="plans" className={`${styles.section} ${styles.altBg}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Nos <span>Forfaits</span></h2>
          <div className={styles.plansGrid}>
            {plans.map(plan => (
              <div key={plan.id} className={styles.planCard}>
                <h3>{plan.name}</h3>
                <div className={styles.price}>{plan.price}<span>$ /mois</span></div>
                <ul className={styles.planFeatures}>
                  {plan.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                <button 
                  className={styles.subscribeButton}
                  onClick={() => handleSubscribe(plan)}
                >
                  S'abonner
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="promotions" className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Promotions <span>Actuelles</span></h2>
          <div className={styles.promoCard}>
            <h3>Offre Spéciale d'Été</h3>
            <p>Obtenez 50 % de réduction sur votre premier mois en vous inscrivant au forfait VIP !</p>
            <a href="#plans" className={styles.joinButton}>Profiter de l'Offre</a>
          </div>
        </div>
      </section>

      <section id="trainers" className={`${styles.section} ${styles.altBg}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Entraîneurs <span>Experts</span></h2>
          <div className={styles.trainersGrid}>
            <div className={styles.trainerCard}>
              <div className={styles.trainerImagePlaceholder}>JD</div>
              <h3>John Doe</h3>
              <p>Expert en Haltérophilie</p>
            </div>
            <div className={styles.trainerCard}>
              <div className={styles.trainerImagePlaceholder}>JS</div>
              <h3>Jane Smith</h3>
              <p>Cardio & HIIT</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Contactez-<span>nous</span></h2>
          <form className={styles.contactForm}>
            <input type="text" placeholder="Votre Nom" required className={styles.inputField} />
            <input type="email" placeholder="Votre Email" required className={styles.inputField} />
            <textarea placeholder="Votre Message" required className={styles.textArea}></textarea>
            <button type="submit" className={styles.joinButton}>Envoyer le Message</button>
          </form>
        </div>
      </section>

      {/* Subscription Modal */}
      {selectedPlan && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button className={styles.closeModal} onClick={closeModal}>&times;</button>
            
            {!isSuccess ? (
              <>
                <h2>Finaliser votre Abonnement</h2>
                <p>Vous avez sélectionné : <strong>{selectedPlan.name}</strong> ({selectedPlan.price}$/mois)</p>
                
                <form className={styles.paymentForm} onSubmit={handlePayment}>
                  <input type="text" name="fullName" placeholder="Nom Complet" required className={styles.inputField} />
                  <input type="email" name="email" placeholder="Adresse Email" required className={styles.inputField} />
                  <input type="text" placeholder="Numéro de carte (Fictif)" required className={styles.inputField} pattern="[0-9]{16}" title="Numéro de carte à 16 chiffres" />
                  
                  <div className={styles.formRow}>
                    <input type="text" placeholder="MM/AA" required className={styles.inputField} />
                    <input type="text" placeholder="CVC" required className={styles.inputField} />
                  </div>
                  
                  <button type="submit" className={styles.joinButton} disabled={isProcessing}>
                    {isProcessing ? 'Traitement en cours...' : `Payer ${selectedPlan.price}$`}
                  </button>
                </form>
              </>
            ) : (
              <div className={styles.successMessage}>
                <div className={styles.checkmark}>✓</div>
                <h2>Paiement Réussi !</h2>
                <p>Bienvenue dans l'équipe Elite Fitness ! Votre abonnement est maintenant actif.</p>
                <button className={styles.joinButton} onClick={closeModal}>Fermer</button>
              </div>
            )}
          </div>
        </div>
      )}

    </main>
  );
}

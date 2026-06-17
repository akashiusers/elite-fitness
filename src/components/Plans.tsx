"use client";

import { useState } from 'react';
import styles from './Plans.module.css';

const plans = [
  { id: 1, name: 'FORFAIT DE BASE', price: 29.99, features: ['Accès équipement standard', 'Vestiaires premium', 'WiFi haut débit'], isPopular: false },
  { id: 2, name: 'PREMIUM', price: 59.99, features: ['Accès illimité', 'Cours collectifs', 'Sauna & Spa', 'Consultation mensuelle'], isPopular: true },
  { id: 3, name: 'VIP ELITE', price: 99.99, features: ['Coach personnel dédié', 'Plan nutritionnel', 'Accès prioritaire', 'Massages de récupération'], isPopular: false },
];

export default function Plans() {
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

  return (
    <section id="plans" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2>ABONNEMENTS <span>ÉLITE</span></h2>
          <p>Choisissez le plan qui correspond à vos ambitions.</p>
        </div>

        <div className={styles.grid}>
          {plans.map(plan => (
            <div key={plan.id} className={`${styles.card} ${plan.isPopular ? styles.popularCard : ''}`}>
              {plan.isPopular && <div className={styles.badge}>Le plus choisi</div>}
              <h3 className={styles.planName}>{plan.name}</h3>
              <div className={styles.priceContainer}>
                <span className={styles.currency}>$</span>
                <span className={styles.price}>{plan.price}</span>
                <span className={styles.period}>/mois</span>
              </div>
              
              <ul className={styles.features}>
                {plan.features.map((f, i) => (
                  <li key={i}>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              
              <button 
                className={`${styles.btn} ${plan.isPopular ? styles.btnPrimary : styles.btnSecondary}`}
                onClick={() => handleSubscribe(plan)}
              >
                Sélectionner
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Payment Modal */}
      {selectedPlan && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button className={styles.closeModal} onClick={() => setSelectedPlan(null)}>&times;</button>
            
            {!isSuccess ? (
              <div className={styles.modalBody}>
                <h3 className={styles.modalTitle}>Finaliser l'inscription</h3>
                <div className={styles.summaryCard}>
                  <span>Forfait sélectionné:</span>
                  <strong>{selectedPlan.name} ({selectedPlan.price}$)</strong>
                </div>
                
                <form onSubmit={handlePayment} className={styles.form}>
                  <div className={styles.inputGroup}>
                    <input type="text" name="fullName" placeholder="Nom Complet" required className={styles.input} />
                  </div>
                  <div className={styles.inputGroup}>
                    <input type="email" name="email" placeholder="Adresse Email" required className={styles.input} />
                  </div>
                  <div className={styles.inputGroup}>
                    <input type="text" placeholder="Numéro de carte (Fictif)" required pattern="[0-9]{16}" className={styles.input} />
                  </div>
                  <div className={styles.row}>
                    <input type="text" placeholder="MM/AA" required className={styles.input} />
                    <input type="text" placeholder="CVC" required className={styles.input} />
                  </div>
                  <button type="submit" className={styles.submitBtn} disabled={isProcessing}>
                    {isProcessing ? 'Traitement sécurisé...' : `Payer ${selectedPlan.price}$`}
                  </button>
                </form>
              </div>
            ) : (
              <div className={styles.successState}>
                <div className={styles.successCircle}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3>Bienvenue dans l'Élite !</h3>
                <p>Votre abonnement {selectedPlan.name} est actif.</p>
                <button className={styles.btnPrimary} onClick={() => setSelectedPlan(null)}>Commencer l'entraînement</button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

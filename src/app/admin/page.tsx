"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './admin.module.css';

export default function AdminDashboard() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check auth cookie
    if (!document.cookie.includes('admin_auth=true')) {
      router.push('/admin/login');
      return;
    }

    // Fetch subscriptions
    fetch('/api/subscriptions')
      .then(res => res.json())
      .then(data => {
        setSubscriptions(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [router]);

  const handleLogout = () => {
    document.cookie = 'admin_auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    router.push('/admin/login');
  };

  if (loading) return <div className={styles.loading}>Chargement...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Tableau de bord Elite Fitness</h2>
        <button onClick={handleLogout} className={styles.logoutBtn}>Déconnexion</button>
      </div>
      
      <div className={styles.card}>
        <h3>Abonnements Récents ({subscriptions.length})</h3>
        {subscriptions.length === 0 ? (
          <p className={styles.empty}>Aucun abonnement pour le moment.</p>
        ) : (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Nom Complet</th>
                  <th>Email</th>
                  <th>Forfait</th>
                  <th>Prix</th>
                </tr>
              </thead>
              <tbody>
                {subscriptions.slice().reverse().map((sub: any) => (
                  <tr key={sub.id}>
                    <td>{new Date(sub.date).toLocaleDateString('fr-FR')} {new Date(sub.date).toLocaleTimeString('fr-FR')}</td>
                    <td>{sub.fullName}</td>
                    <td>{sub.email}</td>
                    <td>{sub.planName}</td>
                    <td>{sub.planPrice}$</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

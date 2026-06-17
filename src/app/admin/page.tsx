"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './admin.module.css';

export default function AdminDashboard() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchSubscriptions = () => {
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
  };

  useEffect(() => {
    // Check auth cookie
    if (!document.cookie.includes('admin_auth=true')) {
      router.push('/admin/login');
      return;
    }
    fetchSubscriptions();
  }, [router]);

  const handleLogout = () => {
    document.cookie = 'admin_auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    router.push('/admin/login');
  };

  const handleDelete = async (id: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet abonnement ?")) {
      try {
        const res = await fetch(`/api/subscriptions/${id}`, { method: 'DELETE' });
        if (res.ok) {
          fetchSubscriptions();
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  if (loading) return <div className={styles.loading}>Chargement...</div>;

  const totalRevenue = subscriptions.reduce((sum: number, sub: any) => sum + sub.planPrice, 0);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Tableau de bord Elite Fitness</h2>
        <button onClick={handleLogout} className={styles.logoutBtn}>Déconnexion</button>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statTitle}>Total des Abonnements</div>
          <div className={styles.statValue}>{subscriptions.length}</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statTitle}>Revenus Totaux</div>
          <div className={styles.statValue}>{totalRevenue.toFixed(2)}$</div>
        </div>
      </div>
      
      <div className={styles.card}>
        <h3>Abonnements Récents</h3>
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
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {subscriptions.map((sub: any) => (
                  <tr key={sub.id}>
                    <td>{new Date(sub.createdAt).toLocaleDateString('fr-FR')} {new Date(sub.createdAt).toLocaleTimeString('fr-FR')}</td>
                    <td>{sub.fullName}</td>
                    <td>{sub.email}</td>
                    <td>{sub.planName}</td>
                    <td>{sub.planPrice}$</td>
                    <td>
                      <button onClick={() => handleDelete(sub.id)} className={styles.deleteBtn}>
                        Supprimer
                      </button>
                    </td>
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

"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import styles from './admin.module.css';

const COLORS = ['#ff3333', '#1e90ff', '#32cd32', '#ff8c00', '#8a2be2'];

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

  if (loading) return <div className={styles.loading}>Chargement du Tableau de Bord...</div>;

  const totalRevenue = subscriptions.reduce((sum: number, sub: any) => sum + sub.planPrice, 0);

  // Prepare Data for Charts
  const revenueByDate: Record<string, number> = {};
  subscriptions.slice().reverse().forEach((sub: any) => {
    const date = new Date(sub.createdAt).toLocaleDateString('fr-FR', { month: 'short', day: 'numeric' });
    if (!revenueByDate[date]) revenueByDate[date] = 0;
    revenueByDate[date] += sub.planPrice;
  });
  
  const lineData = Object.keys(revenueByDate).map(date => ({
    name: date,
    Revenus: revenueByDate[date]
  }));

  const planCounts: Record<string, number> = {};
  subscriptions.forEach((sub: any) => {
    planCounts[sub.planName] = (planCounts[sub.planName] || 0) + 1;
  });

  const pieData = Object.keys(planCounts).map(plan => ({
    name: plan,
    value: planCounts[plan]
  }));

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.brand}>
          <h1>ELITE <span>ADMIN</span></h1>
        </div>
        <nav className={styles.sideNav}>
          <a href="#" className={styles.active}>Tableau de bord</a>
          <button onClick={handleLogout} className={styles.logoutBtn}>Déconnexion</button>
        </nav>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.header}>
          <h2>Vue d'ensemble</h2>
          <div className={styles.userProfile}>Admin</div>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>👥</div>
            <div className={styles.statInfo}>
              <div className={styles.statTitle}>Abonnements Totaux</div>
              <div className={styles.statValue}>{subscriptions.length}</div>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>💰</div>
            <div className={styles.statInfo}>
              <div className={styles.statTitle}>Revenus Totaux</div>
              <div className={styles.statValue}>{totalRevenue.toFixed(2)}$</div>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>📈</div>
            <div className={styles.statInfo}>
              <div className={styles.statTitle}>Moyenne / Client</div>
              <div className={styles.statValue}>
                {subscriptions.length > 0 ? (totalRevenue / subscriptions.length).toFixed(2) : 0}$
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.chartsGrid}>
          <div className={styles.chartCard}>
            <h3>Revenus par Jour</h3>
            {lineData.length > 0 ? (
              <div className={styles.chartWrapper}>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={lineData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="name" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <RechartsTooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#fff' }} />
                    <Line type="monotone" dataKey="Revenus" stroke="#ff3333" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <p className={styles.empty}>Pas de données disponibles.</p>
            )}
          </div>

          <div className={styles.chartCard}>
            <h3>Répartition des Forfaits</h3>
            {pieData.length > 0 ? (
              <div className={styles.chartWrapper}>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie data={pieData} cx="50%" cy="50%" innerRadius={70} outerRadius={110} paddingAngle={5} dataKey="value">
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <RechartsTooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <p className={styles.empty}>Pas de données disponibles.</p>
            )}
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>Abonnements Récents</h3>
          </div>
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
                  {subscriptions.slice(0, 10).map((sub: any) => (
                    <tr key={sub.id}>
                      <td>{new Date(sub.createdAt).toLocaleDateString('fr-FR')} {new Date(sub.createdAt).toLocaleTimeString('fr-FR', {hour: '2-digit', minute:'2-digit'})}</td>
                      <td>
                        <div className={styles.avatarName}>
                          <div className={styles.avatar}>{sub.fullName.charAt(0).toUpperCase()}</div>
                          <span>{sub.fullName}</span>
                        </div>
                      </td>
                      <td>{sub.email}</td>
                      <td><span className={styles.badge}>{sub.planName}</span></td>
                      <td className={styles.priceCell}>{sub.planPrice}$</td>
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
    </div>
  );
}

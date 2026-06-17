"use client";

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContent}`}>
        <a href="#home" className={styles.logo}>
          ELITE <span>FITNESS</span>
        </a>

        <div className={styles.hamburger} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span className={`${styles.bar} ${mobileMenuOpen ? styles.barOpen1 : ''}`}></span>
          <span className={`${styles.bar} ${mobileMenuOpen ? styles.barOpen2 : ''}`}></span>
          <span className={`${styles.bar} ${mobileMenuOpen ? styles.barOpen3 : ''}`}></span>
        </div>

        <ul className={`${styles.navLinks} ${mobileMenuOpen ? styles.navLinksOpen : ''}`}>
          <li><a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Galerie</a></li>
          <li><a href="#plans" onClick={() => setMobileMenuOpen(false)}>Forfaits</a></li>
          <li><a href="#trainers" onClick={() => setMobileMenuOpen(false)}>Entraîneurs</a></li>
          <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          <li>
            <a href="/admin" className={styles.adminBtn} onClick={() => setMobileMenuOpen(false)}>
              Admin
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

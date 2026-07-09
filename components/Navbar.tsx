"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";
import { SITE_CONFIG } from "@/config/constants";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoWrapper}>
            {/* Custom Tiger Mascot Logo SVG */}
            <svg viewBox="0 0 100 100" className={styles.logoSvg}>
              <circle cx="50" cy="50" r="46" fill="url(#tigerGrad)" stroke="var(--primary)" strokeWidth="2" />
              <defs>
                <linearGradient id="tigerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#111111" />
                  <stop offset="50%" stopColor="#1a1a1c" />
                  <stop offset="100%" stopColor="#08080a" />
                </linearGradient>
              </defs>
              {/* Ears */}
              <path d="M28,26 L16,38 L30,42 Z" fill="var(--primary)" />
              <path d="M72,26 L84,38 L70,42 Z" fill="var(--primary)" />
              {/* Inner Ears */}
              <path d="M26,29 L19,36 L27,39 Z" fill="#ffffff" />
              <path d="M74,29 L81,36 L73,39 Z" fill="#ffffff" />
              {/* Head Base Outline */}
              <path d="M30,40 C20,52 24,64 22,70 C30,73 35,71 38,75 C42,78 45,82 50,82 C55,82 58,78 62,75 C65,71 70,73 78,70 C76,64 80,52 70,40 Z" fill="var(--primary)" />
              {/* Cheek Fluffs (White) */}
              <path d="M22,70 C24,65 26,60 30,58 C29,62 27,67 22,70 Z" fill="#ffffff" />
              <path d="M78,70 C76,65 74,60 70,58 C71,62 73,67 78,70 Z" fill="#ffffff" />
              {/* Tiger Stripes */}
              <path d="M30,46 L38,48 L34,51 Z" fill="#111111" />
              <path d="M70,46 L62,48 L66,51 Z" fill="#111111" />
              <path d="M26,55 L34,56 L30,60 Z" fill="#111111" />
              <path d="M74,55 L66,56 L70,60 Z" fill="#111111" />
              <path d="M42,34 L48,44 L52,44 L58,34 L50,41 Z" fill="#111111" />
              <path d="M46,45 L50,51 L54,45 Z" fill="#111111" />
              {/* Snout and Nose */}
              <path d="M46,65 L50,60 L54,65 Z" fill="#111111" />
              <path d="M43,67 C43,74 47,77 50,77 C53,77 57,74 57,67 C57,64 43,64 43,67 Z" fill="#ffffff" />
              <circle cx="50" cy="70" r="1.5" fill="#111111" />
              {/* Fierce Eyes */}
              <path d="M35,52 Q43,49 45,55 Q40,57 35,52 Z" fill="#ffffff" />
              <path d="M65,52 Q57,49 55,55 Q60,57 65,52 Z" fill="#ffffff" />
              <circle cx="41.5" cy="53.5" r="2" fill="var(--primary)" />
              <circle cx="58.5" cy="53.5" r="2" fill="var(--primary)" />
              <circle cx="42" cy="53" r="0.8" fill="#ffffff" />
              <circle cx="58" cy="53" r="0.8" fill="#ffffff" />
            </svg>
            <div className={styles.logoTextWrapper}>
              <div className={styles.logoTextLine}>
                <span className={styles.logoReddy}>{SITE_CONFIG.brand.logoText1}</span>
                <span className={styles.logoAnna}>{SITE_CONFIG.brand.logoText2}</span>
              </div>
              <div className={styles.logoSub}>{SITE_CONFIG.brand.logoSub}</div>
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className={styles.desktopNav}>
          <Link href="#home">Home</Link>
          <Link href="#lobbies">Sportsbook</Link>
          <Link href="#lobbies">Live Casino</Link>
          <Link href="#lobbies">Slot Games</Link>
          <Link href="#lobbies">Card Games</Link>
          <Link href="#about">About Tiger365</Link>
          <Link href="#blogs">Blogs</Link>
          <Link href="#faq">FAQ</Link>
        </nav>

        <div className={styles.navActions}>
          <WhatsAppButton className={`${styles.desktopBtn} ${styles.registerBtn}`}>Register</WhatsAppButton>
          <WhatsAppButton className={`${styles.desktopBtn} ${styles.loginBtn}`}>Login</WhatsAppButton>
          
          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="#home" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="#lobbies" onClick={() => setMobileMenuOpen(false)}>Sportsbook</Link>
          <Link href="#lobbies" onClick={() => setMobileMenuOpen(false)}>Live Casino</Link>
          <Link href="#lobbies" onClick={() => setMobileMenuOpen(false)}>Slot Games</Link>
          <Link href="#lobbies" onClick={() => setMobileMenuOpen(false)}>Card Games</Link>
          <Link href="#about" onClick={() => setMobileMenuOpen(false)}>About Tiger365</Link>
          <Link href="#blogs" onClick={() => setMobileMenuOpen(false)}>Blogs</Link>
          <Link href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
          <div className={styles.mobileActions}>
             <WhatsAppButton className={`${styles.desktopBtn} ${styles.registerBtn}`}>Register</WhatsAppButton>
             <WhatsAppButton className={`${styles.desktopBtn} ${styles.loginBtn}`}>Login</WhatsAppButton>
          </div>
        </div>
      )}
    </header>
  );
}

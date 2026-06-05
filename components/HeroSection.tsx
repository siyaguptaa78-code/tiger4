import WhatsAppButton from "./WhatsAppButton";
import styles from "./HeroSection.module.css";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/constants";

export default function HeroSection() {
  return (
    <section className={styles.hero} id="home">
      <div className={`container ${styles.content}`}>
        <h1 className={`${styles.title} animate-fade-in`}>
          TIGER365 EXCHANGE – <span className={styles.accent}>OFFICIAL PLATFORM</span> FOR LIVE BETTING
        </h1>
        
        <div className={`${styles.bannerWrapper} animate-fade-in animate-delay-1`}>
          <Image 
            src={SITE_CONFIG.images.heroBanner} 
            alt="Tiger365 Official Betting Banner" 
            width={1000}
            height={500}
            priority
            className={styles.mainBanner}
          />
        </div>
        
        <p className={`${styles.subtitle} animate-fade-in animate-delay-2`}>
          Enjoy India's most secure and trusted online sports and casino betting platform. Get your official Tiger365 betting ID instantly and explore endless betting markets with 24/7 withdrawals.
        </p>
        
        <div className={`${styles.ctaGroup} animate-fade-in animate-delay-3`}>
          <WhatsAppButton className={styles.mainCta}>
            👉 Get Your Tiger365 ID Now 👈
          </WhatsAppButton>
          <WhatsAppButton variant="outline" className={styles.secondaryCta}>
            👉 Contact Tiger365 Support 👈
          </WhatsAppButton>
        </div>
        
        <div className={`${styles.stats} animate-fade-in animate-delay-3`}>
          <div className={styles.statItem}>
            <h3>100,000+</h3>
            <p>Active Bettors</p>
          </div>
          <div className={styles.statItem}>
            <h3>24/7</h3>
            <p>Live Chat Support</p>
          </div>
          <div className={styles.statItem}>
            <h3>60 Sec</h3>
            <p>ID Generation</p>
          </div>
        </div>
      </div>
    </section>
  );
}

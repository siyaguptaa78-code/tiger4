import WhatsAppButton from "./WhatsAppButton";
import styles from "./Features.module.css";
import { SITE_CONFIG } from "@/config/constants";

const featuresData = [
  {
    title: "Official Exchange Account",
    description: "Your Tiger365 ID is your official exchange account that keeps all your bets, deposits, and sportsbooks secure, organized & verified.",
    icon: "🐯"
  },
  {
    title: "Instant ID Creation",
    description: "Get your personal Tiger365 exchange ID created instantly on WhatsApp",
    icon: "⚡"
  },
  {
    title: "24/7 Fast Withdrawals",
    description: "24/7 Same Day Withdrawals via UPI, Net Banking, GooglePay, etc.",
    icon: "💸"
  },
  {
    title: "Multi-Market Betting",
    description: "Sportsbook (Cricket, Tennis, Football) and Casino (Poker, Slots, Teen Patti) Lobbies",
    icon: "🎯"
  },
  {
    title: "Encrypted & Secured",
    description: "Encrypted & Secure Betting ID with End-to-End Protection",
    icon: "🔒"
  },
  {
    title: "Real-time Records",
    description: "Live Records of Deposits, Reports, Odds, Bets, and Balances",
    icon: "📊"
  },
  {
    title: "Exclusive Welcome Promos",
    description: "Welcome Bonuses, First Deposit Offers, and Daily Cashbacks on Losses",
    icon: "🎁"
  },
  {
    title: "24/7 VIP Helpdesk",
    description: "24/7 VIP Customer Care via WhatsApp for All Queries",
    icon: "🤝"
  },
  {
    title: "Responsible Gaming",
    description: "Responsible Gaming Policy and Tools for Better Gaming Control",
    icon: "🧠"
  }
];

export default function Features() {
  return (
    <section className={`section-padding ${styles.featuresSection}`} id="services">
      <div className="container">
        <h2 className="section-title text-center">
          Why Choose <span>{SITE_CONFIG.brand.name}</span>
        </h2>
        <p className={`text-center ${styles.subtitle}`}>
          Experience the ultimate and most secure online betting exchange in India.
        </p>

        <div className={styles.grid}>
          {featuresData.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <WhatsAppButton className={styles.largeCta}>
            Get Your Official Tiger365 ID Instantly
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

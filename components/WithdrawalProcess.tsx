import styles from "./WithdrawalProcess.module.css";
import { SITE_CONFIG } from "@/config/constants";

export default function WithdrawalProcess() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2 className="section-title text-center">
          Tiger365 Exchange Withdrawal Process – Fast, Transparent, Guaranteed
        </h2>
        <p className={`text-center ${styles.subtitle}`}>
          The most common question we get from our clients is – "How and When Can I Withdraw My Winnings?" Well, at Tiger365 Exchange, we have a transparent, quick, and reliable withdrawal method. Simply follow the steps below:
        </p>

        <div className={styles.methodsGrid}>
          <div className={styles.methodCard}>
            <div className={styles.icon}>📱</div>
            <h3>UPI (GPay, PhonePe, Paytm)</h3>
            <div className={styles.time}>Instant to 30 mins</div>
            <p>Most Popular Mode<br/>As it is available to almost all smartphone users in India.</p>
          </div>
          
          <div className={styles.methodCard}>
            <div className={styles.icon}>🏦</div>
            <h3>Bank Transfer (NEFT/IMPS)</h3>
            <div className={styles.time}>1 to 2 hours</div>
            <p>For large withdrawals and members who prefer digital banking.</p>
          </div>

          <div className={styles.methodCard}>
            <div className={styles.icon}>₿</div>
            <h3>Crypto (USDT, Bitcoin)</h3>
            <div className={styles.time}>5 to 15 mins</div>
            <p>Available for crypto withdrawal members.</p>
          </div>
        </div>

        <div className={styles.recordsBox}>
          <p className={styles.recordSub}>Real Members. Real Transactions. Real Amounts.</p>
          <ul className={styles.recordList}>
            <li><strong>Rajesh Sharma, Mumbai</strong> – ₹1,85,000 UPI 22 mins</li>
            <li><strong>Priya Singh, Delhi</strong> – ₹45,000 Paytm 11 mins</li>
            <li><strong>Suresh Patel, Bangalore</strong> – ₹2,50,000 Bank Transfers 18 mins</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

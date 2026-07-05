"use client";
import React from "react";
import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";
import { SITE_CONFIG } from "@/config/constants";
import styles from "./InfoSection.module.css";

export default function InfoSection() {
  return (
    <section className={`section-padding ${styles.infoSection}`} id="about">
      <div className="container">
        
        {/* ==========================================
            SECTION 1: INTRODUCTION TO TIGER365
            ========================================== */}
        <div className={styles.introBox}>
          <h2 className={styles.introTitle}>
            Introduction to Tiger365
          </h2>
          <div className={styles.introTextWrapper}>
            <p className={styles.introParagraph}>
              Online sports betting is booming, and having a secure, reliable, and verified account has become more important than ever. Tiger365 is India's leading fully responsive online betting exchange. With a user-friendly interface and high-end software, Tiger365 offers players a secure & exciting betting platform.
            </p>
            <p className={styles.introParagraph}>
              Before you register on Tiger365, let us tell you some crucial information about our system. Unlike other exchange betting sites, Tiger365 makes use of the popular messanger WhatsApp to issue you a verified Tiger365 ID. Thus letting you play your favorite sports within minutes of your registration, all while keeping your personal data protected & secure.
            </p>
            <p className={styles.introParagraph}>
              Your personal Tiger365 ID acts like a record-keeping tool, which stores all your deposits, bets, active logs and sportsbooks. Whether you like to play cricket, football, live casino, slot games or other popular sports - we have a fair-play standard for everyone.
            </p>
          </div>

          <div className={styles.btnRowOne}>
            <WhatsAppButton className="btn-red-action">
              📲 Create Tiger365 ID
            </WhatsAppButton>
            <WhatsAppButton className="btn-green-action">
              💬 Message on WhatsApp
            </WhatsAppButton>
            <WhatsAppButton className="btn-gray-action">
              📞 Official Tiger365 Support
            </WhatsAppButton>
          </div>
        </div>

        {/* ==========================================
            SECTION 2: HOW TIGER365 WORKS
            ========================================== */}
        <div className={styles.idSectionBox}>
          <div className={styles.twoColumnGrid}>
            <div className={styles.imageColumn}>
              <div className={styles.imageWrapper}>
                <Image
                  src={SITE_CONFIG.images.heroBanner}
                  alt="How Tiger365 Works"
                  width={1000}
                  height={500}
                  className={styles.idImg}
                />
              </div>
            </div>

            <div className={styles.textColumn}>
              <div className={styles.headerHighlight}>
                <h3>How Tiger365 Works</h3>
              </div>
              <p className={styles.idLeadText}>
                Getting started on Tiger365 is very simple, all you have to do is follow the steps below to create your account and start betting:
              </p>
              
              <ul className={styles.checklist}>
                <li>
                  <span className={styles.bulletCheck}>1.</span>
                  <span><strong>Start on WhatsApp -</strong> By clicking on our Call-to-action buttons, you will be connected to our Tiger365 WhatsApp account.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>2.</span>
                  <span><strong>Setup your ID -</strong> Provide us with some information to setup your nickname and account. Your login ID and password will be generated within 60 seconds flat.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>3.</span>
                  <span><strong>Fund your account -</strong> Transfer the amount of your choice (minimum ₹100) to our official wallet via UPI, NetBanking, or your mobile wallet. Send us the screenshot and get your chips loaded instantly.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>4.</span>
                  <span><strong>Login and play -</strong> By visiting the official login page shared by our support team, you can enter your credentials and play live betting.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>5.</span>
                  <span><strong>Fast withdrawal -</strong> To end your session, simply contact our WhatsApp helpdesk and share the amount you wish to withdraw. The amount will be transferred to your bank account within minutes!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ==========================================
            SECTION 3: KEY ADVANTAGES OF TIGER365
            ========================================== */}
        <div className={styles.idSectionBox}>
          <div className={styles.twoColumnGrid}>
            <div className={styles.textColumn}>
              <div className={styles.headerHighlight}>
                <h3>Core Features of Tiger365</h3>
              </div>
              <p className={styles.idLeadText}>
                There are several reasons why Tiger365 is the preferred online betting exchange among Indian sports bettors.
              </p>
              
              <ul className={styles.checklist}>
                <li>
                  <span className={styles.bulletCheck}>✓</span>
                  <span><strong>Personal Assistance -</strong> Say goodbye to bots and get direct one-on-one support via WhatsApp, 24/7.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>✓</span>
                  <span><strong>High Odds on Markets -</strong> Get the best odds on cricket bookmaker markets, fancy runs, football match winners, tennis set odds, etc.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>✓</span>
                  <span><strong>Instant Payouts -</strong> Get all winning payouts transferred to your bank account immediately after a match concludes.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>✓</span>
                  <span><strong>Single Dashboard -</strong> Monitor your betting activity, win, loss, slips, and live betting on one single mobile-friendly dashboard.</span>
                </li>
              </ul>
            </div>

            <div className={styles.imageColumn}>
              <div className={styles.imageWrapper}>
                <Image
                  src={SITE_CONFIG.images.registrationBanner}
                  alt="Key Advantages of Tiger365"
                  width={1000}
                  height={500}
                  className={styles.idImg}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            SECTION 4: INSIDE TIGER365 EXCHANGE
            ========================================== */}
        <div className={styles.idSectionBox}>
          <div className={styles.twoColumnGrid}>
            <div className={styles.imageColumn}>
              <div className={styles.imageWrapper}>
                <Image
                  src={SITE_CONFIG.images.banners.banner1.src}
                  alt="Inside Tiger365 Exchange"
                  width={SITE_CONFIG.images.banners.banner1.width}
                  height={SITE_CONFIG.images.banners.banner1.height}
                  className={styles.idImg}
                />
              </div>
            </div>

            <div className={styles.textColumn}>
              <div className={styles.headerHighlight}>
                <h3>Inside Tiger365 Exchange</h3>
              </div>
              <p className={styles.idLeadText}>
                Tiger365 website comes packed with exciting sports betting options and thrilling casino games:<br/><br/>At Tiger365, you can enjoy:
              </p>
              
              <ul className={styles.checklist}>
                <li>
                  <span className={styles.bulletCheck}>•</span>
                  <span><strong>Sports betting exchange -</strong> Live betting odds on Cricket, Tennis, Football, Kabaddi, Esports, and more.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>•</span>
                  <span><strong>Live casino -</strong> Blackjack, Roulette, Baccarat, Teen Patti, Andar Bahar, and other popular casino games.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>•</span>
                  <span><strong>Slots and crash games -</strong> Play exciting slot games and test your skill on Aviator, Mines, Limbo, and many more.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>•</span>
                  <span><strong>Fair-play games -</strong> All our games are powered by random number generators and broadcasted with live video feeds.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ==========================================
            SECTION 5: GET STARTED TODAY
            ========================================== */}
        <div className={styles.idSectionBox}>
          <div className={styles.introBox} style={{ marginBottom: 0, marginTop: '2rem' }}>
            <h3 className={styles.introTitle} style={{ fontSize: '2rem' }}>
              Join Tiger365 Today
            </h3>
            <p className={styles.introParagraph}>
              Tiger365 aims to provide the best online betting exchange experience to its customers. You can download the Tiger365 app to enjoy faster access to the best sports betting and casino games in the business. In addition, you also get personal support, direct deposits, and instant withdrawals on this exchange betting platform.
            </p>
            <p className={styles.introParagraph} style={{ fontWeight: 'bold', color: 'var(--primary)' }}>
              Get your Tiger365 account started today with a 400% Welcome Bonus on your first deposit!
            </p>
            <div className={styles.btnRowTwo}>
              <WhatsAppButton className={styles.largeChatBtn}>
                💬 Chat on WhatsApp for Instant Tiger365 ID
              </WhatsAppButton>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import styles from "./BlogSection.module.css";

export default function BlogSection() {
  return (
    <section className={`section-padding ${styles.blogSection}`} id="blogs">
      <div className="container">
        <div className={styles.headerHighlight}>
          <h3>Latest Updates & Betting Tips</h3>
        </div>
        
        <div className={styles.blogGrid}>
          {blogs.map((blog) => (
            <div key={blog.id} className={styles.blogCard}>
              <div className={styles.blogImageWrapper}>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  priority
                  className={styles.blogImage}
                />
              </div>
              <div className={styles.blogContent}>
                <span className={styles.blogDate}>{blog.date}</span>
                <h4 className={styles.blogTitle}>{blog.title}</h4>
                <p className={styles.blogExcerpt}>{blog.excerpt}</p>
                <Link href={`/blog/${blog.slug}`} className={styles.readMoreBtn}>
                  Read full article
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

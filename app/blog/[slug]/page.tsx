import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className={styles.blogPageWrapper}>
      <Navbar />

      <div className={styles.blogLayoutBody}>
        {/* Blog Sidebar */}
        <aside className={styles.blogSidebar}>
          <div className={styles.sidebarHeader}>Recent Blogs</div>
          <ul className={styles.sidebarList}>
            {blogs.map((b) => (
              <li key={b.id} className={styles.sidebarItem}>
                <Link
                  href={`/blog/${b.slug}`}
                  className={`${styles.sidebarLink} ${
                    b.slug === slug ? styles.active : ""
                  }`}
                >
                  {b.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content Area */}
        <main className={styles.blogContentArea}>
          <div className={styles.articleContainer}>
            <div className={styles.articleImageWrapper}>
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                priority
                className={styles.articleImage}
              />
            </div>
            
            <h1 className={styles.articleTitle}>{blog.title}</h1>
            <div className={styles.articleMeta}>
              <span>Published on {blog.date}</span>
            </div>

            <div
              className={styles.articleBody}
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
          
          <Footer />
        </main>
      </div>
    </div>
  );
}

import styles from "./page.module.css";

const careers = [
  {
    title: "Quantitative Finance",
    detail: "Trading, research, and risk at the intersection of math and markets.",
  },
  {
    title: "Data Science",
    detail: "Turning messy data into decisions with statistics and modeling.",
  },
  {
    title: "Software & Product",
    detail: "Building tools that people actually use.",
  },
  {
    title: "Consulting & Strategy",
    detail: "Structured problem-solving across industries.",
  },
];

const courses = [
  { code: "ORF 245", name: "Fundamentals of Statistics" },
  { code: "ORF 309", name: "Probability & Stochastic Systems" },
  { code: "MAT 202", name: "Linear Algebra with Applications" },
  { code: "COS 126", name: "Computer Science: An Interdisciplinary Approach" },
  { code: "ECO 100", name: "Introduction to Microeconomics" },
  { code: "MAT 201", name: "Multivariable Calculus" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/shaylazheng" },
  { label: "Twitter", href: "https://twitter.com/" },
  { label: "Email", href: "mailto:sz1369@princeton.edu" },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>Princeton University · ORFE &rsquo;28</p>
        <h1 className={styles.name}>Shayla Zheng</h1>
        <p className={styles.lede}>
          Operations Research &amp; Financial Engineering undergraduate. Writing,
          building, and figuring out what comes next.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Substack</h2>
        <p className={styles.body}>
          A space for essays on markets, math, and the things I&rsquo;m learning
          at Princeton. First post coming soon.
        </p>
        <a className={styles.link} href="#">
          Subscribe &rarr;
        </a>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Career Paths</h2>
        <ul className={styles.list}>
          {careers.map((c) => (
            <li key={c.title} className={styles.listItem}>
              <span className={styles.listLabel}>{c.title}</span>
              <span className={styles.listDetail}>{c.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Courses</h2>
        <ul className={styles.list}>
          {courses.map((c) => (
            <li key={c.code} className={styles.listItem}>
              <span className={styles.listLabel}>{c.code}</span>
              <span className={styles.listDetail}>{c.name}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Socials</h2>
        <div className={styles.socials}>
          {socials.map((s) => (
            <a
              key={s.label}
              className={styles.link}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
            >
              {s.label}
            </a>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Shayla Zheng · sz1369@princeton.edu</p>
      </footer>
    </main>
  );
}

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={clsx(styles.buttons, 'd-flex justify-content-center')}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{ marginLeft: '10px', marginBottom: '10px' }}>
            Research Paper
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/poster_session"
            style={{ marginBottom: '10px', marginRight: '10px' }}>
            Poster Session
          </Link>
        </div>
        <style jsx>{`
          @media (max-width: 768px) {
            .hero__title {
              font-size: 3rem;
            }
            .hero__subtitle {
              font-size: 1.5rem;
            }
            .hero .container {
              padding-top: 3rem;
              padding-bottom: 3rem;
            }
            .buttons {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
            }
            .button {
              margin: 5px;
              font-size: 1rem;
            }
          }
        `}</style>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="This website contains the work done by Team Thermo Titans [Anvitha, Emily, Kush, Frank] during Spring 2023 for the Integrated Concentration in STEM Program at UMass Amherst. Specifically, this work was done for iCons 3, under Shira Epstein and Nick Tooker.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

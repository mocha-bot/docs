import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './404.module.css';

export default function NotFound(): JSX.Element {
  return (
    <Layout
      title="Page not found"
      description="The page you're looking for doesn't exist on the Mocha Bot documentation.">
      <main className={styles.notFound}>
        <div className={styles.card}>
          <p className={styles.code}>404</p>
          <h1 className={styles.title}>This page doesn't exist</h1>
          <p className={styles.subtitle}>
            The link you followed might be broken, or the page may have moved.
            Try one of the starting points below.
          </p>

          <div className={styles.grid}>
            <Link className={styles.tile} to="/">
              <span className={styles.tileLabel}>Start here</span>
              <span className={styles.tileTitle}>Introduction</span>
              <span className={styles.tileDesc}>
                What Mocha is and how to get it into your Discord server.
              </span>
            </Link>
            <Link className={styles.tile} to="/tutorials/getting-started">
              <span className={styles.tileLabel}>Tutorial</span>
              <span className={styles.tileTitle}>Getting Started</span>
              <span className={styles.tileDesc}>
                Invite the bot, create your first room, send a test message.
              </span>
            </Link>
            <Link className={styles.tile} to="/category/commands">
              <span className={styles.tileLabel}>Reference</span>
              <span className={styles.tileTitle}>Commands</span>
              <span className={styles.tileDesc}>
                Every slash command Mocha understands, with options and
                examples.
              </span>
            </Link>
          </div>

          <p className={styles.footerLinks}>
            Still stuck?{' '}
            <Link to="/others/frequent-searches">Check the FAQ</Link> or{' '}
            <Link href="https://discord.mocha-bot.xyz/">
              ask in the support server
            </Link>
            .
          </p>
        </div>
      </main>
    </Layout>
  );
}

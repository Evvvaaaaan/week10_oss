import React from 'react';
import { wordList } from '../typingTest/wordlist';
import styles from './StudyIntro.module.css';

function StudyIntro({ theme }) {
  const wordCount = wordList.length;

  return (
    <section
      className={styles.intro}
      aria-labelledby="study-title"
      style={{ color: theme.text }}
    >
      <p className={styles.label}>A SMALL DAILY PRACTICE</p>
      <h1 id="study-title">Clear your mind. Find your rhythm.</h1>
      <p className={styles.description}>
        Warm up with computer science vocabulary. Type each highlighted word,
        press Space to continue, and let accuracy come before speed.
      </p>
      <dl className={styles.sessionInfo} style={{ borderColor: theme.boxBorder }}>
        <div>
          <dt>Session</dt>
          <dd>60 seconds</dd>
        </div>
        <div>
          <dt>Word bank</dt>
          <dd>{wordCount} CS terms</dd>
        </div>
        <div>
          <dt>Focus</dt>
          <dd>Accuracy first</dd>
        </div>
      </dl>
    </section>
  );
}

export default StudyIntro;

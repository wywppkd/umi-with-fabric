import React from 'react';
import styles from './index.less';
import HelloWorld from '@/components/helloWorld';

export default () => {
  return (
    <div>
      <HelloWorld />
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
};

import React, { useRef } from 'react';
import styles from './index.less';
import HelloWorld from '@/components/helloWorld';

const videoUrl =
  'https://bpm-tojoy-test.oss-cn-beijing.aliyuncs.com/tojoy-airdidi/main_video_mobile.mp4';
export default () => {
  const refVideo = useRef<HTMLVideoElement>(null);
  return (
    <div>
      <HelloWorld />
      <h1 className={styles.title}>Page index</h1>
      <video
        muted
        autoPlay
        loop
        playsInline
        className={styles.video}
        onEnded={(event) => {
          console.log('🚀 ~ file: Index.tsx:18 ~ event:', event);
        }}
        onError={(err) => {
          console.log('🚀 ~ file: Index.tsx:17 ~ err:', err);
          const { readyState, networkState } = refVideo.current || {};
          console.log('🚀 ~ file: Index.tsx:20 ~ networkState:', networkState);
          console.log('🚀 ~ file: Index.tsx:20 ~ readyState:', readyState);
        }}
        poster={videoUrl + '?spm=qipa250&x-oss-process=video/snapshot,t_0,f_jpg,w_0,h_0,m_fast'}
        src={videoUrl}
      >
        推荐使用 Chrome 浏览器
      </video>
    </div>
  );
};

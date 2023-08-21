import React, { useEffect, useRef } from 'react';
import styles from './index.less';
import HelloWorld from '@/components/helloWorld';

const videoUrl =
  'https://bpm-tojoy-test.oss-cn-beijing.aliyuncs.com/tojoy-airdidi/main_video_mobile.mp4';

const videoUrl2 = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm';
export default () => {
  const refVideo = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setTimeout(() => {
      refVideo.current?.load();
      try {
        const res = refVideo.current?.play();
        console.log('🚀 ~ file: Index.tsx:16 ~ setTimeout ~ refVideo.current:', refVideo.current);
        console.log('🚀 ~ file: Index.tsx:14 ~ useEffect ~ res:', res);
      } catch (error) {
        console.log('🚀 ~ file: Index.tsx:20 ~ setTimeout ~ error:', error);
      }
    }, 1000);
  }, []);

  return (
    <div>
      <HelloWorld />
      <h1 className={styles.title}>Page index</h1>
      <video
        ref={refVideo}
        muted
        // autoPlay
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
      >
        <source src={videoUrl2} type="video/webm" />
        <source src={videoUrl} type="video/mp4" />
        推荐使用 Chrome 浏览器1
      </video>
    </div>
  );
};

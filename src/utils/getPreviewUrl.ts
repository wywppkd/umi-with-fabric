import { Base64 } from 'js-base64';

type Params = {
  fileUrl: string;
  requestSource: 'PC' | 'MOBILE';
  systemSource: 'windows' | 'ios' | 'android';
};

export const getPreviewUrl = ({ fileUrl, requestSource, systemSource }: Params) => {
  // const params = `&watermarkTxt=&watermarkFontsize=6px&watermarkAlpha=0.2&watermarkXSpace=-100&watermarkYSpace=100&requestSource=${requestSource}&systemSource=${systemSource}`
  const params = `&requestSource=${requestSource}&systemSource=${systemSource}`;
  return (
    'https://preview.zidayun.com/onlinePreview?url=' +
    encodeURIComponent(Base64.encode(fileUrl)) +
    params
  );
};

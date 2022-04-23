declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;
  const url: string;
  export default url;
}

// 自定义全局变量类型
declare const REACT_APP_ENV: 'test' | 'dev' | 'pre' | false;
declare const REACT_APP_API_URL: string; // 接口地址的基础路径

import React from 'react';
import { DocumentEditor } from '@onlyoffice/document-editor-react';

const Home = () => {
  const onDocumentReady = () => console.log('Document is loaded');

  const onLoadComponentError = function (errorCode: any, errorDescription: any) {
    console.log(
      '🚀 ~ file: index.tsx:8 ~ onLoadComponentError ~ errorDescription:',
      errorDescription,
    );
    console.log('🚀 ~ file: index.tsx:8 ~ onLoadComponentError ~ errorCode:', errorCode);
    switch (errorCode) {
      case -1: // Unknown error loading component
        console.log(errorDescription);
        break;

      case -2: // Error load DocsAPI from http://documentserver/
        console.log(errorDescription);
        break;

      case -3: // DocsAPI is not defined
        console.log(errorDescription);
        break;
    }
  };

  return (
    <pre style={{ height: '100vh' }}>
      <DocumentEditor
        id="docxEditor"
        height="100%"
        documentServerUrl="https://test-onlyoffice.zidayun.com"
        config={{
          document: {
            key: 'Khirz6zTPdfd7',
            title: 'Example Document Title',
            fileType: 'docx',
            url: 'https://pro-sdp-oss.aitojoy.com/fe/tojoy-sdp-market/doc/user-agreement.docx',
          },
          documentType: 'word',
          editorConfig: {
            // callbackUrl: 'https://onlyoffice.zidayun.com',
            // callbackUrl: 'https://test-onlyoffice.zidayun.com',
            mode: 'view',
            lang: 'zh', //定义编辑器界面语言（如果存在英语以外的其他语言）。 使用两个字母（de、 ru、 it等）语言代码设置。 默认值为 "en"
            region: 'zh-CN', //定义货币和日期和时间的默认显示格式
          },
        }}
        events_onDocumentReady={onDocumentReady}
        onLoadComponentError={onLoadComponentError}
        events_onRequestSaveAs={(event) => {
          console.log('events_onRequestSaveAs');
        }}
        type="mobile"
      />
    </pre>
  );
};

export default Home;

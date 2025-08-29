import React from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = () => {
  const handleChange = (value) => {
    console.log('Code:', value);
  };

  return (
    <Editor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue="// Write your code here"
      onChange={handleChange}
      theme="vs-dark"
    />
  );
};

export default CodeEditor;

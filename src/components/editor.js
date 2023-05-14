import React, { useRef , useState } from 'react';
import Editor from "@monaco-editor/react";

const files = {
  "script.py": {
    name: "script.py",
    language: "python",
    value: "Here is some python text"
  },
  "index.html": {
    name: "index.html",
    language: "html",
    value: "<html>\n\t<head>\n\t\t<title></title>\n\t</head>\n\t<body>\n\t\t\n\t</body>\n</html>"
  }
}

export default function VSEditor() {
  const [fileName, setFileName] = useState("script.py"); // change to "index.html"
  const editorRef = useRef(null);
  const file = files[fileName];

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;

    monaco.languages.registerCompletionItemProvider(file.language, {
      provideCompletionItems: function(model, position) {
        const textUntilPosition = model.getValueInRange({
          startLineNumber: position.lineNumber,
          startColumn: 1,
          endLineNumber: position.lineNumber,
          endColumn: position.column
        });

        const suggestions = [];

        if (textUntilPosition.endsWith("<html>")) {
          suggestions.push({
            label: "</html>",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: '</html>',
            range: {
              startLineNumber: position.lineNumber,
              endLineNumber: position.lineNumber,
              startColumn: position.column,
              endColumn: position.column
            }
          });
        }

        return {
          suggestions: suggestions
        };
      }
    });
  }

  function getEditorValue() {
    alert(editorRef.current.getValue());
  }

  return (
    <div className="App">
      <button onClick={() => setFileName("index.html")}>
        Switch to index.html
      </button>
      <button onClick={() => setFileName("script.py")}>
        Switch to script.py
      </button>
      <button onClick={() => getEditorValue()}>
        Get Editor Value
      </button>
      <Editor
        height="100vh"
        width="100%"
        theme="vs-dark"
        onMount={handleEditorDidMount}
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
      />
    </div>
  )
}

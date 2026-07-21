import { useState } from "react";
import Editor from "@monaco-editor/react";

export default function CodeEditor({ value = "", onChange, language = "javascript", height = "400px", readOnly = false }) {
  const [editorValue, setEditorValue] = useState(value);

  const handleEditorChange = (newValue) => {
    setEditorValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="w-full rounded-lg overflow-hidden border border-emergent-border">
      <Editor
        height={height}
        defaultLanguage={language}
        value={editorValue}
        onChange={handleEditorChange}
        theme="vs-dark"
        options={{
          readOnly: readOnly,
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: "on",
          roundedSelection: false,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
          wordWrap: "on",
          padding: { top: 16, bottom: 16 },
          fontFamily: "JetBrains Mono",
          fontLigatures: true,
          cursorBlinking: "smooth",
          cursorSmoothCaretAnimation: "on",
          smoothScrolling: true,
          renderWhitespace: "selection",
          bracketPairColorization: {
            enabled: true,
          },
          guides: {
            bracketPairs: true,
            indentation: true,
          },
        }}
      />
    </div>
  );
}

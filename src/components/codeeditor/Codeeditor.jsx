import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; 
import "./Codeeditor.css"; 
const Codeeditor = () => {
  const [code, setCode] = useState("// Start typing your code here...");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);
  const handleRunCode = () => {
    setOutput(`You entered: \n${input}`);
  };
  return (
    <div className="editor-container">
           <select className='selectoption' name="" id="">
          <option value="c">c</option>
          <option value="c++">cpp</option>
          <option value="java">Java</option>
          <option value="javascript">Javascript</option>
          <option value="python">Python</option>
       </select>
      <div className="editor-header">
      <div className="code-editor">
        <div className="line-numbers">
          {code.split("\n").map((_, i) =>(
            <span key={i}>{i + 1}</span>
          ))}
        </div>
        <textarea
          className="code-input"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck="false"
        />
      </div>
      <div className="input-output-section">
        <div className="input-box">
          <h3>Input</h3>
          <textarea
            value={input}
            className="bg-input-output"
            onChange={(e) => setInput(e.target.value)}
            spellCheck="false"
            placeholder="Enter your input here"
          />
        </div>
        <div className="output-box">
          <h3>Output</h3>
          <textarea
            className="bg-input-output"
            value={output}
            readOnly
            spellCheck="false"
            placeholder="Output will appear here"
          />
        </div>
      </div>
      <button className="run-button" onClick={handleRunCode}>
        Run Code
      </button>
    </div>
    </div>
  );
};

export default Codeeditor;

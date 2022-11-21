import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import "./styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

function Solution({ data }) {
  const [html, setHtml] = useState(data.html);
  const [css, setCss] = useState(data.css);
  const [js, setJs] = useState(data.js);
  const [srcDoc, setSrcDoc] = useState("");

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <section className="solution">
      <div className="text-center">
        <h2 className="heading">Solution for {data.question_no}</h2>
        <p className="question">{data.question}</p>
      </div>

      <p className="title question">Code</p>
      <div className="editor box pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="Js"
          value={js}
          onChange={setJs}
        />
      </div>
      <p className="title question">Output</p>
      <div className={`pane box editor-container  iframe-container`}>
        <div className="editor-title m-1">
          Rendered HTML
          <button
            type="button"
            className="expand-collapse-btn"
            onClick={() => setOpen((prevOpen) => !prevOpen)}
          >
            <FontAwesomeIcon
              icon={open ? faCompressAlt : faExpandAlt}
              className="expand-svg"
            />
          </button>
        </div>
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="200%"
          scrolling="no"
          className={`iframe ${open ? "" : "hidden"}`}
        />
      </div>
    </section>
  );
}

export default Solution;

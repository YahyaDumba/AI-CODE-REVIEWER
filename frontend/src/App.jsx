import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Markdown from "react-markdown";
import "./App.css";
import Editor from "react-simple-code-editor";
import axios from "axios";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";


function App() {
  const [count, setCount] = useState(0);
  const [code, setCode] = useState(` function sum() {
                    return 2 + 2;
                }`);

  const [review, setReview] = useState(``);

  useEffect(() => {
    prism.highlightAll();
  });

  async function reviewCode() {
    const response = await axios.post("http://localhost:3000/ai/get-review", {
      code,
    });
    setReview(response.data.review);
    // console.log(response.data.review);
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) => prism.highlight(code, prism.languages.js)}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                color: "#abb2bf",
                height: "100%",
                overflow: "auto",
              }}
            />
          </div>
          <div onClick={reviewCode} className="review">
            Review
          </div>
        </div>
        <div className="right">
          <Markdown 
          rehypePlugins={rehypeHighlight}
          >{review}</Markdown>
        </div>
      </main>
    </>
  );
}

export default App;

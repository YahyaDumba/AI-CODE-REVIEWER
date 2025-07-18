import { useState, useEffect } from 'react';
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import "prismjs/components/prism-javascript";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios';
import './App.css';

function App() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1;
}`);
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  const reviewCode = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/ai/get-review', { code });
      setReview(response.data);
    } catch (error) {
      setReview(`❌ Error: ${error.response?.data?.message || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ display: 'flex', height: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      {/* Code Editor Section */}
      <div className="left" style={{ flex: 1, padding: '1rem', backgroundColor: '#111827', color: '#fff' }}>
        <h2 style={{ marginBottom: '1rem' }}>📝 Code Editor</h2>
        <Editor
          value={code}
          onValueChange={setCode}
          highlight={code => prism.highlight(code, prism.languages.javascript, 'javascript')}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 16,
            border: "1px solid #333",
            borderRadius: "5px",
            height: "300px",
            width: "100%",
            backgroundColor: "#1e1e1e",
            color: "#f8f8f2",
          }}
        />
        <button
          onClick={reviewCode}
          disabled={loading}
          className="review"
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            borderRadius: '5px',
            backgroundColor: '#4f46e5',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          {loading ? 'Reviewing...' : 'Review'}
        </button>
      </div>

      {/* AI Review Section */}
      <div className="right" style={{
        flex: 1,
        padding: '1rem',
        backgroundColor: '#f9fafb',
        color: '#111827',
        overflowY: 'auto',
        fontSize: '1rem'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>🧠 AI Code Review</h2>
        <div style={{
          backgroundColor: '#ffffff',
          border: '1px solid #d1d5db',
          borderRadius: '8px',
          padding: '1rem',
          fontFamily: 'Consolas, "Courier New", monospace',
          lineHeight: 1.6,
          whiteSpace: 'pre-wrap'
        }}>
          <Markdown rehypePlugins={[rehypeHighlight]}>
            {review}
          </Markdown>
        </div>
      </div>
    </main>
  );
}

export default App;

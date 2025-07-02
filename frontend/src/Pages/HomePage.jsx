import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import Editor from 'react-simple-code-editor';
import prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [code, setCode] = useState("// Paste your code here\n");
  const [review, setReview] = useState('');

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  const toggleMenu = () => setMobileMenuOpen(prev => !prev);
  const runReview = () => {
    // replace with actual API call
    setReview('**Code Review**\n\n- This is a placeholder review. Click on Try it Now for The Review');
  };

  const navItems = ['Home', 'Features', 'Docs', 'Contact'];

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
      {/* Top Navigation */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
          <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            AI Code Reviewer
          </h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          {navItems.map(item => (
            <a
              key={item}
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-300 transition"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-800 px-4 py-3 space-y-2 shadow-md">
          {navItems.map(item => (
            <a
              key={item}
              href="#"
              className="block text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-300 transition"
            >
              {item}
            </a>
          ))}
        </nav>
      )}

      {/* Hero + Editor Section */}
      <main className="flex flex-1 overflow-hidden">
        {/* Hero Panel */}
        <section className="hidden lg:flex lg:flex-col lg:justify-center lg:w-1/3 bg-indigo-50 dark:bg-indigo-900 p-8">
          <h2 className="text-xl font-semibold text-indigo-700 dark:text-indigo-200">
            Instant AI Code Reviews
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Paste your snippet and get actionable feedback on style, performance, and security in seconds.
          </p>
          <div className="mt-6 space-x-3">
            <button className="px-5 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition">
              Try It Now
            </button>
            <button className="px-5 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-100 dark:hover:bg-indigo-800 transition">
              Learn More
            </button>
          </div>
        </section>

        {/* Editor & Review Panel */}
        <div className="flex flex-col flex-1 p-6 space-y-6 overflow-auto">
          <div className="flex-1 bg-gray-800 rounded-lg shadow-lg overflow-hidden relative">
            <Editor
              value={code}
              onValueChange={setCode}
              highlight={c => prism.highlight(c, prism.languages.js, 'javascript')}
              padding={15}
              style={{
                fontFamily: '"Fira Code", monospace',
                fontSize: 14,
                color: '#e0e0e0',
                backgroundColor: 'transparent',
                height: '100%',
                outline: 'none'
              }}
            />
            <button
              onClick={runReview}
              className="absolute bottom-5 right-5 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition"
            >
              Review Code
            </button>
          </div>
          <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 overflow-auto">
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
              {review}
            </ReactMarkdown>
          </div>
        </div>
      </main>
    </div>
  );
}

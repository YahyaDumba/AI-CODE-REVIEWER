import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';

const sections = [
  {
    title: 'Overview',
    image: './src/images/overview.png',
    content: `AI Code Reviewer is a powerful developer tool designed to provide instant, detailed feedback on JavaScript code snippets. It integrates performance metrics, security checks, and best-practice suggestions to help you write cleaner, more maintainable code.`
  },
  {
    title: 'Architecture',
    image: './src/images/architecture.png',
    content: `The application consists of:

- **Frontend**: React with Tailwind CSS and Framer Motion for animations.
- **Code Editor**: react-simple-code-editor with Prism.js for syntax highlighting.
- **Backend**: Node.js/Express API endpoint (/ai/get-review) that interfaces with an AI service to analyze code.
- **Communication**: Axios for HTTP requests between frontend and backend.`
  },
  {
    title: 'Installation',
    content: `Follow these steps to install and run locally:

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/username/ai-code-reviewer.git
   cd ai-code-reviewer
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Start the backend API:
   \`\`\`bash
   cd server
   npm start
   \`\`\`

4. Start the frontend:
   \`\`\`bash
   cd ../client
   npm start
   \`\`\``
  },
  {
    title: 'Usage',
    image: './src/images/localhost.png',
    content: `1. Open the application in your browser at \`http://localhost:3000\`.
2. Paste your JavaScript snippet into the code editor panel.
3. Click **Review Code** to invoke the AI analysis.
4. View structured feedback in the right panel, including:
   - Code quality warnings
   - Performance optimizations
   - Security vulnerability alerts
   - Suggested refactorings`
  },
  {
    title: 'API Reference',
    content: `**POST** \`/ai/get-review\`

- **Request Body**: \`{ code: string }\`
- **Response**: \`{ review: string }\`

Example using curl:
\`\`\`bash
curl -X POST http://localhost:3000/ai/get-review \
  -H "Content-Type: application/json" \
  -d '{ "code": "function hello() { console.log(\"Hi\"); }" }'
\`\`\``
  },
  {
    title: 'Examples',
    image: './src/images/example.png',
    content: `**Input Code**:
\`\`\`javascript
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3));
\`\`\`

**Sample AI Feedback**:
\`\`\`markdown
- 🔍 Consider adding type checks for inputs.
- ⚡ Use arrow functions for brevity: \`const sum = (a, b) => a + b;\`
- ✅ Good use of concise return.
\`\`\``
  },
  {
    title: 'FAQ',
    content: `**Q: Which languages are supported?**

A: Currently JavaScript. More languages coming soon.

**Q: How is security handled?**

A: Code is analyzed in-memory; no execution on server.

**Q: Can I integrate this into my CI/CD?**

A: Yes—call the \`/ai/get-review\` endpoint in your pipeline.`
  }
];

export default function DocumentationPage() {
  return (
    <div className="bg-zinc-800 text-white flex gap-3 flex-col h-full bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-poppins">
      <Navbar />
      <main className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="bg-zinc-600 text-white hidden lg:block w-64 bg-white dark:bg-gray-800 p-6 shadow-md">
          <nav className="space-y-4">
            {sections.map(section => (
              <a
                key={section.title}
                href={`#${section.title.toLowerCase().replace(/ /g, '-')}`}
                className="block text-white dark:text-white-400 hover:text-white hover:underline font-medium transition"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <article className="flex-1 p-8 overflow-auto prose dark:prose-dark max-w-none">
          {sections.map((sec, idx) => (
            <motion.section
              key={sec.title}
              id={sec.title.toLowerCase().replace(/ /g, '-')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white-700 dark:text-white-300">
                {sec.title}
              </h2>
              <motion.img
                src={sec.image}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.2 + 0.2, duration: 0.6 }}
                className="w-full max-w-xl mx-auto mb-6 rounded-lg shadow-lg"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.2 + 0.4, duration: 0.6 }}
              >
                {sec.content.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </motion.div>
            </motion.section>
          ))}
        </article>
      </main>
    </div>
  );
}

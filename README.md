This repository demonstrates a common issue in Express.js applications where JSON request bodies are not parsed correctly due to missing or incorrect Content-Type headers. The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version that ensures proper parsing of JSON data.

## Problem
The original code lacks proper middleware to parse incoming JSON requests.  When a client sends a POST request with JSON data but without the correct `Content-Type: application/json` header, Express.js won't automatically parse the body, resulting in `req.body` being empty.

## Solution
The solution involves using `express.json()` middleware to parse JSON request bodies.  This middleware must be placed before the route handler that expects JSON data.  Additionally, improved error handling is included to catch and report parsing errors.
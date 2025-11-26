# Control Hub Login Mock

A simple Node/Express project that recreates the Control Hub login screen shown in the provided design reference. The UI uses only static HTML and CSS and can be served locally with Node.

## Getting started

1. Clone the repo and move into the project directory:
   ```bash
   git clone <repo-url>
   cd Thinktank1
   ```
2. Install dependencies (Node 18+ recommended):
   ```bash
   npm install
   ```
3. Start the server in production mode:
   ```bash
   npm start
   ```
   or run with hot-reload friendly settings during development:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000` in your browser to view the page. Log in with:
   - **User:** `testadmin`
   - **Password:** `123`

## Notes
- The layout is responsive and keeps the hero imagery with a floating phone card on smaller screens.
- After signing in you are taken to a landing view that mirrors the reference, including a sidebar Product Wizard menu with Initial Setup, User Management, and System Health Monitor links.
- Imagery comes from Unsplash placeholders; replace them with production assets as needed.

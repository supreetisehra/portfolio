# Supreeti Sehra | Personal Portfolio

A sleek, premium, professional portfolio website designed with technical leadership, engineering excellence, and artistic flow in mind. Built with React, Vite, Tailwind CSS, and Framer Motion (`motion/react`).

---

## 🚀 Deployment to GitHub Pages (Static Hosting)

To "convert" and deploy this website as a fully static HTML/JS/CSS application on GitHub, you can use either of the two methods below.

### Method 1: Automated Deployment via GitHub Actions (Recommended)

This project is pre-configured with a modern CI/CD workflow that builds and deploys your website automatically every time you push code to GitHub.

1. **Create your GitHub Repository** (if not already done) and push your codebase there.
2. Go to your repository on GitHub and click on **Settings**.
3. In the left-hand sidebar, click on **Pages**.
4. Under **Build and deployment**, look for **Source** and change it from *Deploy from a branch* to **GitHub Actions**.
5. Push any change to your `main` (or `master`) branch. GitHub Actions will automatically launch, build your site, and publish the static files!

---

### Method 2: Manual Compile & Custom Upload

Since we have pre-configured relative pathing (`base: './'` in `vite.config.ts`), you can also compile the static website locally and upload the resulting files wherever you like:

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Compile the static HTML, CSS, and JS bundle**:
   ```bash
   npm run build
   ```
3. This creates a `/dist` folder containing the compiled **index.html** along with isolated asset scripts and styling sheets. 
4. You can directly host the contents of the `/dist` folder on any web server, drag-and-drop it to Netlify, or deploy it to a `gh-pages` branch using tools like the `gh-pages` npm package.

---

## 🛠️ Local Development

To run the project locally on your machine:

1. Clone or download the source files.
2. In your terminal, navigate to the folder and run:
   ```bash
   npm install
   npm run dev
   ```
3. Open `http://localhost:3000` in your browser.

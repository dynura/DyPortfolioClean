# Personal Portfolio Website

A modern, responsive personal portfolio built with React, Vite, and Tailwind CSS. Features dynamic theme toggling (light/dark mode), custom interactive project modals, animated tech stack carousels, and GitHub activity integration.

## Tech Stack

- **Frontend Framework:** React + Vite
- **Styling:** Tailwind CSS + PostCSS
- **Icons:** Lucide React & React Icons (`react-icons/si`)
- **Deployment:** GitHub Pages (via GitHub Actions)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `yarn`

### Project Structure
```plaintext
    src/
    ├── assets/          # Static images & avatars
    ├── components/      # Reusable UI components (Navbar, Modals, TechStack)
    ├── data/            # Portfolio content & project data files
    ├── App.jsx          # Main page layout & state logic
    └── index.css        # Tailwind setup & custom utility classes
```

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/dynura/personal-portfolio.git
   cd personal-portfolio
   ```
2. Install dependencies:
   ```bash
    npm install
   ```
3. Run the development server:
    ```bash
    npm run dev
   ```
   Open `http://localhost:5173` in your browser to view the site.
4. Build for production:
    ```bash
    npm run dev
    ```


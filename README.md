# Ellty Vite Page Selector

A modern React-based page selector card component built with Vite. This UI allows users to select multiple pages using checkboxes, including an option to select all pages at once. The design is clean, responsive, and easy to integrate into any web application.

## Features
- Select individual pages or all pages
- Responsive and customizable card design
- Built with React and Vite for fast development
- Styled with CSS for a modern look

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Ajaykatta03/ellty-vite-page-selector.git
   cd ellty-vite-page-selector
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open your browser at `http://localhost:5173` to view the app.

## Usage
The main component is `PageSelectorCard`, located in `src/components/PageSelectorCard.jsx`. You can import and use it in your React app:

```jsx
import PageSelectorCard from './components/PageSelectorCard';

function App() {
  return <PageSelectorCard />;
}
```

## Customization
- Edit `PageSelectorCard.css` to change styles.
- Modify the `PAGES` array in `PageSelectorCard.jsx` to update page options.

## License
MIT

## Author
Ajay Katta

## Live Demo
[View the live app](https://ellty-vite-page-selector.vercel.app/)
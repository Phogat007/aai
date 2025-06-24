# AI Knowledge Spark

A modern, full-stack AI-powered chat and agent showcase web application built with React, Vite, and TypeScript. This project features authentication, chat UI, agent previews, and a beautiful, responsive design using Tailwind CSS.

## Features
- Modern React + Vite + TypeScript setup
- Authentication (Login/Signup forms)
- AI chat interface with message feedback, attachments, and typing indicators
- Agent showcase and preview
- Responsive, accessible UI components
- Theming support
- Modular code structure for easy extension

## Project Structure
```
├── public/               # Static assets (favicon, robots.txt, etc.)
├── src/
│   ├── components/       # Reusable UI and feature components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility libraries
│   ├── pages/            # Page components (routing targets)
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
├── index.html            # Main HTML entry point
├── package.json          # Project metadata and dependencies
├── tailwind.config.ts    # Tailwind CSS configuration
├── vite.config.ts        # Vite build configuration
├── tsconfig.json         # TypeScript configuration
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm (v9+ recommended)

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit `http://localhost:8080` in your browser.

### Build for Production
```bash
npm run build
```

### Linting (if ESLint is configured)
```bash
npm run lint
```

## Customization
- Update theme and UI in `src/components/ui/` and `tailwind.config.ts`.
- Add or modify pages in `src/pages/`.
- Extend chat/agent logic in `src/components/chat/` and `src/components/agents/`.

## License
This project is provided as-is for educational and development purposes.

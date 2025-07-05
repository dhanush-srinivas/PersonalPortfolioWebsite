# Personal Portfolio Website

This project contains an Express + React application.

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm

## Installation

Install dependencies in the repository root:

```bash
npm install
```

## Development

Run the development server using the cross-platform script:

```bash
npm run dev
```

The `npm run dev` script uses `cross-env` to set `NODE_ENV=development`
in a way that works on both Windows and Unix-based systems.

The app will start on port **5000**. Open [http://localhost:5000](http://localhost:5000) in your browser to view it.

## Production build

To create a production build run:

```bash
npm run build
```

Then start the built server with:

```bash
npm start
```

The production start script also uses `cross-env` so Windows users do not
need a Unix-like shell.



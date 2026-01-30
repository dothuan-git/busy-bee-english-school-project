# Busy Bee English School

A modern website for a children's English school, built with Next.js 14+.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Package Manager:** pnpm

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm (`npm install -g pnpm`)

### Installation

```bash
# Clone the repository
git clone https://github.com/dothuan-git/busy-bee-english-school-project.git
cd busy-bee-english-school-project

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local
```

### Development

```bash
# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## Available Scripts

| Command        | Description                    |
| -------------- | ------------------------------ |
| `pnpm dev`     | Start development server       |
| `pnpm build`   | Build for production           |
| `pnpm start`   | Start production server        |
| `pnpm lint`    | Run ESLint                     |

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/
│   ├── ui/           # Reusable UI components (Button, etc.)
│   ├── layout/       # Layout components (Header, Footer)
│   └── sections/     # Page sections
├── lib/              # Utilities, helpers, constants
├── hooks/            # Custom React hooks
├── types/            # TypeScript types/interfaces
├── styles/           # Global styles
└── assets/           # Images, fonts, static files
```

## Deployment

This project can be deployed to [Vercel](https://vercel.com) with zero configuration:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dothuan-git/busy-bee-english-school-project)

## License

This project is private and proprietary to Busy Bee English School.

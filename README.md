# Portfolio Website

Personal portfolio website showcasing AI development work, research, and projects. Built with React, TypeScript, and shadcn/ui components.

## Features

- **Bilingual Support**: English and Turkish language support with React i18n context
- **Responsive Design**: Mobile-first responsive layout with Tailwind CSS
- **Modern UI Components**: Built with shadcn/ui (Radix UI + Tailwind CSS)
- **Performance Optimized**: React hooks, optimized rendering, scroll indicators
- **Accessibility**: ARIA attributes, keyboard navigation, focus management
- **SEO Optimized**: Meta tags, structured data, semantic HTML
- **Type-Safe**: Full TypeScript support for better developer experience

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Reusable component library (Radix UI primitives)
- **React Context** - State management for i18n
- **Lucide React** - Icon library

## Project Structure

```
portfolio/
├── public/              # Static assets
│   └── img/            # Images
├── src/
│   ├── components/     # React components
│   │   ├── ui/        # shadcn/ui components
│   │   ├── layout/    # Header, Footer
│   │   ├── sections/  # Page sections (Hero, About, etc.)
│   │   └── shared/    # Shared components (LanguageSwitcher, etc.)
│   ├── data/          # TypeScript data files
│   │   ├── translations.ts
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   ├── research.ts
│   │   └── skills.ts
│   ├── hooks/         # Custom React hooks
│   │   ├── useI18n.ts
│   │   ├── useRevealObserver.ts
│   │   └── useScrollIndicator.ts
│   ├── lib/           # Utility libraries
│   │   ├── i18n.tsx   # i18n context and provider
│   │   └── utils.ts   # Utility functions
│   ├── styles/        # CSS files
│   │   ├── main.css
│   │   └── tailwind.css
│   ├── App.tsx        # Main app component
│   └── main.tsx       # React entry point
├── index.html         # HTML entry point
├── vite.config.ts     # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
└── components.json    # shadcn/ui configuration
```

## Getting Started

### Prerequisites

- **Node.js 20+** (LTS recommended)
- **npm** or compatible package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

The production build will be output to the `dist/` directory.

## Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint and auto-fix issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Adding shadcn/ui Components

To add new shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

For example:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
```

Components will be added to `src/components/ui/` and can be imported from `@/components/ui/[component-name]`.

## Internationalization (i18n)

The site uses React Context for internationalization. To add or modify translations:

1. Edit `src/data/translations.ts`
2. Add translation keys to both `en` and `tr` objects
3. Use the `useI18n` hook in components:

```tsx
import { useI18n } from '@/hooks/useI18n';

function MyComponent() {
  const { t, language, setLanguage } = useI18n();
  
  return (
    <div>
      <p>{t('myTranslationKey')}</p>
    </div>
  );
}
```

## Code Quality

This project uses:

- **ESLint** - JavaScript/TypeScript linting (see `eslint.config.mjs`)
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

Run linting and formatting before committing:

```bash
npm run lint:fix
npm run format
```

## Deployment

### GitHub Pages

The site is automatically deployed to GitHub Pages via GitHub Actions on every push to the `main` branch.

**Deployment Configuration:**
- Workflow file: `.github/workflows/deploy.yml`
- Build output: `dist/` directory
- Deployment branch: Automatically handled by GitHub Actions

**To deploy manually:**
1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Or trigger manually via GitHub Actions UI (workflow_dispatch)

**Repository Settings:**
1. Go to Settings → Pages
2. Ensure "Source" is set to "GitHub Actions"
3. The site will be available at `https://[username].github.io/portfolio/`

For custom domains, configure in Settings → Pages → Custom domain.

### Other Platforms

For other hosting platforms (Vercel, Netlify, etc.):

1. Build the project: `npm run build`
2. Deploy the `dist/` directory
3. Configure the build command: `npm run build`
4. Configure the output directory: `dist`

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ features
- CSS Grid and Flexbox
- React 19 features

## License

ISC

## Author

Utku Arslan - [GitHub](https://github.com/utkuarslan5) | [LinkedIn](https://www.linkedin.com/in/utkuarslan5)

# Shadcn Component Template

A template for building and publishing your own custom shadcn registry components. Includes documentation, landing page, and everything you need to deploy your component registry.

## Features

- 📦 **Ready-to-use template** - Fork and start building immediately
- 📚 **Documentation site** - Beautiful docs powered by Fumadocs
- 🚀 **One-click deploy** - Deploy to Vercel with zero configuration
- 🎨 **Shadcn registry compatible** - Works with `npx shadcn add`

## Quick Start

1. **Use this template** - Click "Use this template" on GitHub

2. **Install dependencies**:
```bash
pnpm install
```

3. **Replace the placeholder component** at `registry/new-york-v4/ui/your-component.tsx`

4. **Update the registry** in `registry/registry-ui.ts`

5. **Build the registry**:
```bash
pnpm registry:build
```

6. **Start development**:
```bash
pnpm dev
```

7. **Deploy to Vercel** and share your component!

## Usage

Once deployed, users can install your component with:

```bash
npx shadcn@latest add https://your-domain.vercel.app/r/your-component.json
```

## Project Structure

```
├── registry/
│   ├── new-york-v4/ui/     # Your components go here
│   ├── registry-ui.ts       # Component definitions
│   └── index.ts             # Registry configuration
├── content/docs/            # Documentation (MDX)
├── app/                     # Next.js app
└── public/r/                # Built registry files
```

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm registry:build` - Rebuild the component registry

## License

MIT - Free to use for personal and commercial projects.

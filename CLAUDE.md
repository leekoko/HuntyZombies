# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 TypeScript application for **Hunty Zombies Codes** - a website that provides working codes for the Roblox game "Hunty Zombies". The site features a cinematic gaming-inspired dark theme with amber/orange accents and displays active/expired game codes with redemption instructions.

## Development Commands

```bash
# Development server (usually runs on localhost:3001)
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## Architecture & Key Concepts

### Theme System
The application uses a sophisticated dark theme with cinematic gaming aesthetics:
- **Color Palette**: Deep dark backgrounds with warm amber/orange accents
- **CSS Variables**: Defined in `app/theme.css` using HSL values for consistency
- **Tailwind Integration**: Custom CSS properties integrated via `@theme inline` directive
- **Typography**: Inter font family with advanced OpenType features

### Component Architecture

**Layout Components:**
- `Header.tsx`: Sticky navigation with scroll effects and mobile menu
- `Footer.tsx`: Site footer with branding and quick links
- `CodeCard.tsx`: Interactive cards displaying game codes with copy functionality
- `ExpiredCodesTable.tsx`: Table component for expired codes using Radix UI table primitives
- `FAQ.tsx`: Accordion-based FAQ section

**UI Foundation:**
- Built on **Radix UI** primitives for accessibility and behavior
- **Shadcn/ui** component library for consistent styling
- All components follow the dark theme color system
- Responsive design with mobile-first approach

### Data Management

**Static Data:**
- Game codes stored in `data/codes.json` with structure:
  ```json
  {
    "activeCodes": [{"code": "...", "reward": "...", "addedDate": "..."}],
    "expiredCodes": [{"code": "...", "reward": "...", "addedDate": "..."}]
  }
  ```

### Styling Architecture

**Globals CSS (`app/globals.css`):**
- Tailwind base layer customizations
- Custom animations (`fadeInUp`, `slideInFromLeft`)
- Premium component styles (`card-premium`, `btn-primary`)
- Cinematic effects (glow effects, enhanced shadows)

**Theme CSS (`app/theme.css`):**
- CSS custom properties for color system
- Dark theme variants
- Typography and spacing variables

### Visual Design System

**Hero Section:**
- Background image (`/public/img/bg.webp`) with gradient overlay
- Cinematic parallax effects
- Prominent call-to-action buttons

**Code Display:**
- Copy-to-clipboard functionality for all codes
- Visual feedback for copy actions
- Status indicators (Active/Expired) with appropriate color coding

**Interactive Elements:**
- Smooth hover transitions and micro-interactions
- Scale transforms and glow effects
- Glass morphism effects on navigation

## Key Technical Decisions

1. **Next.js App Router**: Uses modern App Router for routing and layouts
2. **Server Components**: Components are server-rendered by default for performance
3. **Tailwind CSS 4.x**: Latest version with inline theme configuration
4. **TypeScript**: Strict typing for component props and data structures
5. **No Authentication**: Simple static site focused on code distribution
6. **Mobile-First**: Responsive design prioritizing mobile experience

## Content Structure

The site follows a single-page layout with sections:
1. **Hero**: Branding and main CTA with background image
2. **Active Codes**: Grid of current working codes
3. **Redemption Guide**: Step-by-step instructions
4. **Rewards Info**: What players can earn from codes
5. **Expired Codes**: Historical codes table
6. **FAQ**: Common questions about codes

## Development Notes

- **Port Conflicts**: Development server defaults to 3001 if 3000 is in use
- **Image Assets**: Game screenshots stored in `/public/img/`
- **Responsive Breakpoints**: Uses Tailwind's default breakpoints (sm, md, lg, xl)
- **Animation Performance**: CSS transforms preferred over JavaScript animations
- **Dark Theme Only**: No light mode implementation - designed specifically for gaming aesthetic
# GMEA Website

A responsive company and services website for GMEA Electronics & CCTV, GMEA Sunpower Solutions, and GMEA Rental.

## Features

- Responsive layouts for mobile, tablet, desktop, and wide screens
- Service-specific product catalogs and category filters
- Product detail modals with phone and email contact links
- Solar project gallery
- Separate Solar and Electronics certificate galleries
- Reduced-motion accessibility support

## Technology

- React 19
- React Router
- Vite
- Tailwind CSS
- Framer Motion
- Phosphor Icons

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Routes

| Route | Page |
| --- | --- |
| `/` | Intro splash |
| `/services` | Company selection |
| `/electronics` | Electronics and CCTV services |
| `/solar` | Solar products and projects |
| `/rental` | Equipment rental |

The legacy `/cctv` route redirects to `/electronics`.

## Project structure

```text
src/
  components/       Reusable catalog, navigation, modal, and gallery components
  data/             Company, product, project, and certificate data
  pages/            Route-level pages
  App.jsx           Application routes and transitions
  styles.css        Global styles, themes, and responsive foundations
public/
  assets/           Logos, backgrounds, and product images
  certificates/     Solar and Electronics certificates
  projects/         Project photos
  solar-package/    Solar package images
```

## Managing content

Company details, filters, products, projects, and certificate paths are defined in `src/data/companies.js`. Add new images under `public/` and reference them with root-relative paths such as `/assets/example.png`.

## Responsive behavior

- Mobile: compact navigation labels, single-column catalogs and galleries, touch-friendly controls
- Tablet: two-column service, product, project, and certificate layouts where space permits
- Desktop and wide screens: three-column content grids capped at a readable maximum width
- Product dialogs use dynamic viewport sizing so they remain usable around mobile browser controls

## Deployment

Deploy the generated `dist/` directory after running `npm run build`. Configure the hosting provider to serve `index.html` as the fallback for client-side routes.

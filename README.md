# Tra Nguyen — Portfolio

An English-language portfolio for a backend-focused Senior Software Engineer. Built with Next.js 14 App Router, TypeScript, and Tailwind CSS.

## Development

```sh
npm ci
npm run dev
```

Visit http://localhost:3000. To use another port: `npm run dev -- --port 3001`.

## Validation

```sh
npm run lint
npm run build
npm start
```

The page is statically rendered with server components. Its content and native anchor links work without JavaScript. Motion is decorative and respects `prefers-reduced-motion`.

## Content and design

- `data/cv.ts`: profile, work experience, education, and repositories. Location is optional and currently omitted at the owner’s request. A project's optional `featured` field includes its artwork variant, category, problem, and approach. Only featured projects appear on the homepage. The optional `packages` field adds npm links. A `private` repository visibility is shown as a label, and `demoUnavailable` suppresses an unavailable demo link while preserving its URL in the data.
- `components/`: hero, selected work, career timeline, expertise/about, and contact sections. Glo and Katalon receive detailed treatment; other roles are compact, and freelance work is shown separately.
- `app/globals.css`: ivory/sage palette, responsive layout, typography, focus styles, and reduced-motion support.
- `app/layout.tsx`, `app/opengraph-image.tsx`, `app/icon.svg`, `app/favicon.ico`: local Geist fonts, metadata, generated social sharing image, and original monogram icons.

The project illustrations are original SVG/CSS artwork, not screenshots or measured performance data. The VeriCause diagram describes its conceptual claim/evidence verification workflow. VeriCause content comes from the published npm READMEs for `ai-reliability-runtime` and `ai-reliability-layer`; Travel Planner and extension-text2speech content comes from their repository READMEs. No project outcomes or business metrics have been fabricated.

## Deployment configuration

Set `NEXT_PUBLIC_SITE_URL` to the final public origin (for example, `https://your-domain.com`) before a production build so sharing images resolve to the correct domain. It defaults to `http://localhost:3000` for local development. Use the public origin of the server when previewing on a different local port.

Deploying is a separate step. No publishing or external services are needed for local use.

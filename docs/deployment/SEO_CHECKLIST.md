# SEO_CHECKLIST.md

# SEO Checklist

## Purpose

This document defines the Search Engine Optimization (SEO) requirements for the portfolio website. Every item should be verified before the project is considered production-ready.

SEO is integrated throughout development rather than treated as a final deployment task.

---

# 1. Technical SEO

## Metadata

Every page must include:

- Unique title
- Meta description
- Canonical URL
- Robots directives

Titles and descriptions should accurately reflect the page content.

---

## Open Graph

Every page should define:

- og:title
- og:description
- og:image
- og:url
- og:type
- og:site_name

This ensures proper previews when links are shared.

---

## Twitter Cards

Configure:

- summary_large_image
- title
- description
- image

---

## robots.txt

Create and maintain:

robots.txt

Requirements:

- Allow indexing of public pages
- Block unnecessary paths
- Include sitemap reference

---

## sitemap.xml

Generate automatically.

Include:

- Home
- About
- Projects
- Journey
- Contact

Exclude:

- Dashboard
- Authentication routes
- API routes

---

## Canonical URLs

Every page should specify a canonical URL to prevent duplicate content issues.

---

# 2. Semantic HTML

Use semantic elements whenever possible:

- header
- nav
- main
- section
- article
- aside
- footer

Avoid unnecessary div wrappers.

---

# 3. Heading Structure

Only one H1 per page.

Maintain a logical hierarchy:

H1

↓

H2

↓

H3

Do not skip heading levels.

---

# 4. Image Optimization

Every image should include:

- alt text
- responsive sizing
- optimized format
- lazy loading (when appropriate)

Prefer Next.js Image component.

---

# 5. Performance

Target:

- Fast loading
- Optimized fonts
- Optimized images
- Minimal JavaScript
- Lazy loading
- Code splitting

---

# 6. Accessibility

Verify:

- Color contrast
- Keyboard navigation
- Focus visibility
- Screen reader support
- Form labels

Accessibility contributes to better SEO.

---

# 7. Structured Data

Implement JSON-LD where appropriate.

Examples:

- Person
- Website
- Breadcrumb (if needed)

---

# 8. URL Structure

Use clean URLs.

Good:

/projects

Bad:

/page?id=4

---

# 9. Internal Linking

Ensure logical navigation between pages.

Examples:

Home → Projects

Projects → Contact

About → Journey

---

# 10. Favicon & Icons

Provide:

- favicon.ico
- 16×16
- 32×32
- Apple Touch Icon
- Android Icons
- Manifest icons

---

# 11. Web Manifest

Create:

manifest.webmanifest

Include:

- Name
- Short Name
- Theme Color
- Background Color
- Icons

---

# 12. Browser Theme

Define:

- theme-color
- color-scheme

Support both Light and Dark themes.

---

# 13. Social Sharing

Create a custom Open Graph image for the portfolio.

Ensure links render correctly on:

- LinkedIn
- X (Twitter)
- Facebook
- Discord
- WhatsApp

---

# 14. Content Quality

Every page should have:

- Clear purpose
- Meaningful headings
- Readable paragraphs
- Descriptive links

Avoid keyword stuffing.

---

# 15. Security

Ensure:

- HTTPS
- Secure headers (where applicable)
- Safe external links
- Environment variables protected

---

# 16. Verification Before Deployment

Confirm:

- Titles
- Descriptions
- Canonical URLs
- Open Graph
- Twitter Cards
- robots.txt
- sitemap.xml
- Structured Data
- Lighthouse score
- Mobile responsiveness
- Accessibility

---

# SEO Success Criteria

The portfolio should:

- Be discoverable by search engines
- Load quickly
- Share correctly on social media
- Use semantic HTML
- Follow accessibility best practices
- Provide a strong Lighthouse SEO score

SEO is considered complete only after every item in this checklist has been verified.
# DESIGN_SYSTEM.md (Part 1)

# Design System

## Purpose

This document defines the visual language of the portfolio website.

Every interface element should follow this design system to ensure consistency, maintainability, accessibility, and scalability.

The design system acts as the single source of truth for all UI decisions.

---

# Design Philosophy

The visual identity should communicate:

- Professionalism
- Simplicity
- Technical competence
- Modern design
- Excellent readability
- Strong visual hierarchy

The interface should never feel cluttered.

Whitespace is considered an intentional design element.

---

# Design Principles

The UI should be:

- Clean
- Minimal
- Elegant
- Responsive
- Accessible
- Consistent
- Fast

Avoid decorative elements that do not improve usability.

---

# Visual Personality

Keywords

Professional

Modern

Minimal

Editorial

Technical

Confident

Premium

Calm

Readable

---

# Design Tokens

Never hardcode values.

Every color, spacing, typography value and radius should be defined as a reusable design token.

Example

Color

Spacing

Typography

Shadow

Radius

Animation

Z-index

---

# Color System

The color palette should consist of semantic colors rather than arbitrary colors.

## Primary

Main brand color.

Used for:

- Primary buttons
- Links
- Active navigation
- Important highlights

---

## Secondary

Supporting actions.

Used carefully.

---

## Accent

Small visual emphasis.

Never dominate the interface.

---

## Surface

Cards

Panels

Inputs

Containers

---

## Background

Main page background.

Different values for:

Light Theme

Dark Theme

---

## Text

Primary Text

Secondary Text

Muted Text

Inverse Text

---

## Status Colors

Success

Warning

Error

Info

These should only communicate status.

Never use them as decorative colors.

---

# Light Theme

Goals

Bright

Comfortable

Readable

Minimal

Low visual noise

Large whitespace

Clear contrast

---

# Dark Theme

Goals

Comfortable for long reading

High contrast

Low eye strain

Professional appearance

Avoid pure black backgrounds.

Prefer dark neutral surfaces.

---

# Color Rules

Never use more than one primary accent color.

Never rely solely on color to communicate information.

Maintain sufficient contrast.

Interactive elements should always have hover and focus states.

---

# Typography Philosophy

Typography is the primary visual hierarchy tool.

Use typography instead of excessive borders or decorations.

Readable text is more valuable than visually impressive text.

---

# Font Families

Primary

Modern Sans Serif

Secondary (optional)

Monospace

Used only for:

- Code
- Commands
- Technical snippets

---

# Typography Scale

Display

Hero headings.

H1

Main page title.

H2

Section title.

H3

Subsection title.

H4

Card title.

Body Large

Important content.

Body

Default paragraph.

Body Small

Supporting information.

Caption

Metadata.

Button

Interactive controls.

Label

Forms.

---

# Typography Rules

Maximum line length

Approximately 60–75 characters.

Maintain generous line spacing.

Avoid long uninterrupted paragraphs.

Use consistent font weights.

---

# Spacing System

Use a consistent spacing scale.

Recommended scale

4

8

12

16

24

32

48

64

96

128

Never invent random spacing values.

---

# Layout Philosophy

Content should breathe.

Avoid edge-to-edge layouts.

Maintain generous spacing between sections.

---

# Containers

Small

Medium

Large

Full Width

Choose one container width per section.

Avoid inconsistent layouts.

---

# Grid System

Use CSS Grid where appropriate.

Use Flexbox where appropriate.

Do not force one layout solution everywhere.

Choose based on the problem.

---

# Breakpoints

Mobile

Tablet

Laptop

Desktop

Large Desktop

Every component should adapt gracefully.

---

# Section Structure

Every section follows the same structure.

Section

↓

Container

↓

Header

↓

Content

↓

Footer (optional)

Consistency improves usability.

---

# Border Radius

Use only predefined radius values.

Small

Medium

Large

Pill

Full

Avoid random radius values.

---

# Shadows

Shadow should communicate elevation.

Small

Cards

Medium

Dropdowns

Large

Dialogs

Do not use heavy shadows.

---

# Borders

Borders should be subtle.

Use them to separate content rather than decorate it.

---

# Iconography

Use one icon library throughout the project.

Recommended

Lucide React

Icons should:

- Match stroke width
- Match sizing
- Match spacing
- Match alignment

Never mix multiple icon styles.

---

# Icon Sizes

Small

Medium

Large

Extra Large

Choose one standard per context.

---

# Motion Philosophy

Motion should communicate.

Never distract.

Animation exists to improve understanding.

---

# Animation Principles

Use animation for:

- Navigation
- Feedback
- State changes
- Loading
- Page transitions

Avoid unnecessary decorative animations.

---

# Timing

Fast

Micro interactions

Medium

Component transitions

Slow

Page transitions

Keep animations subtle.

---

# Easing

Prefer natural easing.

Avoid aggressive bounce effects.

Professional interfaces should feel smooth and predictable.

---

# Scroll Behaviour

Smooth scrolling.

Maintain clear navigation.

Avoid scroll hijacking.

---

# Visual Hierarchy

Hierarchy should be established through:

Typography

Spacing

Contrast

Alignment

Size

Not through excessive colors.

---

# Consistency Rules

Every page should feel like part of the same application.

The user should immediately recognize:

Buttons

Cards

Forms

Navigation

Sections

without relearning the interface.

---

# Accessibility Foundations

Minimum touch target sizes.

Visible keyboard focus.

Readable typography.

Proper contrast.

Reduced motion support.

Dark and Light theme parity.

Accessibility is a design requirement rather than a later enhancement.

---

# End of Part 1

The next part defines every reusable UI component including buttons, forms, navigation, cards, dashboard elements, tables, alerts, empty states, loading states, responsive rules, and component-specific behavior.# DESIGN_SYSTEM.md (Part 2)

# Reusable Component Specifications

This section defines the behavior and visual rules for every reusable component used throughout the portfolio.

Every component should follow the design tokens defined in Part 1.

---

# Buttons

## Variants

- Primary
- Secondary
- Outline
- Ghost
- Text
- Icon
- Danger (Dashboard only)

---

## Sizes

- Small
- Medium
- Large

---

## States

Default

Hover

Active

Focus

Disabled

Loading

---

## Rules

Buttons should:

- Display clear labels.
- Maintain consistent height.
- Show visible focus indicators.
- Never shift layout during loading.
- Support keyboard interaction.

---

# Links

Differentiate links from plain text.

States:

- Default
- Hover
- Active
- Focus
- Visited (optional)

External links should indicate they open another website.

---

# Cards

Cards are one of the primary layout elements.

Types:

- Project Card
- Skill Card
- Dashboard Card
- Information Card

Every card should include:

- Consistent padding
- Border radius
- Shadow
- Hover state
- Keyboard accessibility (if interactive)

---

# Project Card

Structure

Project Image

↓

Technology Tags

↓

Title

↓

Short Description

↓

Actions

Features:

- Hover animation
- Responsive layout
- Accessible links

Future support:

- Featured badge
- Live Demo
- GitHub
- Case Study

---

# Badge

Used for:

- Technologies
- Categories
- Status
- Featured labels

Variants:

- Filled
- Outline
- Soft

---

# Tags

Technology tags should remain visually lightweight.

Examples:

HTML

CSS

JavaScript

React

Next.js

Tailwind CSS

TypeScript

Supabase

Prisma

---

# Navigation

Desktop Navigation

Logo

↓

Navigation Links

↓

Theme Toggle

↓

Primary Action (optional)

---

Mobile Navigation

Logo

↓

Hamburger Button

↓

Slide Menu

↓

Navigation Links

↓

Theme Toggle

---

Rules

Current page should always be visible.

Keyboard navigation required.

Sticky navigation preferred.

---

# Footer

Contains

Navigation

Social Links

Copyright

Quick Contact

Optional:

Back to Top

---

# Hero Section

Contains

Headline

↓

Supporting Text

↓

Call to Action

↓

Secondary Action

↓

Hero Illustration / Image

↓

Social Links

Avoid overcrowding.

Primary message should be immediately visible.

---

# Section Header

Every section follows:

Small Label (optional)

↓

Heading

↓

Supporting Text

↓

Content

---

# Timeline

Used for

Learning Journey

Structure

Date

↓

Title

↓

Description

↓

Technologies

Should support future additions.

---

# Forms

Forms should remain simple.

Support:

- Validation
- Error states
- Success states
- Loading state
- Disabled state

---

# Inputs

Variants

Text

Email

Password

Search

Textarea

Rules

Visible labels.

Placeholder is not a replacement for labels.

Consistent height.

Accessible focus state.

---

# Select

Consistent with Input styles.

Keyboard accessible.

---

# Checkbox

Clear labels.

Large click target.

---

# Switch

Used for:

Theme Toggle

Future settings

---

# Search

Future component.

Supports:

Filtering

Projects

Dashboard

---

# Empty States

Every empty state should include:

Illustration (optional)

↓

Title

↓

Description

↓

Suggested Action

---

# Loading States

Use skeleton loaders whenever possible.

Avoid large spinning indicators.

Loading should preserve layout.

---

# Skeleton

Future reusable component.

Variants

Card

Text

Avatar

Image

Dashboard

---

# Toast Notifications

Variants

Success

Error

Warning

Info

Short duration.

Non-blocking.

Accessible.

---

# Modal

Must support:

Keyboard

Escape Key

Focus Trap

Overlay Click (optional)

---

# Dialog

Used for confirmations.

Examples

Delete

Logout

Critical actions

---

# Tooltip

Only for supplementary information.

Do not hide important functionality inside tooltips.

---

# Accordion

Future use.

Blog

FAQs

Case Studies

---

# Tabs

Future Dashboard

Future Blog

Future Projects

---

# Dashboard Layout

Sidebar

↓

Top Bar

↓

Content Area

↓

Cards

↓

Tables

↓

Forms

---

# Statistics Cards

Should include

Icon

↓

Label

↓

Value

↓

Trend (optional)

---

# Table

Responsive.

Sortable (future).

Accessible.

Alternating row emphasis optional.

---

# Pagination

Future dashboard enhancement.

Simple navigation.

Clear active page.

---

# Status Badge

Dashboard only.

Variants

Unread

Read

Archived

Responded

---

# Alerts

Types

Success

Error

Warning

Information

Should include:

Icon

↓

Title

↓

Description

---

# Error Pages

404

500

Fallback Error

Every page should provide:

Clear explanation.

Return action.

---

# Theme Toggle

Animated.

Accessible.

Persist user preference.

---

# Social Icons

Use one icon library.

Equal spacing.

Consistent sizing.

Accessible labels.

---

# Responsive Behaviour

Every component should define:

Mobile

Tablet

Laptop

Desktop

No desktop-first assumptions.

---

# Interaction Feedback

Every interactive element should provide:

Hover

Focus

Pressed

Disabled

Loading

Success (where appropriate)

---

# Accessibility Rules

All components must support:

Keyboard navigation

Visible focus

ARIA labels where required

Semantic HTML

Touch-friendly interaction

Reduced motion preference

---

# Design Do's

✓ Use consistent spacing.

✓ Reuse components.

✓ Follow typography hierarchy.

✓ Use semantic HTML.

✓ Design mobile first.

✓ Keep interfaces clean.

✓ Respect whitespace.

✓ Prioritize readability.

---

# Design Don'ts

✗ Random colors.

✗ Random font sizes.

✗ Multiple shadow styles.

✗ Inconsistent spacing.

✗ Decorative animations.

✗ Tiny touch targets.

✗ Hidden navigation.

✗ Poor contrast.

✗ Duplicate components.

---

# Future Design Expansion

The design system should support future features without visual inconsistency.

Potential additions:

- Blog
- CMS
- Analytics
- GitHub Activity
- Case Studies
- Testimonials
- Certifications
- Search
- Multi-language support

All future features should follow this design system without introducing a new visual language.
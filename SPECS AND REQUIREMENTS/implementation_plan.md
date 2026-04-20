# Jhon Paul Baonil 'NexaVolt' Personal Portfolio Website Plan

This plan aims to outline the development of a modern, futuristic personal portfolio website for Jhon Paul Baonil.

## User Review Required
Please review the proposed styling, section requirements, and file structure below. Let me know if you would like me to include the specific text from the `contents of the sections.docx` document (if so, please convert it to a `.txt` file or paste it, as I strictly followed the prompt to use `requirements.txt` as the single source of truth). 

> [!IMPORTANT]
> The site will run on raw HTML, CSS, and JS. No heavy frameworks will be used. 

## Proposed Changes

### Core Structure and Architecture
All files will be placed inside `c:\Users\HF\Desktop\JHON PAUL BAONIL WEB-PORTFOLIO`.

#### [NEW] index.html
- Semantic HTML structure.
- Implementation of sections: Hero, About, Services, Projects, Skills, Availability, Vision, Contact.
- Interlinking and inclusion of necessary fonts (Google Fonts: Orbitron, Poppins, Inter) and CDN icons (e.g., FontAwesome or similar).

#### [NEW] css/styles.css
- **Design Tokens**: CSS variables for the color palette (`#0f172a`, `#00f5ff`, `#8b5cf6`, `#e2e8f0`).
- **Typography base**: Orbitron for headings to give a futuristic feel, Inter for body copy.
- **Glassmorphism**: Utilities for frosted glass (`backdrop-filter: blur(10px)`).
- **Animations**: Keyframes for subtle background fading, typing effect for the hero, glowing animations for hover/focus states.
- **Responsive Layouts**: Flexbox and Grid, with mobile-first media queries.

#### [NEW] js/script.js
- Smooth scrolling implementation.
- Sticky and transparent-to-opaque navigation bar toggling based on scroll.
- Scroll reveal animations using Intersection Observer.
- Simple interactivity (e.g., mobile menu toggle).

## Open Questions
> [!WARNING]
> Since we're not using frameworks, all content will be statically included in the single `index.html`. Do you have specific placeholder text that you want included for projects (i.e. images, links, or specific project names), or should I go ahead and make creative placeholders? Also, do you require any specific contact form endpoint (like Formspree) for the Contact Form, or just frontend implementation?

## Verification Plan
### Automated Tests
- N/A (Standard frontend files, no unit test suite required)

### Manual Verification
- View `index.html` in a web browser to verify mobile responsiveness, color schemes, and the neon/cyber aesthetic.
- Verify smooth scrolling, button hovers, and scroll animations behave nicely without jank.

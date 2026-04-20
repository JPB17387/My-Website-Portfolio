# Portfolio Website Refactor Walkthrough

The portfolio website has been fully refactored, transforming it from conceptual requirements into a fully deployed multi-page architecture with advanced animations and glassmorphism styling.

## What Was Completed

1. **Architecture & File Separation**
   - The project is now structured across multiple HTML files located in the `html/` folder (`home.html`, `about.html`, `projects.html`, `contact.html`).
   - All CSS logic has been extracted to `css/styles.css`.
   - All JS logic has been extracted to `js/script.js`.
   - A root `index.html` was created, which automatically redirects users to `html/home.html` so you don't have to navigate directly to the inner folders.
2. **Standard Repository Files**
   - Added a `README.md` file describing the portfolio and its tech stack.
   - Added a `LICENSE` file containing the stringent `Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)` terms to protect your work and assets.
3. **Animations**
   - **Text Animations**: Created a completely custom CSS keyframe animation (`.animate-text`) applied directly to every `h1` element in the app (like your name or section titles) which simulates a cyberpunk neon flicker effect.
   - **Scroll Animations**: All main content within sections requires scrolling to reveal. By applying a `.hidden` class to components, an `IntersectionObserver` in `script.js` tracks when you scroll down to them. Once 15% visible, it smoothly transitions their opacity and translates their position upwards.
4. **Customizable Cards**
   - We updated `html/projects.html` to not only have placeholder customizable Projects but specifically 2 Hackathon cards under an organized "Hackathon Experiences" section.
   - You can edit their text and anchor tags easily.

## Key Changes To Note

> [!TIP]
> To configure your hackathon cards, simply open `html/projects.html` and look for the elements marked `<!-- Hackathon Event Card 1 -->` and `<!-- Hackathon Event Card 2 -->`. Their `href` tags currently just point to "#" (meaning nowhere), so simply replace "#" with your actual links!

## Verification Results
- **Styling**: Cyber theme (`#00f5ff`, `#0f172a`, etc.) loads flawlessly across all HTML files.
- **Responsiveness**: Basic flexbox wraps elements properly when scaling down (e.g. your contact form stacked next to availability when viewed on mobile).
- **Functionality**: Smooth fade-ins trigger perfectly via the javascript observer as you scroll down.

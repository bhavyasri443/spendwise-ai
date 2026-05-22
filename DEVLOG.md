## Day 1 — 2026-05-21

**Hours worked:** 5

**What I did:**
- Initialized the Next.js project with TypeScript and Tailwind CSS
- Configured shadcn/ui for reusable UI components
- Built a modern SaaS-style landing page
- Created reusable components including Navbar, Hero, Stats, Features, CTA, and Footer
- Applied dark theme styling and responsive layout
- Created GitHub repository and pushed initial commits

**What I learned:**
- Learned better component organization using the Next.js App Router
- Improved understanding of modern SaaS landing page structure and responsive UI patterns

**Blockers / what I'm stuck on:**
- Still deciding the best structure for the audit engine logic and pricing rules

**Plan for tomorrow:**
- Build the AI spend form
- Create audit calculation logic
- Design the audit results section

## Day 2 — 2026-05-22

**Hours worked:** 6

**What I did:**
- Created pricing data structure for AI tools and plans
- Built the AI Spend Audit form component
- Added support for selecting AI tools, plans, and team seats
- Implemented the first version of the audit recommendation engine
- Added savings calculation logic for overspending detection
- Built dynamic audit result cards UI
- Integrated the SpendForm component into the homepage

**What I learned:**
- Learned better state management using React hooks
- Improved understanding of pricing rule systems and audit logic
- Learned how TypeScript handles dynamic object indexing

**Blockers / what I'm stuck on:**
- Need a more scalable structure for handling multiple plan combinations dynamically
- Plan input currently uses text input instead of controlled dropdown options

**Plan for tomorrow:**
- Improve plan selection using dropdown menus
- Add multiple dynamic tool entries
- Store audit state using localStorage
- Begin backend setup with Supabase